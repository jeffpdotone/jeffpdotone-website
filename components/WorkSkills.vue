<template>
  <section class="work-skills border-t border-gray-200 dark:border-gray-700 pt-6">
    <h2 class="mb-3 text-sm font-bold uppercase tracking-widest text-gray-500 dark:text-gray-400">
      Technology
    </h2>
    <div class="flex flex-wrap gap-x-4 gap-y-2 text-xs md:text-sm text-gray-600 dark:text-gray-300">
      <span
        v-for="tech of techStacks"
        :key="tech.name"
        class="whitespace-nowrap"
      >
        {{ tech.name }}
      </span>
    </div>
  </section>
</template>

<script setup>
const techStacks = ref([
  { name: 'Smart Building Platforms' },
  { name: 'Building IoT' },
  { name: 'MQTT / Real-time Data' },
  { name: 'JavaScript / TypeScript' },
  { name: 'Vue / Nuxt' },
  { name: 'React / Next.js' },
  { name: 'Node.js' },
  { name: 'Python' },
  { name: 'PHP / Laravel' },
  { name: 'GraphQL' },
  { name: 'Shopify / BigCommerce / Liquid' },
  { name: 'NetSuite' },
  { name: 'AWS / Azure / GCP' },
  { name: 'Flutter / React Native / Ionic' },
])
</script>
