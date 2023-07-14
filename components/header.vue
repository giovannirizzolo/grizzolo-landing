<template>
    <div :class="['columns-6 flex justify-between items-center']" ref="main">
        <nuxt-img 
            class="xl:hidden inline-block"
            src="/logo-mobile.svg"
            width="40"
            height="20"
            alt="grizzolo logo"/>
        <nuxt-img 
            class="hidden xl:inline-block"
            width="105"
            height="50"
            src="/logo-desktop.svg"
            alt="grizzolo logo"
        />
        <div class="hidden xl:flex xl:gap-10 items-center justify-end">
            <NuxtLink class="text-button" to="#social">Social</NuxtLink>
            <NuxtLink class="text-button" to="#about">About</NuxtLink>
            <NuxtLink class="text-button" to="#experiences">Experiences</NuxtLink>
        </div>
        
        <div class="flex xl:hidden" @click="toggleMenuAnimation">
            <nuxt-img 
                src="/burger-menu.svg" 
                alt="burger menu logo"
                width="40"
                height="20"
                class="burger-menu cursor-pointer"
                format="webp"
                
                 />
        </div>
        <nav class="hidden flex-col items-end gap-4 mobile-menu bg-secondary absolute top-0 right-0 w-[40%] h-screen p-4" ref="menuRef">
            <nuxt-img 
                src="/close-menu.svg" 
                alt="burger menu logo"
                class="cursor-pointer"
                @click="toggleMenuAnimation"
                format="webp"/>
            <ul class="text-end flex flex-col gap-3">
                <li>
                    <NuxtLink class="text-button text-primary" to="#social">Social</NuxtLink>
                </li>
                <li>
                    <NuxtLink class="text-button text-primary" to="#about">About</NuxtLink>
                </li>
                <li>
                    <NuxtLink class="text-button text-primary" to="#experiences">Experiences</NuxtLink>
                </li>
            </ul>
        </nav>
    </div>
</template>
<script setup lang="ts">
import gsap from 'gsap'
import { getDebounced } from '@/utils/debounce'


const main = ref()
const menuRef = ref()

let tl: gsap.core.Timeline;
let ctx: gsap.Context;

const toggleMenuAnimation = () => { 
    tl.reversed(!tl.reversed())
}

const triggerMenuAnimation = () => {
    ctx = gsap.context((self) => {
        if(self){
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

const closeMenu = () => {
    if(!tl.reversed()){
            getDebounced(toggleMenuAnimation, 100)
        }
}

const handleClickOutside = (e: MouseEvent) => {
    const isBurgerMenuIconClicked = (e.target as Element).closest('.burger-menu');
    
    if(menuRef.value && !menuRef.value.contains(e.target) && !isBurgerMenuIconClicked){
        closeMenu()
    }
}

onMounted(() => {
    triggerMenuAnimation()
    document.addEventListener('click', handleClickOutside)
    window.addEventListener('scroll', closeMenu)
    window.addEventListener('resize', closeMenu)

})

onUnmounted(() => {
    ctx.revert()
})

</script>