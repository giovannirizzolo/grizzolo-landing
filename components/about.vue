<template>
    <div id="about" class="flex flex-col xl:items-start xl:flex-row xl:justify-between min-h-screen justify-center gap-8 py-10">
        <div class="flex flex-col items-center xl:items-start gap-8">
            <h3 class="hidden xl:block mb-5">Who is <span class="text-green">grizzolo</span>?</h3>
            <h4 class="xl:hidden block text-center">Who is <span class="text-green">grizzolo</span>?</h4>
            <h6 class="hidden xl:block mb-8">Well... still not famous enough to find an answer on Wikipedia, so....</h6>
            <div class="xl:hidden block text-subtitle-2 text-center max-w-[75%]">Well... still not famous enough to find an answer on Wikipedia, so....</div>
            <decorative-element 
                    class="hidden xl:flex xl:relative" 
                    fill="#379634"
                    :horizontal="true"
                    :element-count="8"
                />
            <div class="max-w-xl flex flex-col items-center xl:items-start gap-8">
                <div class="body-1 text-center xl:text-start max-w-[70%]">Giovanni Rizzolo (aka grizzolo) is a web developer born in the sunny city of <span class="text-green">Palermo</span>, Sicily.</div>
                <div class="hidden xl:body-1 text-center xl:text-start max-w-[65%]">25 years old, 100% mediterranean blood flows into his veins.</div>
                <div class="body-1 text-center xl:text-start max-w-[65%]">His obsession for tech mixed with an unconditional love for his homeland are the fuel for powering his will to make Sicily a better place for people to work, live, so grow as professionals and most important, as human beings.</div>
            </div>
        </div>
        <div class="grid justify-items-center xl:content-center xl:grid-cols-7 gap-4">
            <div class="xl:col-start-2 xl:col-span-3">
                <nuxt-img 
                    class="object-cover w-[400px] h-[300px] rounded-2xl" 
                    src="/palermo-1.jpg"
                    alt="A beautiful pic of Pretoria square in the historic center of Palermo"
                    format="webp"
                    sizes="xl:100vw lg:100vw md:100vw sm:100vw xs:100vw"
                    loading="lazy"
                    fit="cover"
                    width="100vw"
                    quality="60"
                />
            </div>
            <div class="xl:col-span-3">
                <nuxt-img 
                    class="object-cover w-[400px] h-[300px] rounded-2xl overflow-hidden"
                    src="/palermo-2.jpg"
                    alt=""
                    format="webp"
                    width="100vw"
                    sizes="xl:100vw lg:100vw md:100vw sm:100vw xs:100vw"
                    loading="lazy"
                    fi
                    t="cover" quality="60"/></div>
            <div class="xl:col-span-3">
                <nuxt-img 
                    class="object-cover w-[400px] h-[300px] rounded-2xl"
                    src="/palermo-3.jpg"
                    alt=""
                    format="webp"
                    sizes="xl:100vw lg:100vw md:100vw sm:100vw xs:100vw"
                    width="100vw"
                    loading="lazy"
                />
            </div>
            <div class="xl:col-span-3">
                <nuxt-img 
                    class="object-cover w-[400px] h-[300px] rounded-2xl"
                    src="/palermo-4.jpg"
                    alt=""
                    format="webp"
                    width="100vw"
                    sizes="xl:100vw lg:100vw md:100vw sm:100vw xs:100vw"
                    loading="lazy"
                />
            </div>
        </div>
        <decorative-element 
        class="hidden xl:block xl:relative xl:right-32 xl:-top-10" 
        :element-count="6"/>
    </div>
</template>
<script setup lang="ts">
import DecorativeElement from './DecorativeElement.vue';

</script>