<template>
    <div class="flex flex-col lg:flex-row-reverse lg:justify-between py-12 lg:py-20 justify-start items-center lg:items-stretch mt-8 gap-8 lg:gap-12">
        <nuxt-img class="w-[140px] h-[140px] lg:w-[320px] lg:h-[320px] xl:w-[540px] xl:h-[540px] object-cover rounded-tl-[50px] rounded-br-[50px] shrink-0"
            src="/portrait.jpg"
            alt="grizzolo portrait"
            id="portrait"
            format="webp"
            width="540"
            height="540"
            sizes="xs:140px sm:140px md:140px lg:320px xl:540px"
            fetchpriority="high"
            preload
            placeholder />
        <div class="flex flex-col gap-4 items-center lg:items-start lg:justify-center w-full lg:w-auto">
            <div class="text-subtitle-1 hidden lg:block">Welcome to my website</div>
            <div class="flex flex-col gap-4 mb-4">
                <h1 class="hello hidden lg:inline-block">I'm grizzolo</h1>
                <h4 class="hello lg:hidden inline-block text-center">I'm grizzolo</h4>
                <div class="flex items-end justify-center lg:justify-start">
                    <h6 class="words text-center lg:text-start"></h6>
                    <span class="circle">_</span>
                    <h6 class="text-green">developer</h6>
                </div>
            </div>
            <div class="relative w-full" style="height: 152px">
                <SkeletonBlock v-if="!spotifyLoaded" width="100%" height="152px" />
                <iframe
                    v-show="spotifyLoaded"
                    style="border-radius: 12px"
                    src="https://open.spotify.com/embed/playlist/1qhdGOWZxofPTMw7KpRTjc?utm_source=generator&theme=0"
                    width="100%"
                    height="152"
                    frameBorder="0"
                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture;"
                    @load="spotifyLoaded = true"
                />
            </div>
            <div class="flex gap-2 flex-col lg:flex-row items-center mt-4">
                <NuxtLink to="https://calendly.com/grizzolo/30min" target="_blank" class="bg-secondary py-2 px-5 rounded-[10px] text-primary text-button">Book a call</NuxtLink>
                <NuxtLink to="#experiences" class="py-2 px-5 rounded-[10px] border border-secondary text-secondary text-button">See my experiences</NuxtLink>
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
const spotifyLoaded = ref(false)

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

const siteUrl = 'https://www.grizzolo.it'
const ogImage = `${siteUrl}/portrait.jpg`
const description = 'Giovanni Rizzolo — frontend web developer from Palermo, Sicily. Building clean, passionate digital experiences.'

useSeoMeta({
    title: 'grizzolo',
    description,
    ogTitle: 'grizzolo',
    ogDescription: description,
    ogImage,
    ogImageAlt: 'Giovanni Rizzolo portrait',
    ogUrl: siteUrl,
    ogType: 'website',
    ogSiteName: 'grizzolo',
    twitterCard: 'summary_large_image',
    twitterTitle: 'grizzolo',
    twitterDescription: description,
    twitterImage: ogImage,
})

useHead({
    link: [{ rel: 'canonical', href: siteUrl }]
})


definePageMeta({
    layout: 'default',
    
})
</script>
