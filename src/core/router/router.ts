import Vue from 'vue';
import Router from 'vue-router';
import { routes } from './routes';

Vue.use(Router);

const router = new Router({
  mode: 'hash',
  // base: process.env.BASE_URL,
  routes
});

router.afterEach(async (to) => {
  document.title = to.meta.title;
});

export default router;
