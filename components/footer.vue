<template>
  <div class="h-1 bg-secondary opacity-50" />

  <div class="flex justify-between py-2">
    <div class="flex-1 subtitle-1">{{ t('footer.designed') }} <span class="text-accent">grizzolo</span></div>
    <div class="flex-1 subtitle-1 text-end">{{ t('footer.rights') }} {{ new Date().getFullYear() }}</div>
  </div>
</template>
<script setup lang="ts">
const { t } = useLocale()
</script>
