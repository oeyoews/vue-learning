import { createRouter, createWebHistory } from 'vue-router/auto';

// 基础配置
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
});

export default router;
