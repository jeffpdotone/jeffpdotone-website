<template>
  <div class="flex gap-5 flex-col text-xs md:text-base">
    <Card
      v-for="item of events"
      :key="item.companyName"
    >
      <template #title>
        <img
          v-if="item.image"
          :src="item.image"
          class="h-10"
          :alt="item.alt"
        >
        {{ item.companyName }}
        - {{ item.jobTitle }}
      </template>
      <template #subtitle>
        {{ typeof item.date === 'function' ? item.date() : item.date }}
      </template>
      <template #content>
        <ul class="list-disc list-inside">
          <li
            v-for="point in item.points"
            :key="typeof point === 'function' ? point() : point"
          >
            {{ typeof point === 'function' ? point() : point }}
          </li>
        </ul>

        <div
          v-if="item.refs"
          class="flex gap-2 mt-5"
        >
          <span>References:</span>
          <a
            v-for="refer in item.refs"
            :key="refer.name"
            :href="refer.link"
            target="_blank"
            rel="noopener noreferrer"
            class="hover:underline flex gap-2"
          >
            <span>{{ refer.name }}</span> <span class="hidden print:block">{{ refer.link }}</span>
          </a>
        </div>
      </template>
    </Card>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const startYear = 2012
const yearsExp = ref(0)

function updateYears() {
  const now = new Date()
  const start = new Date(startYear, 0, 1)
  const diff = now - start
  yearsExp.value = (diff / (1000 * 60 * 60 * 24 * 365.25)).toFixed(2)
  requestAnimationFrame(updateYears)
}

onMounted(() => {
  updateYears()
})

const freelancePoints = [
  'Own customer-facing e-commerce projects from architecture through deployment and ongoing support.',
  'Deliver headless commerce implementations for Shopify and BigCommerce, including custom storefront and backend integrations.',
  'Connect e-commerce storefronts with NetSuite and other business systems.',
  'Develop cross-platform mobile applications with Flutter, React Native, and Ionic.',
  'Own cloud deployments and Linux infrastructure across AWS, Google Cloud, and Alibaba Cloud.',
  'Built Solana NFT minting experiences, including wallet integrations and smart-contract interactions.',
]

// const vsfPoints = [
//   'Extensive experience in designing and maintaining headless e-commerce websites using Vue Storefront.',
//   'Expertise in integrating Vue Storefront with Shopify and BigCommerce to deliver comprehensive solutions with seamless functionality and optimal performance.',
//   'Proven ability to collaborate effectively with cross-functional teams and a commitment to delivering high-quality results.',
//   'Expertise in debugging and troubleshooting issues with Vue Storefront, Shopify, and BigCommerce, ensuring a smooth user experience for customers.',
//   'Continuous commitment to staying up-to-date with the latest advancements in these ecosystems, enabling the provision of innovative solutions that drive the adoption of these platforms.',
// ]

const switchPoints = [
  'Led the front-end modernization of an enterprise smart-building platform by introducing Nuxt.js and Vue.js.',
  'Built MQTT integrations that delivered real-time data from connected building systems to the web application.',
  'Developed interfaces that made complex building, equipment, and operational data usable for facility teams.',
  'Trained teammates on Vue.js patterns so the team could confidently build and maintain the new front end.',
  'Owned development and maintenance of production web application features, including debugging and reliability work.',
  'Automated development and testing workflows to make releases more consistent and repeatable.',
]

const mobileadsPoints = [
  'Built custom HTML5 rich-media ads for major brands, including Rexona and BPI, handling millions of impressions and tracked interaction and click events.',
  'Created interactive mobile ad experiences using device capabilities such as gyroscope input, shake detection, camera access, and QR-code scanning.',
  'Worked directly with clients to translate brand and campaign goals into production-ready ad experiences.',
  'Used vanilla JavaScript to support a wide range of browsers, devices, and advertising platforms.',
  'Owned performance optimization and cross-platform integration for delivered campaigns.',
]

const coconetPoints = [
  'Built desktop business software for small and medium-sized companies in the Philippines.',
  'Developed three operational products: cable billing, payroll management, and law-office management systems.',
  'Translated the day-to-day workflows of local businesses into software that streamlined their operations.',
]

const vsfReference = [
  {
    name: 'Filip Rakowski',
    link: 'https://www.linkedin.com/in/filip-rakowski-a43671129/',
  },
]

const switchReference = [
  {
    name: 'Charles Lanada',
    link: 'https://www.linkedin.com/in/charles-lanada-9ab985b8/',
  },
]

const mobileadsReference = [
  { name: 'Alvin Koay', link: 'https://www.linkedin.com/in/alvinkoay/' },
]

const events = ref([
  {
    companyName: 'Freelancer',
    jobTitle: 'Independent E-commerce, NetSuite & Smart Building Engineer',
    alt: 'JeffP.one Logo',
    image: 'https://avatars.githubusercontent.com/u/15663986?v=4',
    date: () => `Active Since 2012 (${yearsExp.value} years)`,
    color: 'gray',
    points: freelancePoints,
    refs: vsfReference,
  },
  {
    companyName: 'Switch Automation',
    jobTitle: 'Senior Software Engineer',
    alt: 'Switch Automation Logo',
    image: '/switch.svg',
    date: 'Sept 2018 - Aug 31, 2026 (1 year as Upwork Talent)',
    color: '#c0d736',
    points: switchPoints,
    refs: switchReference,
  },
  //   {
  //     companyName: 'Vue Storefront',
  //     jobTitle: 'Freelance Frontend Engineer',
  //     alt: 'Vue Storefront Logo',
  //     image: '/vsf.svg',
  //     date: 'Oct 2021 - Oct 2023 (2 years)',
  //     color: '#02c652',
  //     points: vsfPoints,
  //     refs: vsfReference,
  //   },
  {
    companyName: 'MobileAds',
    jobTitle: 'Mid Frontend Engineer',
    alt: 'MobileAds Logo',
    image: '/mobileads.webp',
    date: 'Nov 2015 - Sept 2018 (3 years 8 months)',
    color: '#c0d736',
    points: mobileadsPoints,
    refs: mobileadsReference,
  },
  {
    companyName: 'Coconet Business Solutions',
    jobTitle: 'Jr Software Engineer',
    alt: 'Coconet Business Solutions Logo',
    image: '/coconet.png',
    date: 'Aug 2012 - Nov 2015 (3 years 4 months)',
    color: '#f5a623',
    points: coconetPoints,
  },
])
</script>
