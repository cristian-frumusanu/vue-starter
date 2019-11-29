<template>
    <div class="container  container--main  text-center">
        <h1>Shopping list</h1>
        <ul v-if="shoppingList.length > 0">
            <li
                v-for="(item, index) in shoppingList"
                :key="`shopping-list-item-${index}`">{{ item }}</li>
        </ul>
    </div>
</template>

<script lang="ts" src="./Lists.ts"></script>
