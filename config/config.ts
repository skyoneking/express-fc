import { defineConfig } from 'umi';

import routes from './routes';

export default defineConfig({
  title: 'jcl',
  nodeModulesTransform: {
    type: 'none',
  },
  routes,
  fastRefresh: {},
  mfsu: {},
  proxy: {
    '/api': {
      target: 'http://localhost:9000',
      changeOrigin: true,
    },
  },
  publicPath: process.env.NODE_ENV === 'production' ? 'http://oss.yojcl.top/' : '/',

  openAPI: {
    requestLibPath: "import { request } from 'umi'",
    schemaPath: 'http://localhost:9000/api-json',
    mock: false,
    projectName: 'todo'
  },

  extraPostCSSPlugins: [require('tailwindcss')],
});
