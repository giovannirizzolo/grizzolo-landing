<template>
    <div class="skeleton-block" :style="{ width, height, borderRadius }" />
</template>

<script setup lang="ts">
withDefaults(defineProps<{
    width?: string
    height?: string
    borderRadius?: string
}>(), {
    width: '100%',
    height: '100%',
    borderRadius: '12px',
})
</script>

<style scoped>
.skeleton-block {
    background: linear-gradient(
        90deg,
        rgba(28, 17, 10, 0.06) 25%,
        rgba(55, 150, 52, 0.12) 50%,
        rgba(28, 17, 10, 0.06) 75%
    );
    background-size: 200% 100%;
    animation: shimmer 1.8s ease-in-out infinite;
}

@keyframes shimmer {
    0%   { background-position: 200% 0; }
    100% { background-position: -200% 0; }
}
</style>
