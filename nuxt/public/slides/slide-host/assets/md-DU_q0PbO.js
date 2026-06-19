import{o as r,b as a,w as i,g as s,ad as e,v as d,x as u,T as t}from"./modules/vue-C18czJCA.js";import{I as c}from"./slidev/default-18BzQ7BD.js";import{u as p,f as m}from"./slidev/context-Dg6gd6cl.js";import"./index-DJxaY8yt.js";import"./modules/shiki-wa0U-joS.js";const w={__name:"slides.md__slidev_9",setup(f){const{$clicksContext:n,$frontmatter:o}=p();return n.setup(),(g,l)=>(r(),a(c,d(u(t(m)(t(o),8))),{default:i(()=>[...l[0]||(l[0]=[s("h1",null,"解決: rootディレクトリからビルド",-1),s("ul",null,[s("li",null,[e("直下以外でのビルドには "),s("code",null,"@slidev/cli"),e(" が必要で、実行にはPlaywrightが必要")]),s("li",null,[e("Cloudflare上でブラウザインストールが"),s("span",{class:"line-through"},"面倒だった"),e("難しかったのでGitHub Actions内で実行")])],-1),s("br",null,null,-1),s("div",{class:"bg-gray-900 text-gray-100 rounded-lg p-4 font-mono text-sm overflow-x-auto"},[s("pre",null,`root/
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
`)],-1)])]),_:1},16))}};export{w as default};
