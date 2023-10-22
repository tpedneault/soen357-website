<template>
    <div class="flex flex-col w-full">
        <div class="font-bold text-lg my-1.5 text-indigo-500">{{ info.Title }}</div>
        <div>{{ info.Description }}</div>
        <img class="border border-2 border-black mx-auto mb-3 mt-6" :src="imageUrl" v-bind:alt="pic">
</div>
</template>

<script setup>
const { info } = defineProps(['info']);
console.log(info);

const imageUrl = new URL(`../assets/${info.Image}`, import.meta.url).href
</script>
