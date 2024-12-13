// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    pageTransition: {
      name: 'page',
      mode: 'out-in',
    }
  },
  compatibilityDate: '2024-11-01',
  typescript: {typeCheck: true},
  devtools: { enabled: true },
  plugins: [],
  modules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/tailwindcss',
    '@nuxt/eslint',
    'nuxt-i18n-micro',
    '@nuxt/fonts',
    'nuxt-icons',
    '@pinia/nuxt',
    '@nuxtjs/device'
  ],
  pinia: {
    storesDirs: ['./stores/**']
  },
  fonts: {
    families: [
      {name: 'Inter', provider: 'google', weights: [400, 600, 700], styles: ['normal']}
    ],
  },
  i18n: {
    locales: [
      { code: 'pl', iso: 'pl-PL' },
      { code: 'en', iso: 'en-GB' },
    ],
    defaultLocale: 'en',
    translationDir: 'locales',
    meta: true,
  }
})