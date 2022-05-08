export default [
	{
		path: '/',
		component: '@/layouts/BaseLayout',
		routes: [
            { path: '/home', component: '@/pages/Home' },
            { path: '/todoList', component: '@/pages/Todo' },
            { path: '/', redirect: '/home' },
        ],
	},
];
