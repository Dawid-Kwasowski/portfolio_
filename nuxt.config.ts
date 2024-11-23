// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/tailwindcss',
    '@nuxt/eslint',
      'nuxt-i18n-micro'
  ],
  i18n: {
    locales: [
      { code: 'pl', iso: 'pl-PL' },
      { code: 'en', iso: 'en-GB' },
    ],
    defaultLocale: 'pl',
    translationDir: 'locales',
    meta: true,
  }
})