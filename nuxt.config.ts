import { resolve } from 'path';

export default defineNuxtConfig({
  ssr: true,
  devtools: { enabled: true },
  alias: {
    '@': resolve(__dirname, '/'),
  },
  css: ['~/scss/main.scss'],
  static: {
    prefix: false
  },
});
