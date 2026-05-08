<template>
    <button
        @click="handleToggle"
        :class="['theme-toggle relative w-9 h-9 rounded-full cursor-pointer overflow-hidden', { 'is-active': isBouncing }]"
        aria-label="Toggle dark mode"
    >
        <!-- Sun (light mode) -->
        <svg
            viewBox="0 0 24 24"
            width="16"
            height="16"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="toggle-icon absolute inset-0 m-auto"
            :class="isDark ? 'opacity-0 rotate-[135deg] scale-50' : 'opacity-100 rotate-0 scale-100'"
        >
            <circle cx="12" cy="12" r="5"/>
            <line x1="12" y1="1"     x2="12" y2="3"/>
            <line x1="12" y1="21"    x2="12" y2="23"/>
            <line x1="4.22"  y1="4.22"  x2="5.64"  y2="5.64"/>
            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
            <line x1="1"  y1="12" x2="3"  y2="12"/>
            <line x1="21" y1="12" x2="23" y2="12"/>
            <line x1="4.22"  y1="19.78" x2="5.64"  y2="18.36"/>
            <line x1="18.36" y1="5.64"  x2="19.78" y2="4.22"/>
        </svg>

        <!-- Moon (dark mode) -->
        <svg
            viewBox="0 0 24 24"
            width="16"
            height="16"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="toggle-icon absolute inset-0 m-auto"
            :class="!isDark ? 'opacity-0 -rotate-[135deg] scale-50' : 'opacity-100 rotate-0 scale-100'"
        >
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
        </svg>
    </button>
</template>
<script setup lang="ts">
const { isDark, toggle } = useTheme()

const isBouncing = ref(false)

const handleToggle = (e: MouseEvent) => {
    if (isBouncing.value) return
    isBouncing.value = true
    toggle(e)
    setTimeout(() => { isBouncing.value = false }, 780)
}
</script>
<style scoped>
.theme-toggle {
    color: var(--color-secondary);
    border: 1.5px solid var(--color-secondary);
    transition: border-color 0.4s ease, color 0.4s ease, transform 0.4s ease;
}
.theme-toggle:hover:not(.is-active) {
    border-color: var(--color-accent);
    color: var(--color-accent);
    transform: scale(1.1);
}
.theme-toggle.is-active {
    animation: rubber-snap 0.78s ease-out forwards;
    border-color: var(--color-accent);
    color: var(--color-accent);
}

.toggle-icon {
    transition:
        opacity 0.45s ease,
        transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
}

/*
  Rubber band: quick compress (the pull) →
  explosive snap release (the boom) →
  decaying oscillation (the settle)
*/
@keyframes rubber-snap {
    0%   { transform: scale(1);    animation-timing-function: cubic-bezier(0.4, 0, 1, 1); }
    13%  { transform: scale(0.60); animation-timing-function: cubic-bezier(0, 0.9, 0.4, 1); }
    28%  { transform: scale(1.62); animation-timing-function: ease-out; }
    46%  { transform: scale(0.84); animation-timing-function: ease-in-out; }
    62%  { transform: scale(1.14); animation-timing-function: ease-in-out; }
    76%  { transform: scale(0.96); animation-timing-function: ease-out; }
    88%  { transform: scale(1.03); }
    100% { transform: scale(1); }
}
</style>
