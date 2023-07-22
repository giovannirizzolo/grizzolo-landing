<template>
    <div :class="['px-6 xl:px-8 py-8 xl:mx-auto xl:w-[1440px]', { 'backdrop': isMenuOpen }]" >
      <div id="frame" ref="frame">
        <div 
            v-for="_, idx in bubbleCount"
            ref="bubbles"
            :key="idx"
            class="bubble"
        />
    </div>
      <Header @menu-toggled="handleMenuToggled"/>
      <slot />
      <Footer/>
    </div>
  </template>
  <script setup lang="ts">

  import gsap from 'gsap'
  import EasePack from 'gsap/EasePack'
  import TextPlugin  from 'gsap/TextPlugin'
  import CSSPlugin  from 'gsap/CSSPlugin'
  
  gsap.registerPlugin(TextPlugin, EasePack, CSSPlugin)
  
  import {createTween} from '@/utils/bubbles'
  
  const bubbleCount = ref<number>(30)
  const isMenuOpen = ref<boolean>(false)
  
  const bubbles = ref<InstanceType<typeof Array<HTMLDivElement>>>()
  const frame = ref<InstanceType<typeof HTMLDivElement>>()
  
  const handleBubbles = () => {
      if(bubbles.value){
          bubbles.value.forEach((bubble) => {
              createTween(bubble, true)
      })
      }
  }
  const handleMenuToggled = () => {
    isMenuOpen.value = !isMenuOpen.value
  }

  onMounted(() => {
    handleBubbles()
  })
  </script>
  <style>
  #frame {
      position: fixed;
      margin: 0;
      padding: 0;
      display: flex;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      align-items: center;
      justify-content: center;
      z-index: -1;
      overflow: hidden;
  }
  
  .bubble {
    position: absolute;
    top: 100%;
    left: 45%;
    border-radius: 50%;
    /* z-index: -2; */
    
  }
  
  .bubble::before {
    content: "";
    position: absolute;
    top: -6px;
    left: -6px;
    right: -6px;
    bottom: -6px;
    border-radius: 50%;
    background-color: #379634;
    filter: blur(40px);
    /* z-index: -2; */
  }
  
  .backdrop{
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 9999; /* Adjust the z-index value to ensure the backdrop is above other elements */
  pointer-events: none;
  /* &::not(nav){ */
    /* filter: blur(1px);  */
  /* } */
}

  
  </style>
