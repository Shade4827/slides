---
theme: seriph
background: https://cover.sli.dev
title: Nuxt + SlidevでスライドをWeb上に公開する
info: このサイトを作成における課題点などをまとめました
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

- Webエンジニア
  - フロントエンド寄り
  - Nuxt, Ruby on Rails
- 北海道出身・在住
- カードゲーム、コミュニティ活動
- https://www.shade4827.net

---
transition: slide-left
---

# Slidevでスライドを作っています

## <a href="https://ja.sli.dev/">Slidev</a> とは
<br>

- スライドをmarkdownで書ける
  - AIに作らせても悪い意味でのAIっぽさが低減できる
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

## どういう方法があるか

<br>

- PDFとしてエクスポートし、何らかのサービスにアップロード
  - ❌ Webである良さが失われる
- Webサイトとして公開
  - ❌ Slidev自体は1プロジェクトにつき1スライドの前提なので、複数作るとそれだけサイトを持つような形になる

<br>

複数のスライドを管理したり、一覧を作るにはSlidevを取りまとめる何かが必要

---
transition: slide-left
---

# 構成

- Nuxtを使用してWebアプリを作成
- Cloudflare Pages上にデプロイ

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
- rootディレクトリからだとビルド対象の明示が必要
- 出力先もnuxt/public配下にして、Nuxtから読み込めるようにしたい
- <a href="https://ja.sli.dev/guide/hosting" target="_blank" rel="noreffer noopener">ビルドについて解説</a>されているが、うまくビルドできなかった

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
- `pnpm slidev build ${dir}/slides.md --base /slides/${dir}/ --out root/nuxt/public/slides/${dir}`

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
└── package.json
</pre>
</div>

---
transition: slide-left
---

# ブラウザバック・フォワードするとエラーが発生する
- public配下に置いたHTMLは `/index.html` の形式でアクセス可能
- そのままアクセスしても表示できるので、iframeを使うことで個別のページの中にも表示可能
- `/slide-view/[slideId]/` 内で表示
- 普通に表示させることはできたが、ブラウザバック・フォワードすると表示できなくなる

---
transition: slide-left
---

# 問題点: SlidevのrouterModeが history になっていた
- Slidevではvue-routerを使用して、スライド各ページをルーティングしている
- historyだと通常のWebページのようにURLが設定され、ページ遷移時にサーバーにリクエスト
  - しかし、実際にはリクエスト先のページが存在していない
  - SPAなのにMPAとして扱ってしまい、エラーが発生
- hashにするとURLが `/index.html/#/1` のようになり、`#` 以降はリクエストに含まれない
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
