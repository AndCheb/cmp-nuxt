import { resolve } from 'path';

export default defineNuxtConfig({
  devtools: { enabled: true },
  alias: {
    '@': resolve(__dirname, '/'),
  },
  css: ['~/scss/main.scss'],
  target: 'static',
  router: {
    base: '/compas-app/',
  },
});
