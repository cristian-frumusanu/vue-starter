import {
  NavbarPlugin,
  CardPlugin,
  LayoutPlugin,
  FormPlugin,
  InputGroupPlugin,
  FormInputPlugin,
  ButtonPlugin,
  ModalPlugin,
  VBModal,
  SpinnerPlugin,
  ProgressPlugin
} from 'bootstrap-vue';

const initBootstrap = (vue) => {
  vue.use(NavbarPlugin);
  vue.use(LayoutPlugin);
  vue.use(CardPlugin);
  vue.use(FormPlugin);
  vue.use(InputGroupPlugin);
  vue.use(FormInputPlugin);
  vue.use(ButtonPlugin);
  vue.use(ModalPlugin);
  vue.use(SpinnerPlugin);
  vue.use(ProgressPlugin);
  vue.directive(VBModal);
};

export { initBootstrap };
