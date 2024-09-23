<script setup>
import Navbar from './components/Navbar.vue'
import SocialNetworks from './components/SocialNetworks.vue'
</script>

<template>

  <div className="w-full h-full flex flex-col items-center justify-center">
    <Navbar />
    <div class="w-full h-full flex flex-col items-center justify-center px-5 sm:container">
      <div class="flex items-center rounded-full bg-gray-200 border-8 border-gray-200">
        <img alt="ushieru's image" src='https://avatars.githubusercontent.com/u/32021976?v=4' height="256" width="256"
          class="rounded-full" />
      </div>
      <p class="font-bold text-5xl sm:text-7xl mt-10">I&apos;m Ushieru</p>
      <p class="text-3xl sm:text-5xl mt-3">Software Engineer</p>
      <SocialNetworks />
    </div>
  </div>
</template>