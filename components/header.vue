<template>
    <div class="columns-6 flex justify-between" ref="main">
        <img src="/logo1.svg" alt="grizzolo logo">
        <div class="hidden md:flex md:gap-10 items-center justify-end">
            <NuxtLink class="text-button" href="#social">Social</NuxtLink>
            <NuxtLink class="text-button" href="#about">About</NuxtLink>
            <NuxtLink class="text-button" href="#projects">Projects</NuxtLink>
        </div>
        <div class="flex md:hidden" @click="toggleMenuAnimation">
            <img 
                src="/burger-menu.svg" 
                alt="burger menu logo"
                class="cursor-pointer">
        </div>
        <nav class="hidden flex-col items-end gap-4 mobile-menu bg-secondary absolute top-0 right-0 w-[40%] h-[100%] p-4">
            <img 
                src="/close-menu.svg" 
                alt="burger menu logo"
                class="cursor-pointer"
                @click="toggleMenuAnimation">
            <ul class="text-end flex flex-col gap-3">
                <li>
                    <NuxtLink class="text-button text-primary" href="#social">Social</NuxtLink>
                </li>
                <li>
                    <NuxtLink class="text-button text-primary" href="#about">About</NuxtLink>
                </li>
                <li>
                    <NuxtLink class="text-button text-primary" href="#projects">Projects</NuxtLink>
                </li>
            </ul>
        </nav>
    </div>
</template>
<script setup lang="ts">
import gsap from 'gsap'
const main = ref()

const isMenuOpen = ref<boolean>(false)
let tl: gsap.core.Timeline;
let ctx: gsap.Context;

const toggleMenuAnimation = () => { 
    tl.reversed(!tl.reversed())
}

const triggerMenuAnimation = () => {
    ctx = gsap.context((self) => {
        if(self){
            console.log('self :>> ', self);
            //@ts-ignore
            const menu = self.selector('.mobile-menu')
            tl = gsap
            .timeline()
            .fromTo(menu, 
            {opacity: 0, x: 100},
            {opacity: 1, x: 0, display: 'block', duration: .5})
            .reverse()
        
        }
            
        }, main.value)
}


onMounted(() => {
    triggerMenuAnimation()
})

onUnmounted(() => {
    ctx.revert()
})

</script>