<template>
    <!-- <div id="about" class="xl:my-32 py-36 flex flex-col xl:flex-row items-center gap-8"> -->
    <div id="about" class="flex flex-col xl:items-start xl:flex-row xl:justify-between min-h-screen justify-center gap-8 py-10">
        <div class="flex flex-col items-center xl:items-start gap-8">
            <h3 class="hidden xl:block mb-5">Who is <span class="text-green">grizzolo</span>?</h3>
            <h4 class="xl:hidden block text-center">Who is <span class="text-green">grizzolo</span>?</h4>
            <h6 class="hidden xl:block mb-8">Well... still not famous enough to find an answer on Wikipedia, so....</h6>
            <div class="xl:hidden block text-subtitle-2 text-center max-w-[75%]">Well... still not famous enough to find an answer on Wikipedia, so....</div>
            <img class="hidden xl:inline-block max-w-lg mb-8" src="/decorative-green.svg" alt="green decorative element evocating a styled lemon">
            <img class="xl:hidden inline-block max-w-lg" src="/decorative-green-mobile.svg" alt="green decorative element evocating a styled lemon">
            <div class="max-w-xl flex flex-col items-center xl:items-start gap-8">
                <div class="body-1 text-center xl:text-start max-w-[70%]">Giovanni Rizzolo (aka grizzolo) is a sicilian web developer born in the sunny city of <span class="text-green">Palermo</span>, Sicily.</div>
                <div class="hidden xl:body-1 text-center xl:text-start max-w-[65%]">25 years old, 100% mediterranean blood flows into his veins.</div>
                <div class="body-1 text-center xl:text-start max-w-[65%]">His obsession for tech mixed with an unconditional love for his homeland are the fuel for powering his will to make Sicily a better place for people to work, live, so grow as professionals and most important, as human beings.</div>
            </div>
        </div>
        <div class="grid grid-cols-1 justify-items-center xl:content-center xl:grid-cols-7 gap-4">
            <div class="xl:col-start-2 col-span-3"><img class="object-cover w-[400px] h-[300px] rounded-2xl" src="/assets/img/palermo-1.jpg" alt=""/></div>
            <div class="col-span-3"><img class="object-cover w-[400px] h-[300px] rounded-2xl overflow-hidden" src="/assets/img/palermo-2.jpg" alt=""/></div>
            <div class="col-span-3"><img class="object-cover w-[400px] h-[300px] rounded-2xl" src="/assets/img/palermo-3.jpg" alt=""/></div>
            <div class="col-span-3"><img class="object-cover w-[400px] h-[300px] rounded-2xl" src="/assets/img/palermo-4.jpg" alt=""/></div>
            <!-- <div class="col-span-1"><img class="object-cover w-[400px] h-[300px] rounded-2xl overflow-hidden" src="/assets/img/palermo-3.jpg" alt=""/></div> -->
            <!-- <div class=""><img src="/palermo-1" alt=""></div> -->
        </div>
        <div>
            <img class="hidden xl:block xl:absolute right-32 top-[900px]" src="/decorative-black.svg" alt="">
        </div>
    </div>
</template>
<script setup lang="ts">
</script>