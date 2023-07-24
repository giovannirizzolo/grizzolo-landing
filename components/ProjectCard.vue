<template>
    <div class="hidden absolute container bg-primary max-auto p-6 flex-col gap-8 rounded-xl border border-secondary max-w-xs xl:max-w-3xl shadow-sm xl:shadow-2xl">
        <div class="flex flex-col xl:flex-row xl:items-start justify-between gap-4">
            <div class="flex flex-col gap-4 xl:w-[45%]">
                <h6>{{ title }}</h6>
                <div class="text-subtitle-2">{{ dates }}</div>
                <div class="text-body-2">{{ description }}</div>
            </div>
            <nuxt-img :src="imageSrc" class="object-contain flex items-start xl:w-[45%] rounded-2xl" alt="" format="webp" width="100vw" sizes="xl:100vw lg:100vw md:100vw sm:100vw xs:100vw" fit="contain" placeholder />
        </div>
        <div class="flex justify-between items-center">
            <nuxt-link v-if="projectLink" :to="projectLink" target="_blank" class="flex items-center px-4 py-2 text-button bg-secondary rounded-xl text-primary">Check it out</nuxt-link>
            <div class="flex justify-end gap-4" v-if="socialLinks && socialLinks.length">
                <nuxt-link v-for="(social, _) in socialLinks" target="_blank" :key="_" :to="social.link">
                    <nuxt-img :src="social.logo" width="30px" sizes="xl:100vw lg:50vw md:50vw sm:50vw xs:50vw" />
                </nuxt-link>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
defineProps({
    title: {
        type: String,
        required: true,
    },
    imageSrc: {
        type: String,
        default: '',
    },
    dates: {
        type: String,
    },
    description: {
        type: String,
        required: true,
    },
    projectLink: {
        type: String,
    },
    socialLinks: {
        type: Array as PropType<Array<{ logo: string; link: string }>>,
    },
    altText: {
        type: String,
    },
})
</script>
