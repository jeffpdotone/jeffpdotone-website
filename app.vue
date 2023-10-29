<template>
  <div class="w-4/6 mx-auto my-12 print:w-screen flex flex-col gap-10 print:gap-5">
    <the-header />

    <work-skills />

    <work-experiences />
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Jefferson Paltera | Web Developer',
  link: [
    { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
    { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
    { href: 'https://fonts.googleapis.com/css2?family=DM+Serif+Display&family=Roboto+Mono:wght@400;700&display=swap', rel: 'stylesheet' }
  ],
  script: [
    { src: 'https://unpkg.com/boxicons@2.1.4/dist/boxicons.js', defer: true }
  ],
  bodyAttrs: {
    class: 'dark:bg-gray-900 dark:text-white'
  }
})
</script>
