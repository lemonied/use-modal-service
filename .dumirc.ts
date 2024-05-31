import { defineConfig } from 'dumi';

const BASE_PATH = '/use-modal-service/';

export default defineConfig({
  outputPath: 'docs-dist',
  base: BASE_PATH,
  publicPath: BASE_PATH,
  mfsu: false,
  themeConfig: {
    name: 'use-modal',
    editLink: false,
    footer: false,
    nav: [
      {
        title: 'API',
        link: '/components/modal-service',
      },
    ],
    socialLinks: {
      github: 'https://github.com/lemonied/use-modal-service',
    },
  },
});
