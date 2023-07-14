<template>
  <!-- mx-32 sm:mx-6 -->
    <div class="container px-6 xl:px-8 my-8 xl:mx-auto">
      <div id="frame" ref="frame">
        <div 
            v-for="_, idx in bubbleCount"
            ref="bubbles"
            :key="idx"
            class="bubble"
        />
    </div>
      <Header />
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
  
  const bubbles = ref<InstanceType<typeof Array<HTMLDivElement>>>()
  const frame = ref<InstanceType<typeof HTMLDivElement>>()
  
  const handleBubbles = () => {
      if(bubbles.value){
          bubbles.value.forEach((bubble) => {
              createTween(bubble, true)
      })
      }
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
  
  
  </style>
