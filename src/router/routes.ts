import Home from '~/pages/Home/index.vue';

const routes = [
  // 首页
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  // 搜索
  {
    path: '/search',
    name: 'search',
    // lazy load
    component: () => import('~/pages/Search/index.vue'),
    meta: {
      title: '搜索',
    },
  },
];

export default routes;
