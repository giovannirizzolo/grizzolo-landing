// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'preconnect', href: 'https://open.spotify.com' },
      ]
    }
  },
  experimental: {
    payloadExtraction: false
  },
  css: [
    '~/assets/css/global.css',
    '~/assets/css/tailwind.custom.css'
  ],
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts',
    '@nuxt/image',

  ],
  tailwindcss: {
    configPath: '~/tailwind.config.js'
  },
  googleFonts: {
    families: {
      Jost: true
    },
    display: 'swap',
    preload: true,
    download: true,
  },
  nitro: {
    //altering preset will cause routes prerender break in prod env
    preset: 'vercel-edge',
  },
  runtimeConfig: {
    phoneNumber: process.env.PHONE_NUMBER,
  },
  compatibilityDate: '2026-05-08'
})
