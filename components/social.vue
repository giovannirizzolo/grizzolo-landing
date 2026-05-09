<template>
  <div id="social" class="flex flex-col py-20 lg:py-28 gap-10 lg:gap-16">
    <div class="hidden lg:block">
      <h6>{{ t('social.tagline') }}</h6>
    </div>

    <div class="hidden lg:block text-end">
      <h5>{{ t('social.callOrEmail') }} <button @click="fetchPhoneNumber" class="text-accent underline">{{ t('social.thisNumber') }}</button> {{ t('social.or') }} <a
          href="mailto:rizzolo.giovanni98@gmail.com" target="_blank" class="text-accent underline">{{ t('social.emailMe') }}</a></h5>
      <Loader v-if="loading" />
      <a v-if="phoneNumber" :href="`tel:+39${phoneNumber}`" class="text-subtitle-1 text-accent underline">{{ phoneNumber
        }}</a>
    </div>

    <div class="max-w-sm lg:max-w-xl">
      <h4 class="hidden lg:block">{{ t('social.socialIntro') }}</h4>
      <h6 class="lg:hidden text-center">{{ t('social.socialIntro') }}</h6>
    </div>

    <div class="flex justify-center lg:justify-end">
      <ul class="list-none social-list">
        <li class="flex lg:items-baseline">
          <h3 class="hidden lg:flex lg:items-baseline">
            {{ t('social.linkedinBefore') }}
            <span class="hidden lg:inline px-6 text-[23px] tracking-[0.15px] font-medium">{{ t('social.linkedinMiddle') }}</span>
            {{ t('social.linkedinAfter') }}
            <a target="_blank" class="underline text-accent pl-6"
              href="https://www.linkedin.com/in/giovanni-rizzolo/">LinkedIn</a>
          </h3>
          <div class="lg:hidden text-center">{{ t('social.linkedinBefore') }} {{ t('social.linkedinMiddle') }} {{ t('social.linkedinAfter') }} <a
              href="https://www.linkedin.com/in/giovanni-rizzolo/" class="text-accent underline">LinkedIn</a></div>
        </li>
        <li class="flex justify-center lg:justify-start lg:items-center">
          <h3 class="hidden lg:block">{{ t('social.githubBefore') }} <a target="_blank" class="underline text-accent"
              href="https://github.com/giovannirizzolo">GitHub</a></h3>
          <div class="lg:hidden text-center">{{ t('social.githubBefore') }} <a href="https://github.com/giovannirizzolo"
              class="text-accent underline">GitHub</a></div>
        </li>
        <li class="flex justify-center lg:justify-start lg:items-center">
          <h3 class="hidden lg:block">{{ t('social.instagramBefore') }} <a target="_blank" class="underline text-accent"
              href="https://www.instagram.com/giovanni.rizzolo/">Instagram</a></h3>
          <div class="lg:hidden text-center">{{ t('social.instagramBefore') }} <a href="https://www.instagram.com/giovanni.rizzolo/"
              class="underline text-accent">Instagram</a></div>
        </li>
      </ul>
    </div>

    <div class="flex lg:hidden flex-col items-center gap-4">
      <div class="flex justify-center max-h-[18vw]">
        <decorative-element class="flex flex-col text-secondary" :element-count="4" />
      </div>
      <div class="flex gap-4 mt-2">
        <a href="mailto:rizzolo.giovanni98@gmail.com" target="_blank" class="text-accent underline">{{ t('social.email') }}</a>
        <button @click="fetchPhoneNumber" class="text-accent underline">{{ t('social.callMe') }}</button>
      </div>
      <Loader v-if="loading" />
      <a v-if="phoneNumber" :href="`tel:+39${phoneNumber}`" class="text-subtitle-2 text-accent underline">{{ phoneNumber
        }}</a>
    </div>
  </div>
</template>
<script setup lang="ts">
const { t } = useLocale()
const loading = ref<boolean>(false)
const phoneNumber = ref<string>()

const fetchPhoneNumber = async () => {
  loading.value = true
  const { data } = await useFetch<Record<'telephoneNumber', string>>('/api/phone')

  if (data.value) {
    loading.value = false
    phoneNumber.value = data.value.telephoneNumber
  }
}
</script>
<style>
@media (min-width: 1024px) {
  .social-list li::before {
    content: '';
    display: inline-block;
    width: 16px;
    height: 16px;
    margin-right: 8px;
    background-color: var(--color-accent);
    -webkit-mask: url('/decorative-green-single.svg') no-repeat center / contain;
    mask: url('/decorative-green-single.svg') no-repeat center / contain;
    vertical-align: middle;
  }
}
</style>
