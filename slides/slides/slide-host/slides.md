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

# 詰まったこと3選
- ルートディレクトリでSlidevをビルドし、Nuxt側に配置までができない
- スライド一覧を取得するJSONを読み込めない
- ブラウザバック・フォワードするとエラーが発生する

---
transition: slide-left
---

# ルートディレクトリでSlidevをビルドし、Nuxt側に配置までができない
- ディレクトリ構成的に、ビルド対象の明示が必要
- 出力先もnuxt/public配下にして、Nuxtから読み込めるようにしたい
