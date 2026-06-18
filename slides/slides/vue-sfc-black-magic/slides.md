---
theme: seriph
title: Vue SFC slottedの黒魔術を理解する
info: styleタグに:slottedと書いただけでCSSファイル内で使用可能になる現象に遭遇しました。Vue SFCのコンパイラがどのように解釈しているのかを追って、なぜこうなったかを理解します。
date: 2026-06-20
class: text-center
drawings:
  persist: false
transition: slide-left
mdc: true
duration: 35min
routerMode: hash
---

<Cover title="Vue SFC slottedの黒魔術を理解する" />

---
transition: slide-left
layout: image-right
image: /images/icon.png
---

# **かげろん** です

- Webエンジニア
  - フロントエンド寄り
  - Nuxt, Ruby on Rails
- 北海道出身・在住
- カードゲーム、コミュニティ活動
- https://www.shade4827.net

<br>
<br>

### 最近のハイライト
- 平岡樹芸センター(みどりーむ)を散歩しました

---
transition: slide-left
---

# Vue SFC

- Single File Component: .vueファイル内にHTML、スクリプト、CSSを全て記述できる
- スクリプトをcomposablesなどに分割したり、CSSを別途読み込むことも可能

<br>

```vue
<script setup>
const str = 'hoge'
</script>

<template>
  <div class="example">{{ str }}</div>
</template>

<style scoped src="./sample.css"></style>

<style scoped>
.example {
  color: red;
}
</style>
```

---
transition: slide-left
layout: iframe-right
url: https://ja.vuejs.org/api/sfc-css-features.html#slotted-selectors
---

# Vue2→3の変更点
- slot内のコンテンツに対してのスタイル適用方法が変更
  - `:slotted` を使用して、当てたい箇所とスタイルを記述
  - Vue SFCが提供するCSSの機能
- 今までは通常通りスタイルを記述するとslot内にも適用されていた

---
transition: slide-left
---

# 黒魔術との遭遇
- slot内の `li` が赤色になった
  - `:slotted` はVue SFCの機能であるため、.cssファイルでは使用できないはず
  - 公式ドキュメントでは `<style>` 内の記述しか紹介されていない

<br>

<div class="grid grid-cols-2 gap-4">
```vue
/* SampleComponent.vue */
<template>
  <ul>
    <slot />
  </ul>
</template>

<style scoped src="./SampleComponent.css">
/* :slotted */
</style>
```

```css
/* SampleComponent.css */
:slotted(li) {
  color: red;
}
```
</div>

<p v-click class="font-bold text-2xl text-center">なぜこうなる?🤔</p>

---
transition: slide-left
---

# SFCのコンパイルの流れ
1. SFCのパース(parse.ts)
2. スタイルのコンパイル(compileStyle.ts)
3. プリプロセッサの処理(stylePreprocessors.ts)
4. Scoped CSSの処理(pluginScoped.ts)
5. CSS Modulesの処理()

---
transition: slide-left
---

# SFCのパース
- `descriptor.styles` に `<style>` の内容が入る
- `test` で<span class="font-bold text-red">単純に文字列内を検索</span>し、 `:slotted` を検知

<br>

```ts
  // check if the SFC uses :slotted
  const slottedRE = /(?:::v-|:)slotted\(/
  descriptor.slotted = descriptor.styles.some(
    s => s.scoped && slottedRE.test(s.content),
  )
```

https://github.com/vuejs/core/blob/main/packages/compiler-sfc/src/parse.ts#L287-L291

---
transition: slide-left
---

# compileTemplate() 呼び出し
- `descriptor.slotted === true` の場合、↓の `slotted` がtrueになる

<br>

```ts
  let { code, ast, preamble, map } = compiler.compile(inAST || source, {
    ...
    scopeId: scoped ? longId : undefined,
    slotted,
    ...
  })
```

https://github.com/vuejs/core/blob/main/packages/compiler-sfc/src/compileTemplate.ts#L230-L248

---
transition: slide-left
---

# コード生成のオプション決定
- 第5引数は `undefined` にして `:slotted` に対応した設定にする

```ts
export const transformSlotOutlet: NodeTransform = (node, context) => {
  if (isSlotOutlet(node)) {
    const slotArgs: CallExpression['arguments'] = [
      context.prefixIdentifiers ? `_ctx.$slots` : `$slots`,
      slotName,
      '{}',
      'undefined',
      'true',
    ]

    if (context.scopeId && !context.slotted) { // slottedはtrueになるので回避
      expectedLen = 5
    }
    slotArgs.splice(expectedLen) // remove unused arguments
    ...
  }
}
```

https://github.com/vuejs/core/blob/main/packages/compiler-core/src/transforms/transformSlotOutlet.ts#L18-L53

---
transition: slide-left
---

# ランタイムによるスロットIDの付与
- `noSlotted` が `falsy` なので、`-s` サフィックスのついたスコープIDを付与

<br>

```ts
  if (!noSlotted && rendered.scopeId) {
    rendered.slotScopeIds = [rendered.scopeId + '-s']
  }
```

https://github.com/vuejs/core/blob/main/packages/runtime-core/src/helpers/renderSlot.ts#L94-L96


---
transition: slide-left
---

# コード生成
- `-s` がついていた箇所を `.foo[data-v-xxxxxxxx-s]` の形式に変換

```ts
      if (value === ':slotted' || value === '::v-slotted') {
        rewriteSelector(
          id,
          rule,
          n.nodes[0],
          selectorRoot,
          deep,
          true /* slotted */,
        )
        let last: selectorParser.Selector['nodes'][0] = n
        n.nodes[0].each(ss => {
          selector.insertAfter(last, ss)
          last = ss
        })
        selector.removeChild(n)
        shouldInject = false
        return false
      }
```

https://github.com/vuejs/core/blob/main/packages/compiler-sfc/src/style/pluginScoped.ts#L222-L245

---
transition: slide-left
---

# 結論

## **styleタグ内に書けば解釈できる設計になっている**

<br>

- SFC内で使用している箇所があれば解釈できるように、文字列中を検索している
- コメントに書けば解釈されるようになる副作用がある
- コメントなのかセレクタなのかを区別することまでコストをかける設計ではない