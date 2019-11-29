import { Vue, Component } from 'vue-property-decorator';
import HelloWorldChild from '../HelloWorldChild/HelloWorldChild.vue';

@Component({
  components: {
    HelloWorldChild
  }
})
export default class HelloWorld extends Vue {
  showTheSubtitle(subtitle) {
    alert(subtitle);
  }
}
