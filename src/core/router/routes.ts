import MainWrapper from '@/views/containers/MainWrapper.vue';
import { APP_TITLE } from '../utilities/appconsts';
import { RouteConfig } from 'vue-router';

const HomePage =
  () => import( /* webpackChunkName: "page-homepage" */ '@/views/pages/Home/HomePage.vue');

export const routes: Array<RouteConfig> = [
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
  }
];
