<template>
    <div>
        <h2>{{ subTitle }}</h2>
        <b-button @click="handleClick">Alert with subtitle</b-button><br/>
        <b-button class="mt-3" @click="useEventBus">Alert in App with 2s delay</b-button>
    </div>
</template>

<script lang="ts" src="./HelloWorldChild.ts"></script>

<style lang="scss" src="./HelloWorldChild.scss"></style>
