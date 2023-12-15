import { createRouter, createWebHistory } from 'vue-router/auto';
import { setupLayouts } from 'virtual:generated-layouts';
import NProgress from 'nprogress';
import '../../node_modules/nprogress/nprogress.css';

import { routes } from 'vue-router/auto/routes';

NProgress.configure({
  showSpinner: false,
});
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  extendRoutes: () => setupLayouts(routes),
});

router.beforeResolve((to, _, next) => {
  // If this isn't an initial page load.
  if (to.name) {
    // Start the route progress bar.
    NProgress.start();
  }
  next();
});

router.afterEach(() => {
  // Complete the animation of the route progress bar.
  NProgress.done();
});

export default router;
