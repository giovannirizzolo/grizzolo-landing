<template>
  <div id="social" class="flex flex-col py-20 lg:py-28 gap-10 lg:gap-16">
    <div class="hidden lg:block">
      <h6>Okay, so... now if you don't want to sell me water purifiers...</h6>
    </div>

    <div class="hidden lg:block text-end">
      <h5>You can call me at <button @click="fetchPhoneNumber" class="text-green underline">this number</button> or <a
          href="mailto:rizzolo.giovanni98@gmail.com" target="_blank" class="text-green underline">email me!</a></h5>
      <Loader v-if="loading" />
      <a v-if="phoneNumber" :href="`tel:+39${phoneNumber}`" class="text-subtitle-1 text-green underline">{{ phoneNumber }}</a>
    </div>

    <div class="max-w-sm lg:max-w-xl">
      <h4 class="hidden lg:block">But if you want to find out more, check out my social links to...</h4>
      <h6 class="lg:hidden text-center">But if you want to find out more, check out my social links to...</h6>
    </div>

    <div class="flex justify-center lg:justify-end">
      <ul class="list-none social-list">
        <li class="flex lg:items-baseline">
          <h3 class="hidden lg:flex lg:items-baseline">
            Read my
            <span class="hidden lg:inline px-6 text-[23px] tracking-[0.15px] font-medium">megalomaniacal</span>
            posts on
            <a target="_blank" class="underline text-green pl-6" href="https://www.linkedin.com/in/giovanni-rizzolo/">LinkedIn</a>
          </h3>
          <div class="lg:hidden text-center">Read my megalomaniacal posts on <a
              href="https://www.linkedin.com/in/giovanni-rizzolo/"
              class="text-green underline">LinkedIn</a></div>
        </li>
        <li class="flex justify-center lg:justify-start lg:items-center">
          <h3 class="hidden lg:block">Fix my broken code on <a target="_blank" class="underline text-green"
              href="https://github.com/giovannirizzolo">GitHub</a></h3>
          <div class="lg:hidden text-center">Fix my broken code on <a href="https://github.com/giovannirizzolo"
              class="text-green underline">GitHub</a></div>
        </li>
        <li class="flex justify-center lg:justify-start lg:items-center">
          <h3 class="hidden lg:block">Like my pics on <a target="_blank" class="underline text-green"
              href="https://www.instagram.com/giovanni.rizzolo/">Instagram</a></h3>
          <div class="lg:hidden text-center">Like my pics on <a href="https://www.instagram.com/giovanni.rizzolo/"
              class="underline text-green">Instagram</a></div>
        </li>
      </ul>
    </div>

    <div class="flex lg:hidden flex-col items-center gap-4">
      <div class="flex justify-center max-h-[18vw]">
        <decorative-element class="flex flex-col" :element-count="4" />
      </div>
      <div class="flex gap-4 mt-2">
        <a href="mailto:rizzolo.giovanni98@gmail.com" target="_blank" class="text-green underline">Email</a>
        <button @click="fetchPhoneNumber" class="text-green underline">Call me</button>
      </div>
      <Loader v-if="loading" />
      <a v-if="phoneNumber" :href="`tel:+39${phoneNumber}`" class="text-subtitle-2 text-green underline">{{ phoneNumber }}</a>
    </div>
  </div>
</template>
<script setup lang="ts">
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
    content: url('/decorative-green-single.svg');
    display: inline-block;
    width: 16px;
    height: 16px;
    margin-right: 8px;
  }
}
</style>
