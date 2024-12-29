// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    pageTransition: {
      name: 'page',
      mode: 'out-in',
    }
  },
  imports: {
    dirs: [
        'composables',
    ]
  },
  compatibilityDate: '2024-11-01',
  typescript: {typeCheck: false},
  devtools: { enabled: true },
  plugins: [],
  modules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/tailwindcss',
    '@nuxt/eslint',
    'nuxt-i18n-micro',
    '@nuxt/fonts',
    'nuxt-icons',
    ['nuxt-mail', {
      message: {
        to: 'dawidkwasowski@gmail.com',
      },
      smtp: {
        host: process.env.NUXT_SMTP_HOST,
        port: process.env.NUXT_SMTP_PORT,
        auth: {
          user: process.env.NUXT_SMTP_USER,
          pass: process.env.NUXT_SMTP_PASS,
        }
      },
    }]
  ],
  runtimeConfig: {
    public: {
      accessToken: process.env.NUXT_ACCESS_TOKEN
    }
  },
  fonts: {
    families: [
      {name: 'Inter', provider: 'google', weights: [400, 600, 700], styles: ['normal']}
    ],
  },
  i18n: {
    locales: [
      { code: 'en', iso: 'en-GB' },
    ],
    defaultLocale: 'en',
    translationDir: 'locales',
    meta: true,
  }
})
