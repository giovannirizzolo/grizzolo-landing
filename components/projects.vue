<template>
    <div id="experiences" class="flex relative flex-col min-h-screen xl:items-stretch xl:justify-center py-10">
        <div class="mb-24 xl:mb-48 flex flex-col items-center xl:block gap-12">
            <h4 class="xl:block hidden max-w-xl">Still figuring out how to compete with Musk’s SpaceX, but meanwhile...</h4>
            <h6 class="xl:hidden block text-center max-w-[65%]">Still figuring out how to compete with Musk’s SpaceX...</h6>
            <div class="xl:hidden block subtitle-2 text-center">...but meanwhile</div>
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
            <div class="flex justify-end mt-32 xl:mt-8">
                <decorative-element class="flex max-w-[40%] xl:max-w-none xl:relative" fill="#379634" :horizontal="true" :element-count="8" />
            </div>
            <project-card class="appearingContainer" id="appearingElfi" image-src="/palermo-2.jpg" title="radom" dates="radom" description="radom" />
            <project-card
                class="appearingContainer"
                id="appearingUppercat"
                title="A NoMafia museum of memory"
                dates="11/21 - 02/22"
                description="NoMafiaMemorial is a project developed by Uppercat Studio which aims to keep alive the memory of the deceased pioneers of anti-mafia and justice's heroes such as Falcone and Borsellino."
                project-link="https://www.nomafiamemorial.org/"
                image-src="/falcone-borsellino.jpg"
                altText="A beautiful pic of the most important heroes of Italian Republic, Giovanni Falcone and Paolo Borsellino"
                :social-links="[
                    {
                        link: 'https://www.instagram.com/nomafiamemorial/',
                        logo: '/instagram.svg',
                    },
                    {
                        link: 'https://www.facebook.com/nomafiamemorial',
                        logo: '/facebook.svg',
                    },
                ]"
            />
            <project-card
                class="appearingContainer"
                id="appearingMagic"
                title="Magicmotorsport partners"
                dates="03/22 - 09/22"
                altText="A screenshot of Magicmotorsport partners platform"
                image-src="/magic-partners.png"
                description="A platform entirely dedicated to Magicmotorsport distributors all over the world. Goal of this project is to give them more visibility and chances to increase their market opportunities"
                project-link="https://partners.magicmotorsport.com/"
                :social-links="[
                    {
                        link: 'https://www.instagram.com/mms.center/',
                        logo: '/instagram.svg',
                    },
                    {
                        link: 'https://www.facebook.com/magicmotorsport',
                        logo: '/facebook.svg',
                    },
                ]"
            />
        </div>
    </div>
</template>
<script setup lang="ts">
import { EProjectCard } from '@/utils/enums/project-card.enum'
import gsap from 'gsap'
import ProjectCard from './ProjectCard.vue'

// template refs
const appearingUppercat = ref<InstanceType<typeof Element>>()
const appearingMagic = ref<InstanceType<typeof Element>>()

//tweens
const uppercatTween = ref<GSAPTween>()
const magicTween = ref<GSAPTween>()

const projectBox = ref<NodeListOf<Element>>()
const projectCards = ref<NodeListOf<Element>>()

const timeoutId = ref<ReturnType<typeof setTimeout>>()

const handleMouseEnter = async (e: MouseEvent) => {
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
    const playInterval = 250

    timeoutId.value = setTimeout(() => {
        if (!appearingUppercat.value || !appearingMagic.value) return

        let isMouseOverAppearContainer: boolean

        switch (hoveredElement.id) {
            case 'projectBox-2':
                isMouseOverAppearContainer = isMouseOverElement(e, appearingUppercat.value)
                if (!isMouseOverAppearContainer && uppercatTween.value) {
                    // Add a delay before reversing the animation
                    uppercatTween.value?.play()
                }
                break
            case 'projectBox-3':
                isMouseOverAppearContainer = isMouseOverElement(e, appearingMagic.value)

                if (!isMouseOverAppearContainer && magicTween.value) {
                    magicTween.value?.play()
                }
                break
            default:
                break
        }
    }, playInterval)
}

const setProjectBoxTween = (target: EventTarget) => {
    gsap.to(target, {
        skewX: 0,
        y: 0,
        duration: 0.5,
        backgroundColor: 'transparent',
        ease: 'power1.inOut',
    })
}
const handleMouseLeave = (e: MouseEvent) => {
    clearTimeout(timeoutId.value)

    if (!appearingUppercat.value || !appearingMagic.value) return

    if (e.target) setProjectBoxTween(e.target)

    let isMouseOverAppearContainer: boolean

    switch ((e.target as Element).id) {
        case 'projectBox-2':
            isMouseOverAppearContainer = isMouseOverElement(e, appearingUppercat.value)

            if (!isMouseOverAppearContainer && uppercatTween.value) {
                uppercatTween.value.reverse()
            }
            break
        case 'projectBox-3':
            isMouseOverAppearContainer = isMouseOverElement(e, appearingMagic.value)

            if (!isMouseOverAppearContainer && magicTween.value) {
                magicTween.value.reverse()
            }
            break
        default:
            break
    }
}

onMounted(() => {
    if (process.client) {
        projectBox.value = document.querySelectorAll('.projectBox')
        projectCards.value = document.querySelectorAll('.appearingContainer')

        projectCards.value.forEach((card, idx) => {
            switch (idx) {
                case EProjectCard.MAGIC_PROJECT_CARD:
                    appearingMagic.value = card

                    break
                case EProjectCard.UPPERCAT_PROJECT_CARD:
                    appearingUppercat.value = card
                    break
                default:
                    break
            }
        })

        const appearingSetObj = {
            scale: 0,
            opacity: 0,
            display: 'none',
        }

        const appearingToObj = {
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

        if (!appearingUppercat.value || !appearingMagic.value) return

        uppercatTween.value = gsap.set(appearingUppercat.value, appearingSetObj)
        magicTween.value = gsap.set(appearingMagic.value, appearingSetObj)

        uppercatTween.value = gsap.to(appearingUppercat.value, appearingToObj)
        magicTween.value = gsap.to(appearingMagic.value, appearingToObj)

        appearingMagic.value.addEventListener('mouseleave', () => mouseLeaveHandler(magicTween.value))
        appearingUppercat.value.addEventListener('mouseleave', () => mouseLeaveHandler(uppercatTween.value))
    }
})
</script>
