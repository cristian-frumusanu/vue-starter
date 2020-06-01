import { RouteConfig } from 'vue-router';
import MainWrapper from '@/views/containers/MainWrapper.vue';
import { APP_TITLE } from '../utilities/appconsts';

const HomePage = () =>
  import(
    /* webpackChunkName: "page-homepage" */ '@/views/pages/Home/HomePage.vue'
  );

const routes: Array<RouteConfig> = [
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
          title: `${APP_TITLE} - Home`,
        },
      },
    ],
  },
];

export default routes;
