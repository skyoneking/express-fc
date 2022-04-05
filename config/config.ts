import { defineConfig } from 'umi';

import routes from './routes';

export default defineConfig({
	nodeModulesTransform: {
		type: 'none',
	},
	routes,
	fastRefresh: {},
    mfsu: {},
    title: false,
    proxy: {
        '/api': 'http://localhost:9001'
    }
});
