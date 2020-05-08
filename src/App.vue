<template>
    <div id="app" class="app-container">
        <router-view />
    </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class App extends Vue {}
</script>

<style lang="scss">
@import '@/assets/scss/style';
</style>
