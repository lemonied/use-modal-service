import { defineConfig } from 'dumi';

const BASE_PATH = '/use-modal-service/';

export default defineConfig({
  outputPath: 'docs-dist',
  base: BASE_PATH,
  publicPath: BASE_PATH,
  mfsu: false,
  title: 'useModalService',
  themeConfig: {
    logo: false,
    editLink: false,
    footer: false,
    name: 'useModalService',
    nav: [],
    socialLinks: {
      github: 'https://github.com/lemonied/use-modal-service',
    },
  },
});
