import Vue from 'vue';

import router from './core/router/router';
import store from './core/store/store';
import i18n from './core/translations/i18n';
import App from './core/App.vue';

import { initBootstrap } from './core/config/config-bootstrap';
import { initFonts } from './core/config/config-fonts';
import { NotificationPlugin } from './core/utilities/notification';

initBootstrap(Vue);
initFonts(Vue);

Vue.config.productionTip = false;
Vue.use( NotificationPlugin );

export const vm = new Vue({
  router,
  store,
  i18n,
  render: (h) => h(App)
}).$mount('#app');

declare global {
  interface Window {
    cordova: any;
    device: any;
  }
  interface Navigator { notification: any; }
}
