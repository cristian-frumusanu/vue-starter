import { Vue, Component, Prop } from 'vue-property-decorator';
import { EventBus } from '@/core/utilities/EventBus';

@Component
export default class HelloWorldChild extends Vue {
  @Prop({ default: 'Yo yo yooo' }) subTitle: string;

  handleClick() {
    this.$emit('onClick', this.subTitle);
  }

  useEventBus() {
    EventBus.$emit('showAlert', 'Yes, please do show alert');
  }
}
