<template>
    
    <div class="flex flex-col items-center gap-8 py-10">
    <h3 class="text-center" v-if="error.statusCode === 404">Page not found</h3>
    <h1 v-else>An error occurred</h1>
    <div class="flex justify-center mx-auto">
      <video autoplay loop playsinline class="rounded-xl xl:w-[50%]">
        <source src="/assets/video/parkour.mp4" type="video/mp4">
        <source src="/assets/video/parkour.webm" type="video/webm">
        <div class="text-caption">Your browser does not support the video tag.</div>
      </video>
    </div>
    <NuxtLink to="/" class="bg-secondary py-2 px-5 rounded-[10px] text-primary text-caption max-w-xs text-caption xl:text-button">Go Home, you're drunk</NuxtLink>
    </div>
  </template>
  
<script setup>
    defineProps({
      error: Object
    })
</script>