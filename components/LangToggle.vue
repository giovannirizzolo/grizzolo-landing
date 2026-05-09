<template>
    <button
        @click="handleToggle"
        :class="['lang-toggle relative cursor-pointer', { 'is-active': isBouncing }]"
        :aria-label="`Switch to ${locale === 'en' ? 'Italian' : 'English'}`"
    >
        <span class="lang-label">{{ locale.toUpperCase() }}</span>
    </button>
</template>
<script setup lang="ts">
const { locale, toggle } = useLocale()

const isBouncing = ref(false)

const handleToggle = () => {
    if (isBouncing.value) return
    isBouncing.value = true
    toggle()
    setTimeout(() => { isBouncing.value = false }, 600)
}
</script>
<style scoped>
.lang-toggle {
    color: var(--color-secondary);
    border: 1.5px solid var(--color-secondary);
    border-radius: 9999px;
    padding: 0 10px;
    height: 36px;
    font-size: 12px;
    font-weight: 600;
    letter-spacing: 0.08em;
    transition: border-color 0.4s ease, color 0.4s ease, transform 0.4s ease;
}
.lang-toggle:hover:not(.is-active) {
    border-color: var(--color-accent);
    color: var(--color-accent);
    transform: scale(1.1);
}
.lang-toggle.is-active {
    animation: lang-snap 0.6s ease-out forwards;
    border-color: var(--color-accent);
    color: var(--color-accent);
}

@keyframes lang-snap {
    0%   { transform: scale(1);    animation-timing-function: cubic-bezier(0.4, 0, 1, 1); }
    15%  { transform: scale(0.65); animation-timing-function: cubic-bezier(0, 0.9, 0.4, 1); }
    32%  { transform: scale(1.45); animation-timing-function: ease-out; }
    52%  { transform: scale(0.88); animation-timing-function: ease-in-out; }
    70%  { transform: scale(1.08); animation-timing-function: ease-in-out; }
    85%  { transform: scale(0.97); }
    100% { transform: scale(1); }
}
</style>
