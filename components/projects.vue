<template>
    <div id="experiences" class="flex relative flex-col py-20 lg:py-28 xl:items-stretch">
        <div class="mb-12 lg:mb-20 flex flex-col items-center lg:items-start gap-4">
            <h4 class="text-center lg:text-start max-w-xl">Still figuring out how to compete with Musk's SpaceX, but meanwhile...</h4>
        </div>
        <div class="flex flex-col gap-4 hover:cursor-pointer">
            <div class="p-5 xl:px-8 xl:py-16 flex justify-between border border-t-0" id="projectBox-1" @mouseenter="handleMouseEnter" @mouseleave="handleMouseLeave">
                <h5 class="hidden xl:inline-block">1. Elfi Systems</h5>
                <div class="text-body-2 inline-block xl:hidden">1. Elfi Systems</div>
                <h5 class="hidden xl:inline-block">12/19</h5>
                <div class="text-body-2 inline-block xl:hidden">12/19</div>
            </div>
            <div class="p-5 xl:px-8 xl:py-16 flex justify-between border border-l-0 hover:cursor-pointer" id="projectBox-2" @mouseenter="handleMouseEnter" @mouseleave="handleMouseLeave">
                <h5 class="hidden xl:inline-block">2. Uppercat studio</h5>
                <div class="text-body-2 inline-block xl:hidden">2. Uppercat studio</div>
                <h5 class="hidden xl:inline-block">10/21</h5>
                <div class="text-body-2 inline-block xl:hidden">10/21</div>
            </div>
            <div class="p-5 xl:px-8 xl:py-16 flex justify-between border border-r-0 hover:cursor-pointer" id="projectBox-3" @mouseenter="handleMouseEnter" @mouseleave="handleMouseLeave">
                <h5 class="hidden xl:inline-block">3. Magicmotorsport</h5>
                <div class="text-body-2 inline-block xl:hidden">3. Magicmotorsport</div>
                <h5 class="hidden xl:inline-block">10/22</h5>
                <div class="text-body-2 inline-block xl:hidden">10/22</div>
            </div>
            <div class="flex justify-end mt-12 lg:mt-8">
                <decorative-element class="flex max-w-[40%] lg:max-w-none" fill="#379634" :horizontal="true" :element-count="8" />
            </div>
            <project-card
                ref="uppercatCardRef"
                class="appearingContainer"
                title="A NoMafia museum of memory"
                dates="11/21 - 02/22"
                description="NoMafiaMemorial is a project developed by Uppercat Studio which aims to keep alive the memory of the deceased pioneers of anti-mafia and justice's heroes such as Falcone and Borsellino."
                project-link="https://www.nomafiamemorial.org/"
                image-src="/falcone-borsellino.jpg"
                altText="A beautiful pic of the most important heroes of Italian Republic, Giovanni Falcone and Paolo Borsellino"
                :social-links="[
                    { link: 'https://www.instagram.com/nomafiamemorial/', logo: '/instagram.svg' },
                    { link: 'https://www.facebook.com/nomafiamemorial', logo: '/facebook.svg' },
                ]"
            />
            <project-card
                ref="magicCardRef"
                class="appearingContainer"
                title="Magicmotorsport partners"
                dates="03/22 - 09/22"
                altText="A screenshot of Magicmotorsport partners platform"
                image-src="/magic-partners.png"
                description="A platform entirely dedicated to Magicmotorsport distributors all over the world. Goal of this project is to give them more visibility and chances to increase their market opportunities"
                project-link="https://partners.magicmotorsport.com/"
                :social-links="[
                    { link: 'https://www.instagram.com/mms.center/', logo: '/instagram.svg' },
                    { link: 'https://www.facebook.com/magicmotorsport', logo: '/facebook.svg' },
                ]"
            />
        </div>
    </div>
</template>
<script setup lang="ts">
import gsap from 'gsap'
import ProjectCard from './ProjectCard.vue'

const uppercatCardRef = ref<InstanceType<typeof ProjectCard>>()
const magicCardRef = ref<InstanceType<typeof ProjectCard>>()

const uppercatTween = ref<GSAPTween>()
const magicTween = ref<GSAPTween>()

const timeoutId = ref<ReturnType<typeof setTimeout>>()

const handleMouseEnter = (e: MouseEvent) => {
    gsap.to(e.target, {
        skewX: -10,
        y: -10,
        duration: 0.5,
        backgroundColor: '#3796344D',
        ease: 'power1.out',
    })
    handleHoveredElement(e)
}

const handleHoveredElement = (e: MouseEvent) => {
    const hoveredElement = e.target as Element

    timeoutId.value = setTimeout(() => {
        const uppercatEl = uppercatCardRef.value?.$el
        const magicEl = magicCardRef.value?.$el
        if (!uppercatEl || !magicEl) return

        switch (hoveredElement.id) {
            case 'projectBox-2':
                if (!isMouseOverElement(e, uppercatEl)) uppercatTween.value?.play()
                break
            case 'projectBox-3':
                if (!isMouseOverElement(e, magicEl)) magicTween.value?.play()
                break
        }
    }, 250)
}

const handleMouseLeave = (e: MouseEvent) => {
    clearTimeout(timeoutId.value)

    const uppercatEl = uppercatCardRef.value?.$el
    const magicEl = magicCardRef.value?.$el
    if (!uppercatEl || !magicEl) return

    if (e.target) {
        gsap.to(e.target, {
            skewX: 0,
            y: 0,
            duration: 0.5,
            backgroundColor: 'transparent',
            ease: 'power1.inOut',
        })
    }

    switch ((e.target as Element).id) {
        case 'projectBox-2':
            if (!isMouseOverElement(e, uppercatEl)) uppercatTween.value?.reverse()
            break
        case 'projectBox-3':
            if (!isMouseOverElement(e, magicEl)) magicTween.value?.reverse()
            break
    }
}

onMounted(() => {
    const uppercatEl = uppercatCardRef.value?.$el
    const magicEl = magicCardRef.value?.$el
    if (!uppercatEl || !magicEl) return

    const hiddenState = { scale: 0, opacity: 0, display: 'none' }
    const appearedState = {
        scale: 1,
        opacity: 1,
        display: 'flex',
        duration: 1.5,
        ease: 'power4.out',
        xPercent: -50,
        yPercent: -50,
        left: '50%',
        top: '60%',
        paused: true,
    }

    gsap.set(uppercatEl, hiddenState)
    gsap.set(magicEl, hiddenState)

    uppercatTween.value = gsap.to(uppercatEl, appearedState)
    magicTween.value = gsap.to(magicEl, appearedState)

    magicEl.addEventListener('mouseleave', () => mouseLeaveHandler(magicTween.value))
    uppercatEl.addEventListener('mouseleave', () => mouseLeaveHandler(uppercatTween.value))
})
</script>
