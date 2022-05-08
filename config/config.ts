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
            target: 'http://fc.yojcl.top',
            changeOrigin: true,
        }
    },
    publicPath: process.env.NODE_ENV === 'production' ? 'http://oss.yojcl.top/' : '/'
});
