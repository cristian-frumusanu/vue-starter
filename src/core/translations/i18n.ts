import Vue from 'vue';
import VueI18n from 'vue-i18n';
import axios from 'axios';

import { TranslationsAPI } from '@/core/api/api-translations';
import messages from './strings/index';

// Internationalization
Vue.use(VueI18n);

const i18n = new VueI18n({
  locale: 'it', // set locale
  fallbackLocale: 'it',
  messages, // set locale messages
});

export default i18n;

const loadedLanguages = ['it']; // our default language that is preloaded

const setI18nLanguage = (lang: string) => {
  i18n.locale = lang;
  axios.defaults.headers.common['Accept-Language'] = lang;

  // @ts-ignore
  document.querySelector('html').setAttribute('lang', lang);

  return lang;
};

export const loadLanguageAsync = (language: string) => {
  // If the same language
  if (i18n.locale === language) {
    return Promise.resolve(setI18nLanguage(language));
  }

  // If the language was already loaded
  if (loadedLanguages.includes(language)) {
    return Promise.resolve(setI18nLanguage(language));
  }

  // If the language hasn't been loaded yet
  return TranslationsAPI.loadTranslations(language)
    .then(response => {
      i18n.setLocaleMessage(language, response.data);
      loadedLanguages.push(language);
      return setI18nLanguage(language);
    })
    .catch(error => {
      alert(`Loading language ${language} failed`);
      console.log(error);
    });
};
