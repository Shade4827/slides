---
theme: seriph
background: /images/cover.jpg
title: Nuxt + SlidevでスライドをWeb上に公開する
info: このサイトの作成した動機やその際の課題点などをまとめました
date: 2026-03-29
class: text-center
drawings:
  persist: false
transition: slide-left
mdc: true
duration: 35min
routerMode: hash
---

# **Nuxt + SlidevでスライドをWeb上に公開する**

---
transition: slide-left
layout: image-right
image: /images/icon.png
---

# **かげろん** です

- フロントエンド寄りWebエンジニア
- 北海道出身・在住
- カードゲーム、コミュニティ活動
- https://www.shade4827.net

<br>
<br>

### 最近のハイライト
- 妹のWindows10の復旧に失敗
- 64GBのモバイル端末は厳しい

---
transition: slide-left
---

# Slidevでスライドを作っています

## <a href="https://ja.sli.dev/" target="_blank" rel="noopener noreferrer">Slidev</a> とは
<br>

- スライドをmarkdownで書ける
  - AIに作らせても悪い意味でのAIっぽさが低減しやすそう
- Vue.jsで動いている
  - Vueのコンポーネントやロジック部分を利用できる
  - Webで実現できることをスライド上で実現できる

---
transition: slide-left
layout: iframe
url: https://ja.sli.dev/
---

---
transition: slide-left
---

# 作ったスライドをWebに公開したい

- PDFとしてエクスポートし、何らかのサービスにアップロード
  - ❌ Webである良さが失われる
- Webサイトとして公開
  - ❌ Slidev自体は1プロジェクトにつき1スライドの前提なので、複数作るとそれだけサイトを持つような形になる

<br>

<span v-click class="font-bold text-xl underline">▶︎ 複数のスライドを管理したり、一覧を作るにはSlidevを取りまとめる何かが必要</span>
<br>
<span v-click class="font-bold text-2xl text-green-500">→ Nuxtを使おう</span>

---
transition: slide-left
---

# 構成

- GitHub ActionsでSlidevをビルドし、Nuxt側に配置してdeployブランチにcommit
- Nuxtでページを作り、ビルドされたスライドを表示

<br>

<img src="/images/diagram.png">

---
transition: slide-left
---

# 詰まったこと2選
- ルートディレクトリでSlidevをビルドし、Nuxt側に配置までができない
- ブラウザバック・フォワードするとエラーが発生する

---
transition: slide-left
---

# Slidevをビルドし、Nuxt側に配置までができない
- <a href="https://ja.sli.dev/guide/hosting" target="_blank" rel="noopener noreferrer">ビルドについて解説されているドキュメントがある</a>
- rootディレクトリからだとビルド対象の明示が必要
- 出力先もnuxt/public配下にして、Nuxtから読み込めるようにしたい

<br>

<div class="bg-gray-900 text-gray-100 rounded-lg p-4 font-mono text-sm overflow-x-auto">
<pre>
# ディレクトリ構成
root/
├── nuxt/
│   ├── pages/
│   ├── public/
│   │   ├── slides/      # ここに各スライドをビルドして配置したい
│   │   └── slides.json
│   └── nuxt.config.ts
└──slides/
     └── slides/
        ├── slide-a/
        │   └── slides.md
        └── slide-b/
            └── slides.md
</pre>
</div>

---
transition: slide-left
---

# 解決: rootディレクトリからビルド
- 直下以外でのビルドには `@slidev/cli` が必要で、実行にはPlaywrightが必要
- Cloudflare上でブラウザインストールが<span class="line-through">面倒だった</span>難しかったのでGitHub Actions内で実行

<br>

<div class="bg-gray-900 text-gray-100 rounded-lg p-4 font-mono text-sm overflow-x-auto">
<pre>
root/
├── nuxt/
│   ├── pages/
│   ├── public/
│   │   ├── slides/
│   │   └── slides.json
│   └── nuxt.config.ts
├── slides/
│   └── slides/
│       ├── slide-a/
│       │   └── slides.md
│       └── slide-b/
│           └── slides.md
├── scripts/
│   └── build-slides.mjs  # ビルドスクリプトを作成
└── package.json          # @slidev/cli, playwright-chromium を追加
</pre>
</div>

---
transition: slide-left
---

# ブラウザバック・フォワードするとエラーが発生する
- public配下に置いたHTMLは `/index.html` の形式でアクセス可能
- そのままアクセスしても表示できるので、iframeを使うことで個別のページの中にも表示可能
- Nuxtのページとして `/slide-view/[slideId]/` を用意し、この中で表示
- 表示させることはできたが、ブラウザバック・フォワードすると表示できなくなる

---
transition: slide-left
---

# 問題点: SlidevのrouterModeが history になっていた
- Slidevでは<a href="https://router.vuejs.org/" target="_blank" rel="noopener noreferrer">vue-router</a>を使用して、スライド各ページをルーティングしている
- historyだと通常のWebページのようにURLが設定され、ページ遷移時にサーバーにリクエスト
  - しかし、実際にはリクエスト先のページが存在していない
  - SPAなのにMPAとして扱ってしまい、エラーが発生
- hashにするとURLが `/index.html/#/1` のようになり、`#` 以降はリクエストに含まれない
  - ページをめくるごとのリクエストがなくなるので、エラーが発生しなくなった
  - SEO的には良くないらしい

<br>

<div class="bg-gray-900 text-gray-100 rounded-lg p-4 font-mono text-sm overflow-x-auto">
<pre>
# 1ページ目のfront matterにrouterModeを設定
routerMode: hash
</pre>
</div>

---
transition: slide-left
---

# なんやかんやあったが公開できた
- とりあえずスライドを公開できる状態にはなった
- 今後の展望
  - そういえば一覧ページに戻るボタンついていない
  - せっかくなのでコンポーネント作ってスライド内に機能つけたい
    - タイマー
    - Vue Fes Japan 2025でDaniel Roeがやっていた絵文字送るやつやってみたい
  - Vite+への移行
