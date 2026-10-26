import{L as e,T as t,X as n,_ as r,_t as i,g as a,ht as o}from"./modules/shiki-BdeKa7dA.js";import{et as s,tt as c}from"./index-ACRczx3v.js";import{t as l}from"./slidev/default-C4aMjVVi.js";var u={__name:`slides.md__slidev_8`,setup(u){let{$slidev:d,$nav:f,$clicksContext:p,$clicks:m,$page:h,$renderContext:g,$frontmatter:_}=c();return p.setup(),(c,u)=>(e(),r(l,i(t(o(s)(o(_),7))),{default:n(()=>[...u[0]||=[a(`h1`,null,`Slidevをビルドし、Nuxt側に配置までができない`,-1),a(`ul`,null,[a(`li`,null,[a(`a`,{href:`https://ja.sli.dev/guide/hosting`,target:`_blank`,rel:`noopener noreferrer`},`ビルドについて解説されているドキュメントがある`)]),a(`li`,null,`rootディレクトリからだとビルド対象の明示が必要`),a(`li`,null,`出力先もnuxt/public配下にして、Nuxtから読み込めるようにしたい`)],-1),a(`br`,null,null,-1),a(`div`,{class:`bg-gray-900 text-gray-100 rounded-lg p-4 font-mono text-sm overflow-x-auto`},[a(`pre`,null,`# ディレクトリ構成
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