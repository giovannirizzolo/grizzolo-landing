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
        var(--skeleton-base)  25%,
        var(--skeleton-shine) 50%,
        var(--skeleton-base)  75%
    );
    background-size: 200% 100%;
    animation: shimmer 1.8s ease-in-out infinite;
}

@keyframes shimmer {
    0%   { background-position: 200% 0; }
    100% { background-position: -200% 0; }
}
</style>
