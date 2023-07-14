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
    preset: 'vercel',
    future: {
      nativeSWR: true
    }
  },
})
