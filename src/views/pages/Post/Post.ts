import { Vue, Component } from 'vue-property-decorator';

@Component
export default class HomePage extends Vue {
  get postId() {
    return this.$route.params.postId;
  }

  updated() {
    debugger;
  }
}
