import{L as e,T as t,X as n,_ as r,_t as i,b as a,g as o,ht as s}from"./modules/shiki-Bc7tiFDi.js";import{t as c}from"./slidev/default-C77qdZt_.js";import{et as l,tt as u}from"./index-BMgCw0Li.js";var d={__name:`slides.md__slidev_9`,setup(d){let{$slidev:f,$nav:p,$clicksContext:m,$clicks:h,$page:g,$renderContext:_,$frontmatter:v}=u();return m.setup(),(u,d)=>(e(),r(c,i(t(s(l)(s(v),8))),{default:n(()=>[...d[0]||=[o(`h1`,null,`解決: rootディレクトリからビルド`,-1),o(`ul`,null,[o(`li`,null,[a(`直下以外でのビルドには `),o(`code`,null,`@slidev/cli`),a(` が必要で、実行にはPlaywrightが必要`)]),o(`li`,null,[a(`Cloudflare上でブラウザインストールが`),o(`span`,{class:`line-through`},`面倒だった`),a(`難しかったのでGitHub Actions内で実行`)])],-1),o(`br`,null,null,-1),o(`div`,{class:`bg-gray-900 text-gray-100 rounded-lg p-4 font-mono text-sm overflow-x-auto`},[o(`pre`,null,`root/
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
`)],-1)]]),_:1},16))}};export{d as default};