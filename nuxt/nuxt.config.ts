// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from '@tailwindcss/vite'

const siteUrl = process.env.NUXT_PUBLIC_SITE_URL || 'https://slides.shade4827.net'

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ['@/assets/css/main.css'],

  vite: {
    plugins: [tailwindcss()],
  },

  modules: [
    '@nuxt/eslint',
    '@nuxt/icon',
  ],

  runtimeConfig: {
    public: {
      siteUrl: siteUrl,
    }
  },

  app: {
    head: {
      title: 'slides.shade4827.net',
      htmlAttrs: {
        lang: 'ja', prefix: 'og: https://ogp.me/ns#'
      },
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      ],
      meta: [
        { property: 'og:type', content: 'website' },
        { property: 'og:site_name', content: 'slides.shade4827.net' },
        { property: 'og:image', content: `${siteUrl}/og-image.png`, },
        { property: 'og:locale', content: 'ja_JP' },
        { property: 'og:title', content: 'slides.shade4827.net' },
        { property: 'og:description', content: 'かげろんのスライド一覧です' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:site', content: '@shade4827' },
        { name: 'twitter:title', content: 'slides.shade4827.net' },
      ]
    }
  }
})
