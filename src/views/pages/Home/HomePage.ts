import { Vue, Component } from 'vue-property-decorator';

import HelloWorld from '@/components/HelloWorld/HelloWorld.vue';

@Component({
  components: { HelloWorld },
})
export default class HomePage extends Vue {
}
