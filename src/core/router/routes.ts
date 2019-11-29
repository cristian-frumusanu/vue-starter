import MainWrapper from '@/views/containers/MainWrapper.vue';
import { APP_TITLE } from '../utilities/appconsts';

const HomePage =
  () => import( /* webpackChunkName: "page-homepage" */ '@/views/pages/Home/HomePage.vue');

const Hooks =
  () => import( /* webpackChunkName: "page-homepage" */ '@/views/pages/Hooks/Hooks.vue');

const Lists =
  () => import( /* webpackChunkName: "page-homepage" */ '@/views/pages/Lists/Lists.vue');

const Post =
  () => import( /* webpackChunkName: "page-homepage" */ '@/views/pages/Post/Post.vue');

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
      },
      {
        path: '/hooks/:param?',
        name: 'hooks',
        component: Hooks,
        meta: {
          title: `${APP_TITLE} - Hooks`
        }
      },
      {
        path: '/lists',
        name: 'lists',
        component: Lists,
        meta: {
          title: `${APP_TITLE} - Lists`
        }
      },

      {
        path: '/post/:postId',
        name: 'post',
        component: Post,
        meta: {
          title: `${APP_TITLE} - Post`
        }
      }
    ]
  },

];
