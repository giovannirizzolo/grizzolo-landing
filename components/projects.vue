<template>
    <!-- <div id="projects" class="xl:my-32 py-36 flex flex-col"> -->
    <div id="projects" class="flex flex-col min-h-screen xl:items-stretch xl:justify-center py-10">
        <div class="mb-24 xl:mb-48 flex flex-col items-center xl:block gap-12">
            <h4 class="xl:block hidden max-w-xl">Still figuring out how to compete with Musk’s SpaceX, but meanwhile...</h4>
            <h6 class="xl:hidden block text-center max-w-[65%]">Still figuring out how to compete with Musk’s SpaceX...</h6>
            <div class="xl:hidden block subtitle-2 text-center">
                ...but meanwhile
            </div>
        </div>
        <div class="flex flex-col gap-4 hover:cursor-pointer">
            <div class="p-5 xl:px-8 xl:py-16 flex justify-between border border-t-0" id="projectBox-1"
                @mouseenter="handleMouseEnter"
                @mouseleave="handleMouseLeave">
            <h5 class="hidden xl:inline-block">1. Elfi Systems</h5>
            <div class="text-body-2 inline-block xl:hidden">1. Elfi Systems</div>
            <h5 class="hidden xl:inline-block">12/19</h5>
            <div class="text-body-2 inline-block xl:hidden">12/19</div>
        </div>
        <div class="p-5 xl:px-8 xl:py-16 flex justify-between border border-l-0 hover:cursor-pointer" id="projectBox-2"
                @mouseenter="handleMouseEnter"
                @mouseleave="handleMouseLeave"
            >
            <h5 class="hidden xl:inline-block">2. NoMafiaMemorial</h5>
            <div class="text-body-2 inline-block xl:hidden">2. NoMafiaMemorial</div>
            <h5 class="hidden xl:inline-block">10/21</h5>
            <div class="text-body-2 inline-block xl:hidden">10/21</div>
        </div>
        <div class="p-5 xl:px-8 xl:py-16 flex justify-between border border-r-0 hover:cursor-pointer" id="projectBox-3"
            @mouseenter="handleMouseEnter"
            @mouseleave="handleMouseLeave">
            <h5 class="hidden xl:inline-block">3. Magicmotorsport</h5>
            <div class="text-body-2 inline-block xl:hidden">3. Magicmotorsport</div>
            <h5 class="hidden xl:inline-block">10/22</h5>
            <div class="text-body-2 inline-block xl:hidden">10/22</div>
        </div>
        <div class="flex justify-end mt-40 xl:mt-8">
            <img class="hidden xl:inline-block max-w-lg" src="/decorative-green.svg" alt="green decorative element evocating a styled lemon">
            <img class="xl:hidden inline-block max-w-lg" src="/decorative-green-mobile.svg" alt="green decorative element evocating a styled lemon">
        </div>
    </div>
    </div>
</template>
<script setup lang="ts">
import gsap from 'gsap';

const projectBox =  ref<NodeListOf<Element>>()

const handleMouseEnter = (e: MouseEvent) => {
    gsap.to(e.target, {
                skewX: -10,
                y: -10,
                
                duration: .5,
                backgroundColor: '#3796344D',
                ease: "power1.out",
        })
}

const handleMouseLeave = (e: MouseEvent) => {
    gsap.to(e.target, {
                skewX: 0,
                y: 0,
                duration: .5,
                backgroundColor: 'transparent',
                
                ease: "power1.inOut",
        })
}

onMounted(() => {
    if(process.client){
        projectBox.value = document.querySelectorAll('.projectBox')
    }
})
</script>