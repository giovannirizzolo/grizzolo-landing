<template>
    <div :class="['columns-6 flex justify-between items-center']" ref="main">
        <nuxt-img class="lg:hidden inline-block dark:invert dark:brightness-200" src="/logo-mobile.svg" width="40" height="20" alt="grizzolo logo" />
        <nuxt-img class="hidden lg:inline-block dark:invert dark:brightness-200" width="105" height="50" src="/logo-desktop.svg" alt="grizzolo logo" />

        <div class="hidden lg:flex lg:gap-10 items-center justify-end">
            <NuxtLink class="text-button" to="#social">Contacts</NuxtLink>
            <NuxtLink class="text-button" to="#about">About</NuxtLink>
            <NuxtLink class="text-button" to="#experiences">Experiences</NuxtLink>
            <ThemeToggle />
        </div>

        <div class="flex lg:hidden items-center gap-3">
            <ThemeToggle />
            <div @click="toggleMenuAnimation">
                <nuxt-img src="/burger-menu.svg" alt="burger menu logo" width="40" height="40" class="burger-menu cursor-pointer dark:invert dark:brightness-200" format="webp" />
            </div>
        </div>

        <nav class="hidden flex-col items-end gap-4 mobile-menu bg-secondary fixed top-0 right-0 w-[50%] sm:w-[40%] h-screen p-4 pointer-events-auto z-50" ref="menuRef">
            <nuxt-img src="/close-menu.svg" alt="close menu" class="cursor-pointer dark:invert dark:brightness-200" @click="toggleMenuAnimation" format="webp" />
            <ul class="text-end flex flex-col gap-3">
                <li>
                    <NuxtLink @click="toggleMenuAnimation" class="text-button text-primary" to="#about">About</NuxtLink>
                </li>
                <li>
                    <NuxtLink @click="toggleMenuAnimation" class="text-button text-primary" to="#experiences">Experiences</NuxtLink>
                </li>
                <li>
                    <NuxtLink @click="toggleMenuAnimation" class="text-button text-primary" to="#social">Contacts</NuxtLink>
                </li>
            </ul>
        </nav>
    </div>
</template>
<script setup lang="ts">
import gsap from 'gsap'
import { getDebounced } from '@/utils/debounce'

const emit = defineEmits<{
    (e: 'menuToggled'): void
}>()

const main = ref()
const menuRef = ref()

let tl: gsap.core.Timeline
let ctx: gsap.Context

const toggleMenuAnimation = () => {
    tl.reversed(!tl.reversed())
    emit('menuToggled')
}

const triggerMenuAnimation = () => {
    ctx = gsap.context((self) => {
        if (self) {
            //@ts-ignore
            const menu = self.selector('.mobile-menu')
            tl = gsap.timeline().fromTo(menu, { opacity: 0, x: 100, display: 'none' }, { opacity: 1, x: 0, display: 'flex', duration: 0.5 }).reverse()
        }
    }, main.value)
}

const closeMenu = () => {
    if (!tl.reversed()) {
        getDebounced(() => {
            if (!tl.reversed()) toggleMenuAnimation()
        }, 100)
    }
}

const handleClickOutside = (e: MouseEvent) => {
    const isBurgerMenuIconClicked = (e.target as Element).closest('.burger-menu')

    if (menuRef.value && !menuRef.value.contains(e.target) && !isBurgerMenuIconClicked) {
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
