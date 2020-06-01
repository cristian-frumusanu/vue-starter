import axios from 'axios';

const TranslationsAPI = {
  loadTranslations(language: string) {
    // @todo modify this mock API endpoint
    return axios.get(
      `https://react-my-burger-2a65c.firebaseio.com/${language}.json`
    );
  },
};

const MockAPI = {
  mockAPI() {
    return null;
  },
};

export { TranslationsAPI, MockAPI };
