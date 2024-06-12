import { resolve } from 'path';

export default defineNuxtConfig({
  devtools: { enabled: true },
  alias: {
    '@': resolve(__dirname, '/'),
  },
  css: ['~/scss/main.scss'],
  router: {
    base: '/https://github.com/AndCheb/cmp-nuxt/'
  },
});
