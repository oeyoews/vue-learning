import Home from '~/pages/Home/index.vue';

const routes = [
  // 首页
  {
    path: '/home',
    name: 'home',
    meta: {
      title: '主页',
    },
    component: Home,
  },
  // 搜索
  {
    path: '/about',
    name: 'about',
    // lazy load
    component: () => import('~/pages/Search/index.vue'),
    meta: {
      title: '搜索',
    },
  },
];

export default routes;
