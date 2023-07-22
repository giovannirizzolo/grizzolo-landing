<template>
    <div class="flex flex-col xl:flex-row-reverse xl:justify-between min-h-screen justify-start items-center xl:items-stretch mt-8">
        <nuxt-img class="w-[140px] h-[140px] xl:w-[540px] xl:h-[540px] object-cover col-start-3 rounded-tl-[50px] rounded-br-[50px]" src="/portrait.jpg" alt="grizzolo portrait" id="portrait" format="webp" width="100vw" sizes="xl:100vw lg:100vw md:100vw sm:100vw xs:100vw" />
        
        </div> -->
        <div class="flex flex-col gap-4 items-center xl:items-start">
            <div class="text-subtitle-1 hidden xl:block">Welcome to my website</div>
            <div class="flex flex-col gap-4 mb-4">
                <h1 class="hello hidden xl:inline-block">I'm grizzolo</h1>
                <h4 class="hello xl:hidden inline-block text-center">I'm grizzolo</h4>
                <div class="flex items-end justify-center xl:justify-start">
                    <h6 class="words text-center xl:text-start"></h6>
                    <span class="circle">_</span>
                    <h6 class="text-green">developer</h6>
                </div>
            </div>
            <iframe style="border-radius: 12px" src="https://open.spotify.com/embed/playlist/1qhdGOWZxofPTMw7KpRTjc?utm_source=generator&theme=0" width="100%" height="152" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture; preconnect;" loading="lazy" />
            <div class="flex gap-2 flex-col xl:flex-row items-center mt-4">
                <NuxtLink to="https://calendly.com/grizzolo/30min" target="_blank" class="bg-secondary py-2 px-5 rounded-[10px] text-primary text-caption max-w-xs text-caption xl:text-button">Book a call</NuxtLink>
                <NuxtLink to="#experiences" class="py-2 px-5 rounded-[10px] border border-secondary text-secondary max-w-xs text-caption xl:text-button">See my experiences</NuxtLink>
            </div>
        </div>
    </div>
    <About />
    <Projects />
    <Social />
</template>
<script setup lang="ts">
import gsap from 'gsap'

const grizzoloWords = ref<Array<string>>(['Frontend web', 'Sicilian', 'Relentless', 'Sushi lover 🍣'])

const handleProfessionTypingAnimation = () => {
    if (process.client) {
        let masterTl = gsap.timeline({ repeat: -1 })

        grizzoloWords.value.forEach((word) => {
            let tl = gsap.timeline({ repeat: 1, yoyo: true })
            tl.to('.words', { duration: 1, text: word })
            masterTl.add(tl)
        })
    }
}

onMounted(async () => {
    handleProfessionTypingAnimation()
})

useSeoMeta({
    title: 'grizzolo',
    description: 'grizzolo portfolio website',
})

definePageMeta({
    layout: 'default',
})
</script>
