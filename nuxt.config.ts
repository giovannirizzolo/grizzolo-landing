// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
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
    }
  },
  nitro: {
    //altering preset will cause routes prerender break in prod env
    preset: 'vercel-edge',
    prerender: {
      crawlLinks: true
    },
    // future: {
    //   nativeSWR: true
    // }
  },
})
