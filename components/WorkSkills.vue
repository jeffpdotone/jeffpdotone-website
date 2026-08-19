<template>
  <div class="skill-grid">
    <article
      v-for="group in groups"
      :key="group.title"
      class="skill-group"
    >
      <p>{{ group.number }}</p><h3>{{ group.title }}</h3><ul>
        <li
          v-for="skill in group.skills"
          :key="skill"
        >
          {{ skill }}
        </li>
      </ul>
    </article>
  </div>
</template>

<script setup lang="ts">
const groups = [{ number: '01', title: 'Frontend', skills: ['Vue', 'Nuxt', 'React', 'Next.js', 'JavaScript / TypeScript', 'Vite'] }, { number: '02', title: 'Backend & integrations', skills: ['Node.js / Bun', 'REST APIs', 'GraphQL', 'NetSuite / SuiteScript', 'MQTT / real-time data'] }, { number: '03', title: 'Cloud & platforms', skills: ['AWS', 'Azure', 'Google Cloud', 'Docker / Linux', 'Shopify / BigCommerce'] }, { number: '04', title: 'Additional', skills: ['Flutter', 'React Native', 'Ionic', 'Python', 'PHP / Laravel', 'Godot'] }]
</script>
