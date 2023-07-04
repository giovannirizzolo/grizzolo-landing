// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: [
    '~/assets/css/global.css',
    '~/assets/css/tailwind.custom.css'
  ],
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts',

  ],
  tailwindcss: {
    configPath: '~/tailwind.config.js'
  },
  googleFonts: {
    families: {
      Jost: true
    }
  }
})
