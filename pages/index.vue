<template >
    <div class="flex flex-col gap-4 items-center max-w-lg mx-auto">
        <img class="w-[140px] h-[140px] object-cover col-start-3 rounded-tl-[50px] rounded-br-[50px]" src="/assets/img/portrait.jpg"  alt="">
        <h4>I'm grizzolo</h4>
        <h6 class="text-center">Frontend web <span class="text-green">developer</span></h6>
        <div class="text-body-2 text-center">Lorem ipsum dolor sit amet consectetur. A orci dis eget nulla vel tellus amet sem viverra. Suscipit eget consectetur ullamcorper lorem ipsum amet nunc orci.</div>
        <button class="bg-secondary py-2 px-5 rounded-[10px] text-primary text-caption">Hire Me</button>
        <button class="py-2 px-5 rounded-[10px] border border-secondary text-secondary text-caption">See my projects</button>
    </div>
</template>
<script setup lang="ts">
definePageMeta({
    layout: "default"
})
</script>