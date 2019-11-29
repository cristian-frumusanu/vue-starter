import { Vue, Component } from 'vue-property-decorator';

@Component
export default class Hooks extends Vue {
  get param() {
    return this.$route.params.param;
  }

  beforeCreate() {
    console.log('Hook: beforeCreate');
  }

  created() {
    console.log('Hook: created');
  }

  beforeMount() {
    console.log('Hook: beforeMount');
  }

  mounted() {
    console.log('Hook: mounted');
  }

  beforeUpdate() {
    console.log('Hook: beforeUpdate');
  }

  updated() {
    console.log('Hook: updated');
  }

  beforeDestroy() {
    console.log('Hook: beforeDestroy');
    debugger;
  }

  destroyed() {
    console.log('Hook: destroyed');
    debugger;
  }
}
