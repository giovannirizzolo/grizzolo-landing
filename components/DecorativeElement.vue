<template>
    <div :style="{'transform':`rotate(${horizontal ? '-90' : '0'}deg)`}" class="flex justify-center">
        <svg v-for="_, idx in elementCount" :key="idx" :width="width" :height="height" :viewBox="`0 0 ${width} ${height}`" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M45.5 23.2026C45.5 35.629 35.4264 7.00166 23 7.00166C10.5736 7.00166 0.5 35.629 0.5 23.2026C0.5 10.7762 10.5736 0.702637 23 0.702637C35.4264 0.702637 45.5 10.7762 45.5 23.2026Z"
            :transform="`rotate(${computeRotationAngle(idx)} 23 23)`"
            :fill="fill"/>
        </svg>

    </div>
</template>
<script setup lang="ts">
    const props = defineProps({
        width:{
            type: Number,
            default: 46
        },
        height:{
            type: Number,
            default: 46
        },
        fill: {
            type: String,
            default: '#000'
        },
        rotationAngle: {
            type: String,
            default: 0
        },
        elementCount: {
            type: Number,
            default: 1
        },
        horizontal: {
            type: Boolean,
            default: false
        }
    })

    const computeRotationAngle = (idx: number) => {
        if(idx % 2 === 0) return props.rotationAngle

        return getComplementaryAngle(props.rotationAngle)
        // if(props.rotationAngle.includes('-')) return props.rotationAngle.substring(1)
    }

    const getComplementaryAngle = (angle: string) => {
        if(angle === '0') return '180'
        if(angle.includes('180')) return '0'
        if(angle.includes('-')) return angle.substring(1)

        return '-'+angle
    }
</script>