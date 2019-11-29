<template>
    <div class="wrapper  wrapper--main">
        <div class="d-flex  justify-content-center  my-3">
            <router-link to="/homepage" class="mx-3">Homepage</router-link>
            <router-link to="/hooks" class="mx-3">Hooks</router-link>
            <router-link to="/lists" class="mx-3">Lists</router-link>
            <router-link to="/post/13" class="mx-3">Post</router-link>
        </div>
        <router-view />
    </div><!-- .wrapper -->
</template>

<script lang="ts" src="./MainWrapper.ts"></script>

<style lang="scss" src="./MainWrapper.scss"></style>
