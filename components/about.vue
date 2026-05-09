<template>
  <div id="about" class="flex flex-col lg:flex-row lg:justify-between lg:items-start py-20 lg:py-28 gap-12 lg:gap-16">
    <div class="flex flex-col items-center lg:items-start gap-6 lg:max-w-sm xl:max-w-md shrink-0">
      <h3 class="hidden lg:block">{{ t('about.title') }}</h3>
      <h4 class="lg:hidden text-center">{{ t('about.title') }}</h4>

      <h6 class="hidden lg:block">{{ t('about.subtitle') }}</h6>
      <div class="lg:hidden text-subtitle-2 text-center max-w-[75%]">{{ t('about.subtitle') }}</div>

      <decorative-element class="hidden lg:flex lg:relative text-accent" fill="currentColor" :horizontal="true"
        :element-count="8" />

      <div class="flex flex-col items-center lg:items-start gap-6">
        <p class="text-body-2 text-center lg:text-start">{{ t('about.bio1') }}</p>
        <p class="text-body-2 text-center lg:text-start">{{ t('about.bio2', { age }) }}</p>
        <p class="text-body-3 text-center lg:text-start">{{ t('about.bio3') }}</p>
      </div>
    </div>

    <div class="grid grid-cols-2 gap-4 xl:grid-cols-2">
      <div v-for="(photo, idx) in photos" :key="photo.src"
        class="photo-container relative rounded-2xl overflow-hidden aspect-[4/3]">
        <SkeletonBlock v-if="!loaded[idx]" width="100%" height="100%" border-radius="0" />
        <nuxt-img class="object-cover w-full h-full" :src="photo.src" :alt="photo.alt" format="webp" width="400"
          height="300" sizes="xs:45vw sm:45vw lg:280px xl:320px" loading="lazy" fit="cover" quality="70"
          @load="loaded[idx] = true" />
        <div class="photo-glow-overlay" />
      </div>
    </div>

    <decorative-element class="hidden xl:block xl:relative xl:right-32 xl:-top-10 shrink-0 text-secondary"
      :element-count="6" />
  </div>
</template>
<script setup lang="ts">
const { t } = useLocale()

const birthDate = new Date(1998, 2, 14)
const today = new Date()
const age = today.getFullYear() - birthDate.getFullYear() -
  (today < new Date(today.getFullYear(), birthDate.getMonth(), birthDate.getDate()) ? 1 : 0)

const photos = [
  { src: '/palermo-1.jpg', alt: 'A beautiful pic of Pretoria square in the historic center of Palermo' },
  { src: '/palermo-2.jpg', alt: 'A pic of Palermo' },
  { src: '/palermo-3.jpg', alt: 'A pic of Palermo' },
  { src: '/palermo-4.jpg', alt: 'A pic of Palermo' },
]

const loaded = ref(photos.map(() => false))
</script>
