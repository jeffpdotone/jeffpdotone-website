<template>
    <div class="flex gap-5 flex-col items-start">
        <div class="flex gap-2">
            <div
                v-for="tech of techStacks"
                :key="tech.name"
                class="flex flex-col items-center border p-5 rounded-xl w-[170px] text-center"
            >
                <Rating v-model="tech.value" readonly :cancel="false" />
                {{ tech.name }}
            </div>
        </div>

        <div class="flex gap-5">
            <div
                v-for="skill of skills"
                :key="skill.name"
                class="flex flex-col items-center border p-5 rounded-xl w-[170px] text-center"
            >
                <Rating v-model="skill.value" readonly :cancel="false" />
                {{ skill.name }}
            </div>
        </div>
    </div>
</template>

<script setup>
const techStacks = ref([
    { value: 5, name: 'HTML/HTML5' },
    { value: 5, name: 'JS/TYPESCRIPT' },
    { value: 5, name: 'CSS/SCSS' },
    { value: 4, name: 'Node.JS' },
    { value: 3, name: 'Python' },
    { value: 3, name: 'PHP' },
])

const skills = ref([
    { value: 4, name: 'Vue/Nuxt.js 2&3' },
    { value: 4, name: 'React/Next.js' },
    { value: 4, name: 'Tailwind/UnoCSS' },
    { value: 4, name: 'DevOps (AWS, Azure, GCP)' },
])
</script>
