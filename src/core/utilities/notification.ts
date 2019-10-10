import _Vue from 'vue';
import { vm } from '@/main';
import { isFunction } from 'lodash';

export type PluginFunction<T> = (Vue: typeof _Vue, options?: T) => void;

export function NotificationPlugin(Vue: typeof _Vue): void {
  const vue = new Vue();

  Vue.prototype.$showAlert = (message: string, alertCallback?: any, title?: string, buttonName?: string) => {
    const messageBoxParams: any = {
      size: 'sm',
      buttonSize: 'sm',
      centered: true,
      footerClass: 'p-2'
    };

    if (title) {
      messageBoxParams.title = title;
    }

    if (buttonName) {
      messageBoxParams.okTitle = buttonName;
    }

    vue.$bvModal.msgBoxOk(message, messageBoxParams).then(() => {
      if (isFunction(alertCallback)) {
        alertCallback();
      }
    });
  };

  Vue.prototype.$showConfirm =
    async (
      message: string,
      confirmCallback?: any,
      title?: string,
      buttonLabels: [string, string] = [vm.$i18n.t('general.ok').toString(), vm.$i18n.t('general.cancel').toString()]
    ) => {
      const messageBoxParams: any = {
        size: 'sm',
        buttonSize: 'sm',
        centered: true,
        footerClass: 'p-2',
        cancelVariant: 'primary'
      };

      if (title) {
        messageBoxParams.title = title;
      }

      if (buttonLabels) {
        if (buttonLabels[0]) {
          messageBoxParams.okTitle = buttonLabels[0];
        }

        if (buttonLabels[1]) {
          messageBoxParams.cancelTitle = buttonLabels[1];
        }
      }

      const confirmed = await vue.$bvModal.msgBoxConfirm(message, messageBoxParams);

      if (confirmed && isFunction(confirmCallback)) {
        confirmCallback();
      }
    };
}

declare module 'vue/types/vue' {
  interface Vue {
    $showAlert: (message: string, alertCallback?: any, title?: string, buttonName?: string) => void;
    $showConfirm: (message: string, confirmCallback?: any, title?: string, buttonLabels?: [string, string]) => void;
  }
}
