<template>
    <div class="flex flex-col md:flex-row-reverse gap-4 items-center md:justify-between md:mx-auto my-6 md:my-32">
        <div>
            <img class="w-[140px] h-[140px] md:w-[540px] md:h-[540px] object-cover col-start-3 rounded-tl-[50px] rounded-br-[50px]" src="/assets/img/portrait.jpg"  alt="">
        </div>
        <div class="flex flex-col gap-4">
            <div class="text-subtitle-1 hidden md:block">Welcome to my website</div>
            <div class="flex flex-col gap-4 mb-4">
                <h1 class="hello hidden md:inline-block ">I'm grizzolo</h1>
                <h4 class="hello md:hidden inline-block text-center ">I'm grizzolo</h4>
                <div class="flex items-end justify-center md:justify-start">
                    <h6 class="words text-center md:text-start"></h6>
                    <span class="cursor">_</span>
                    <h6 class="text-green">developer</h6>
                </div>
            </div>
            <iframe style="border-radius:12px" src="https://open.spotify.com/embed/playlist/1qhdGOWZxofPTMw7KpRTjc?utm_source=generator&theme=0" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
        <!-- <div class="text-body-2 text-center md:text-start max-w-xs px-12 md:px-0 mb-6 md:mb-20">Lorem ipsum dolor sit amet consectetur. A orci dis eget nulla vel tellus amet sem viverra. Suscipit eget consectetur ullamcorper lorem ipsum amet nunc orci.</div> -->
        <div class="flex gap-2 flex-col md:flex-row max-w-sm items-center mt-4">
            <button class="bg-secondary py-2 px-5 rounded-[10px] text-primary text-caption max-w-xs text-caption md:text-button">Hire Me</button>
            <button class="py-2 px-5 rounded-[10px] border border-secondary text-secondary max-w-xs text-caption md:text-button">See my projects</button>
        </div>
        </div>
    </div>

    <About/>
    <Projects/>
    <Social />
</template>
<script setup lang="ts">
import gsap from 'gsap'


const grizzoloWords = ref<Array<string>>(['Frontend web', 'Sicilian', 'Relentless', 'Sushi lover 🍣'])
    
    if(process.client){
        const cursor = gsap.to('.cursor', {opacity: 0, ease: "power2.inOut", repeat: -1})
        let masterTl = gsap.timeline({repeat: -1})
        
        grizzoloWords.value.forEach(word => {
        let tl = gsap.timeline({repeat: 1, yoyo: true})
        tl.to('.words', {duration: 1, text: word})
        masterTl.add(tl)
        })
    }



definePageMeta({
    layout: "default"
})
</script>
<style>
/* .box {
  position: absolute;
  display: inline-block;
  background: #1C110A;
  height: 1vw;
  z-index: -1;
} */

</style>