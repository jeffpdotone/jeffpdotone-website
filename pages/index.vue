<template>
  <main class="w-5/6 md:w-4/6 mx-auto my-12 print:w-screen flex flex-col gap-10 print:gap-5">
    <the-header />

    <section class="max-w-3xl text-sm md:text-base leading-relaxed text-gray-700 dark:text-gray-300">
      <p>
        Versatile software engineer building digital products since 2012, across smart-building
        platforms, e-commerce and NetSuite integrations, SaaS, mobile applications, interactive
        games, and rich-media advertising. After eight years at Switch Automation, I bring deep
        expertise in building IoT, MQTT, real-time connected-system data, front-end architecture,
        and reliable enterprise web applications.
      </p>
    </section>

    <work-experiences />

    <work-skills />
  </main>
</template>

<script setup lang="ts">
useHead({
  title: 'Jefferson Paltera | E-commerce, NetSuite & Smart Building Engineer',
  link: [
    { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
    { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
    { href: 'https://fonts.googleapis.com/css2?family=DM+Serif+Display&family=Roboto+Mono:wght@400;700&display=swap', rel: 'stylesheet' },
  ],
  script: [
    { src: 'https://unpkg.com/boxicons@2.1.4/dist/boxicons.js', defer: true },
  ],
  bodyAttrs: {
    class: 'dark:bg-gray-900 dark:text-white',
  },
})
</script>
