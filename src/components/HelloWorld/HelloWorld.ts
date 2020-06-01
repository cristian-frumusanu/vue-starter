import { Component, Prop, Vue } from 'vue-property-decorator';
import SVGVuejs from '@/assets/img/vuejs.svg';
import SVGTS from '@/assets/img/ts.svg';

@Component({
  components: {
    SVGVuejs,
    SVGTS,
  },
})
export default class HelloWorld extends Vue {
  @Prop() private msg!: string;
}
