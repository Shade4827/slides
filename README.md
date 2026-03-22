# slides

Slidevで作成したスライドをNuxtアプリ上で公開するサイトです

- Slidevでスライド作成
- CIで静的アセット生成（HTML / PNG / JSON）
- Nuxtで一覧・詳細ページを提供
- Cloudflare Pagesでホスティング

## ディレクトリ構成

```
nuxt/                   # フロントエンドアプリケーション
slides/                 # Slidevプロジェクト群
scripts/                # ビルドスクリプト
nuxt/public/slides      # ビルドされたスライド(CI生成)
nuxt/public/slides.json # ビルドされたスライドの一覧
```

## 環境構築

```bash
pnpm install
```

## local

```bash
pnpm --filter nuxt dev
```

## スライド生成

```bash
pnpm build:slides
```

## 本番ビルド

```bash
pnpm build
```

## スライド追加方法

1. slides/slides/ にディレクトリを作成し、slides.md を作成。もしくはtemplateディレクトリをコピー

```
slides/slides/my-slide/
  └── slides.md
```

2. CIが自動で以下を生成
    - HTML
    - サムネイル画像
    - slides.json
3. /slide-view/my-slide/ で公開される

### localでのスライド確認方法

```
pnpm dev slides/[directory]/slides.md
```

## デプロイフロー

1. mainブランチにpush
2. GitHub ActionsでSlidevをビルド
3. 生成物をdeployブランチにpush
4. Cloudflare Pagesがdeployブランチをデプロイ
