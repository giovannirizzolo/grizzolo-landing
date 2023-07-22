<template>
    <div>
        <svg :width="horizontal ? height : width" :height="horizontal ? width : height" :viewBox="`0 0 ${horizontal ? height : width} ${horizontal ? width : height}`" :fill="fill" v-for="(_, idx) in elementCount / 2" :key="_" xmlns="http://www.w3.org/2000/svg">
            <path v-if="horizontal" d="M50 25.7632C50 39.5703 38.8071 7.7621 25 7.7621C11.1929 7.7621 0 39.5703 0 25.7632C0 11.9561 11.1929 0.763184 25 0.763184C38.8071 0.763184 50 11.9561 50 25.7632Z" :fill="fill" />
            <path v-if="horizontal" d="M50 4.23706C50 -9.57005 61.1929 22.2381 75 22.2381C88.8071 22.2381 100 -9.57006 100 4.23706C100 18.0442 88.8071 29.2371 75 29.2371C61.1929 29.2371 50 18.0442 50 4.23706Z" :fill="fill" />

            <path v-if="!horizontal" d="M3.55273 50C-10.2544 50 21.5538 38.8071 21.5538 25C21.5538 11.1929 -10.2544 -1.69631e-06 3.55273 -1.09278e-06C17.3599 -4.89256e-07 28.5527 11.1929 28.5527 25C28.5527 38.8071 17.3599 50 3.55273 50Z" :fill="fill" />
            <path v-if="!horizontal" d="M25.0786 50C38.8857 50 7.07753 61.1929 7.07753 75C7.07753 88.8071 38.8857 100 25.0786 100C11.2715 100 0.0786128 88.8071 0.0786122 75C0.0786116 61.1929 11.2715 50 25.0786 50Z" :fill="fill" />
        </svg>
    </div>
</template>
<script setup lang="ts">
const props = defineProps({
    width: {
        type: Number,
        default: 30,
    },
    height: {
        type: Number,
        default: 100,
    },
    fill: {
        type: String,
        default: '#000',
    },
    elementCount: {
        type: Number,
        default: 10,
        validator(count: number) {
            return count % 2 === 0
        },
    },
    horizontal: {
        type: Boolean,
        default: false,
    },
})
</script>
