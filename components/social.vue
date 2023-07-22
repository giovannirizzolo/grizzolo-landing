<template>
    <div id="social" class="flex flex-col min-h-screen justify-center items-center xl:items-stretch xl:justify-between gap-32 md:gap-16 py-10">
        <div class="hidden xl:block col-start-1">
            <h6>Okay, so... now if you don’t want to sell me water purifiers...</h6>
        </div>
        <div class="hidden xl:block col-start-2 row-start-2 text-end">
            <h5>You can call me at <button @click="fetchPhoneNumber" class="text-green underline">this number</button> or <a href="mailto:rizzolo.giovanni98@gmail.com" target="_blank" class="text-green underline">email me!</a></h5>
            <Loader v-if="loading" />
            <a v-if="phoneNumber" :href="`tel:+39${phoneNumber}`" class="text-subtitle text-green underline">{{ phoneNumber }}</a>
        </div>
        <div class="xl:col-start-1 xl:row-start-3 col-span-2 max-w-sm">
            <h4 class="hidden xl:block">But If you want to find out more, check out my social links to...</h4>
            <h6 class="xl:hidden block text-center max-w-sm">But If you want to find out more, check out my social links to...</h6>
        </div>
        <div class="flex justify-end">
            <ul class="list-none social-list">
                <li class="flex xl:items-baseline">
                    <h3 class="hidden xl:flex xl:items-baseline">
                        Read my
                        <h6 class="hidden xl:block px-6">megalomaniacal</h6>
                    </h3>
                    <h3 class="hidden xl:block pr-6">posts on</h3>
                    <h3><a target="_blank" class="underline text-green hidden xl:block" href="https://www.linkedin.com/in/giovanni-rizzolo/">LinkedIn</a></h3>
                    <div class="block xl:hidden text-center">Read my megalomaniacal posts on <a href="https://www.linkedin.com/in/giovanni-rizzolo/" class="inline-block xl:hidden text-green underline">LinkedIn</a></div>
                </li>
                <li class="flex justify-center xl:justify-start xl:items-center">
                    <h3 class="hidden xl:block">Fix my broken code on <a target="_blank" class="underline text-green" href="https://github.com/giovannirizzolo">GitHub</a></h3>
                    <div class="block xl:hidden text-center">Fix my broken code on <a href="https://github.com/giovannirizzolo" class="inline-block xl:hidden text-green underline">GitHub</a></div>
                </li>
                <li class="flex justify-center xl:justify-start xl:items-center">
                    <h3 class="hidden xl:block">Like my pics on <a target="_blank" class="underline text-green" href="https://www.instagram.com/giovanni.rizzolo/">Instagram</a></h3>
                    <div class="block xl:hidden text-center">Like my pics on <a href="https://www.instagram.com/giovanni.rizzolo/" class="underline text-green inline-block xl:hidden">Instagram</a></div>
                </li>
            </ul>
        </div>
        <div class="flex justify-center max-h-[18vw] xl:mt-8">
            <decorative-element class="flex flex-col xl:hidden" :element-count="4" />
        </div>
        <div class="flex xl:hidden gap-2">
            <a href="mailto:rizzolo.giovanni98@gmail.com" target="_blank" class="text-green underline">Email</a>
            <div class="xl:hidden text-subtitle">
                <button @click="fetchPhoneNumber" class="text-green underline">Call me</button>
            </div>
        </div>
        <Loader v-if="loading" />
        <a v-if="phoneNumber" :href="`tel:+39${phoneNumber}`" class="xl:hidden text-subtitle text-green underline">{{ phoneNumber }}</a>
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
        width: 16px; /* Adjust the dimensions as needed */
        height: 16px;
        margin-right: 8px;
    }
}
</style>
