<template>
  <div id="app" class="app-container">
    <router-view />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { EventBus } from '@/core/utilities/EventBus';

@Component
export default class App extends Vue {
  mounted() {
    EventBus.$on('showAlert', (message) => this.handleShowAlert(message));
  }

  handleShowAlert(message) {
    setTimeout(() => {
      alert(message);
    }, 2000);
  }
}
</script>

<style lang="scss">
@import "@/assets/scss/style";
</style>
