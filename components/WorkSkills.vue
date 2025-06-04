<template>
  <div class="grid grid-cols-2 md:grid-cols-4 gap-2 flex-wrap justify-center work-skills">
    <div
      v-for="tech of techStacks"
      :key="tech.name"
      class="flex flex-col items-center border p-5 rounded-xl text-center text-xs md:text-base"
    >
      <Rating
        v-model="tech.value"
        readonly
        :pt-options="{ mergeProps: true }"
        :pt="pt"
        :cancel="false"
      />
      <span>{{ tech.name }}</span>
    </div>
  </div>
</template>

<script setup>
const techStacks = ref([
  { value: 5, name: 'HTML/HTML5' },
  { value: 3, name: 'Liquid Markup' },
  { value: 5, name: 'JS/TYPESCRIPT' },
  { value: 5, name: 'CSS/SCSS' },
  { value: 4, name: 'Node.JS' },
  { value: 3, name: 'Python' },
  { value: 3, name: 'PHP' },
  { value: 3, name: 'Laravel' },
  { value: 3, name: 'GraphQL' },
  { value: 4, name: 'Vue/Nuxt.js 2&3' },
  { value: 3, name: 'web3' },
  { value: 4, name: 'React/Next.js' },
  { value: 4, name: 'Tailwind/UnoCSS' },
  { value: 4, name: 'DevOps (AWS, Azure, GCP)' },
])

const pt = { onIcon: { class: 'w-[10px] md:w-[25px]' }, offIcon: { class: 'w-[10px] md:w-[25px]' } }
</script>
