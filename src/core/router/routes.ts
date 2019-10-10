import MainWrapper from '@/views/containers/MainWrapper.vue';
import { APP_TITLE } from '../utilities/appconsts';

const HomePage =
  () => import( /* webpackChunkName: "page-homepage" */ '@/views/pages/Home/HomePage.vue');

export const routes = [
  {
    path: '/',
    redirect: '/homepage',
    component: MainWrapper,
    children: [
      {
        path: '/homepage',
        name: 'homepage',
        component: HomePage,
        meta: {
          title: `${APP_TITLE} - Home`
        }
      }
    ]
  },

];
