import Vue from 'vue';
import Vuex from 'vuex';
import * as Action from './types/action-types';
import AuthenticationAPI from '../api/api-authentication';
import { ILoginModel } from '../models/login';

interface AppState {
  isLoading: boolean;
}

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isLoading: false,
  },

  mutations: {
    [Action.API_REQUEST](state: AppState) {
      state.isLoading = true;
    },

    [Action.API_SUCCESS](state: AppState) {
      state.isLoading = false;
    },

    [Action.API_FAIL](state: AppState, error = 'Generic APP error') {
      state.isLoading = false;
      alert(error);
    },
  },

  actions: {
    [Action.LOGIN]({ commit }, loginData: ILoginModel) {
      return new Promise((resolve, reject) => {
        commit(Action.API_REQUEST);

        AuthenticationAPI.authenticate(loginData)
          .then(() => {
            commit(Action.API_SUCCESS);
            resolve();
          })
          .catch(error => {
            commit(Action.API_FAIL, error);
            reject(error);
          });
      });
    },
  },

  getters: {},
});
