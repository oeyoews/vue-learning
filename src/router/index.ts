import { createRouter, createWebHashHistory } from 'vue-router';
import routes from './routes';

// 基础配置
const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
