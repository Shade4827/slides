import{L as e,T as t,X as n,_ as r,_t as i,g as a,ht as o}from"./modules/shiki-Bc7tiFDi.js";import{t as s}from"./slidev/default-C77qdZt_.js";import{et as c,tt as l}from"./index-BMgCw0Li.js";var u={__name:`slides.md__slidev_8`,setup(u){let{$slidev:d,$nav:f,$clicksContext:p,$clicks:m,$page:h,$renderContext:g,$frontmatter:_}=l();return p.setup(),(l,u)=>(e(),r(s,i(t(o(c)(o(_),7))),{default:n(()=>[...u[0]||=[a(`h1`,null,`Slidevをビルドし、Nuxt側に配置までができない`,-1),a(`ul`,null,[a(`li`,null,[a(`a`,{href:`https://ja.sli.dev/guide/hosting`,target:`_blank`,rel:`noopener noreferrer`},`ビルドについて解説されているドキュメントがある`)]),a(`li`,null,`rootディレクトリからだとビルド対象の明示が必要`),a(`li`,null,`出力先もnuxt/public配下にして、Nuxtから読み込めるようにしたい`)],-1),a(`br`,null,null,-1),a(`div`,{class:`bg-gray-900 text-gray-100 rounded-lg p-4 font-mono text-sm overflow-x-auto`},[a(`pre`,null,`# ディレクトリ構成
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
`)],-1)]]),_:1},16))}};export{u as default};