<template>
  <NuxtLayout>
      <NuxtPage/>
  </NuxtLayout>
</template>
<script setup lang="ts">

import gsap from 'gsap'
import EasePack from 'gsap/EasePack'
import TextPlugin  from 'gsap/TextPlugin'
gsap.registerPlugin(TextPlugin, EasePack)
</script>