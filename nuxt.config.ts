import { resolve } from 'path';

export default defineNuxtConfig({
  ssr: true,
  devtools: { enabled: true },
  alias: {
    '@': resolve(__dirname, '/'),
  },
  css: ['~/scss/main.scss'],
  router: {
    base: '/cmp-nuxt/'
  },
  static: {
    prefix: false
  },
});
