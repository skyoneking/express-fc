export default [
  { path: '/login', component: '@/pages/Login' },
  {
    path: '/',
    component: '@/layouts/BaseLayout',
    routes: [
      { path: '/todo', component: '@/pages/Todo' },
      { path: '/user', component: '@/pages/User' },
      { path: '/strategy', component: '@/pages/Strategy' },
      { redirect: '/todo' },
    ],
  },
];
