---
theme: seriph
title: Reka UI触ってみる
info: Vueバージョンアップで発生したライブラリ変更の際に、選定しなかったReka UIについて実際に触ってみます。
date: 2026-04-27
class: text-center
drawings:
  persist: false
transition: slide-left
mdc: true
duration: 35min
routerMode: hash
---

<Cover title="Reka UI触ってみる" />

---
transition: slide-left
layout: image-right
image: /images/ticket.png
---

# **かげろん** です

- フロントエンド寄りWebエンジニア
- コミュニティ活動
  - フロントエンド・PHPカンファレンス北海道2026
  - <a href="https://techramenconf.net/2026/" target="_blank" rel="noopener norefferer">TechRAMEN Conference 2026</a>
- https://www.shade4827.net

<br>
<br>

### **最近のハイライト**
- RubyKaigiに行った

---
transition: slide-left
---

# Nuxt2→4に上げていた日のこと…

## **バージョンアップあるある: ライブラリ対応が打ち切られている**
<br>

- <a href="https://github.com/KazanExpress/vue-simple-suggest" target="_blank" rel="noopener norefferer">KazanExpress/vue-simple-suggest</a> を利用していた
  - ユーザーのテキスト入力から部分一致する項目をサジェストするフィールドで利用
  - サジェストの候補から選択しなくてもテキストは保持
  - キーボードの上下操作とEnterでの決定
  - スタイルは独自に定義したい(既存から崩したくない)

---
transition: slide-left
---

# **代替手段**

- 自前実装: 大変(実装も保守も)
- 他のライブラリを使う
  - vue-simple-suggestのfork版 <span v-click class="color-red-500">→メンテナンスが止まって久しい</span>
  - Vuetify <span v-click class="color-red-500">→スタイルを持っていて上書きが大変</span>
  - Headless UI: UIコンポーネントだけが提供されていてメンテナンスも続いている

<br>
<div
  v-click
  class="flex justify-center text-3xl underline decoration-teal-600"
>
  Headless UIを採用
</div>

---
transition: slide-left
layout: center
---

# **Happy End**

---
transition: slide-left
---

# ではなく
### **採用しなかった Reka UI の話をします**

---
transition: slide-left
layout: iframe-right
url: https://reka-ui.com/
---

# **Reka UI**

- Vue向けのヘッドレスUIライブラリ
- Radix Vue → v2でReka UIにリブランド
  - <a href="https://www.radix-ui.com/" target="_blank" rel="noopener norefferer">Radix UI</a>をVueに持ってきたもの
- WAI-ARIAのオーサリングガイドラインに準拠
- Nuxt UIではTailwind CSSと組み合わせて利用されている

---
transition: slide-left
---

# **インストール**

<br>

<div class="bg-gray-900 text-gray-100 rounded-lg p-4 font-mono text-sm overflow-x-auto">
<pre>
# パッケージをインストール
pnpm add reka-ui
</pre>
</div>

<br>

<div class="bg-gray-900 text-gray-100 rounded-lg p-4 font-mono text-sm overflow-x-auto">
<pre>
# nuxt.config.jsに追加
export default defineNuxtConfig({
  modules: ['reka-ui/nuxt'],
})
</pre>
</div>

---
transition: slide-left
layout: center
---

# Demo {.flex .justify-center}

<div class="flex justify-center mb-4">
  <QRCode
    url="https://www.slides.shade4827.net/demo/reka-ui"
    class="mx-auto"
  />
</div>

### https://www.slides.shade4827.net/demo/reka-ui {.flex .justify-center}

---
transition: slide-left
layout: end
---

# **まとめ**

- VuetifyやNuxt UI以外にもVue3向けのヘッドレスなUIライブラリは存在する
- Reka UIはアクセシビリティと状態管理を担い、Nuxt UIでも利用されている
- 大量データを扱う場合、仮想化でパフォーマンス改善が実現できる(らしい)
