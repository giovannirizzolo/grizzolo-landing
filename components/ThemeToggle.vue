<template>
    <button
        @click="toggle($event)"
        class="relative w-9 h-9 rounded-full border border-secondary flex items-center justify-center cursor-pointer transition-colors duration-300 hover:border-green hover:text-green text-secondary"
        aria-label="Toggle dark mode"
    >
        <!-- Sun (light mode) -->
        <svg
            viewBox="0 0 24 24"
            width="15"
            height="15"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="absolute transition-all duration-500"
            :class="isDark ? 'opacity-0 rotate-[135deg] scale-50' : 'opacity-100 rotate-0 scale-100'"
        >
            <circle cx="12" cy="12" r="5"/>
            <line x1="12" y1="1"     x2="12" y2="3"/>
            <line x1="12" y1="21"    x2="12" y2="23"/>
            <line x1="4.22" y1="4.22"   x2="5.64" y2="5.64"/>
            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
            <line x1="1"  y1="12"    x2="3"  y2="12"/>
            <line x1="21" y1="12"    x2="23" y2="12"/>
            <line x1="4.22"  y1="19.78" x2="5.64"  y2="18.36"/>
            <line x1="18.36" y1="5.64"  x2="19.78" y2="4.22"/>
        </svg>

        <!-- Moon (dark mode) -->
        <svg
            viewBox="0 0 24 24"
            width="15"
            height="15"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="absolute transition-all duration-500"
            :class="!isDark ? 'opacity-0 -rotate-[135deg] scale-50' : 'opacity-100 rotate-0 scale-100'"
        >
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
        </svg>
    </button>
</template>
<script setup lang="ts">
const { isDark, toggle } = useTheme()
</script>
