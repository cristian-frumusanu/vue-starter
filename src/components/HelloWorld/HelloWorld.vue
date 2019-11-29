<template>
    <div>
        <h1>Hello World</h1>

        <HelloWorldChild
            subTitle="The new subtitle"
            @onClick="showTheSubtitle"
            />
    </div>
</template>

<script lang="ts" src="./HelloWorld.ts"></script>

<style lang="scss" src="./HelloWorld.scss"></style>
