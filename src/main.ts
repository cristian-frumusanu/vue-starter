import Vue from 'vue';

import router from './core/router/router';
import store from './core/store/store';

import VueI18n from 'vue-i18n';
import i18n from './core/translations/i18n';

import { initBootstrap } from './core/config/config-bootstrap';
import { initFonts } from './core/config/config-fonts';

import App from './App.vue';

Vue.config.productionTip = false;

initBootstrap(Vue);
initFonts(Vue);

Vue.use(VueI18n);

Vue.config.productionTip = false;

export const vm = new Vue({
  router,
  store,
  i18n,
  render: (h) => h(App),
}).$mount('#app');
