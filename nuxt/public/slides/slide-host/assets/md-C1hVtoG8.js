import{o,b as r,w as a,g as e,v as i,x as u,T as n}from"./modules/vue-C18czJCA.js";import{I as d}from"./slidev/default-18BzQ7BD.js";import{u as p,f as m}from"./slidev/context-Dg6gd6cl.js";import"./index-DJxaY8yt.js";import"./modules/shiki-wa0U-joS.js";const h={__name:"slides.md__slidev_8",setup(f){const{$clicksContext:s,$frontmatter:l}=p();return s.setup(),(c,t)=>(o(),r(d,i(u(n(m)(n(l),7))),{default:a(()=>[...t[0]||(t[0]=[e("h1",null,"Slidevをビルドし、Nuxt側に配置までができない",-1),e("ul",null,[e("li",null,[e("a",{href:"https://ja.sli.dev/guide/hosting",target:"_blank",rel:"noopener noreferrer"},"ビルドについて解説されているドキュメントがある")]),e("li",null,"rootディレクトリからだとビルド対象の明示が必要"),e("li",null,"出力先もnuxt/public配下にして、Nuxtから読み込めるようにしたい")],-1),e("br",null,null,-1),e("div",{class:"bg-gray-900 text-gray-100 rounded-lg p-4 font-mono text-sm overflow-x-auto"},[e("pre",null,`# ディレクトリ構成
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
`)],-1)])]),_:1},16))}};export{h as default};
