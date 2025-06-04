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
  () => `Over ${yearsExp.value} years of experience in full-stack web and mobile development.`,
  'Contributed to Vue Storefront (now Alokai) as part of ongoing freelance work in the headless e-commerce space.',
  'Skilled in building modern, high-performance websites using VueJS, Nuxt.js, ReactJS, Next.js, and ag-Grid.',
  'Experienced in integrating with Shopify and BigCommerce to create seamless and scalable e-commerce solutions.',
  'Proficient in Liquid for Shopify theme customization and backend functionality.',
  'Strong knowledge of JavaScript, SQL, Firebase, and network protocols.',
  'Developed cross-platform mobile apps using Flutter, React Native, and Ionic.',
  'Backend expertise with Node.js, PHP, Python, Laravel, and WordPress, with a focus on SEO and content optimization.',
  'Experienced in managing Linux servers and deploying applications on AWS, Google Cloud, and Alibaba Cloud.',
  'Worked on Solana NFT projects involving minting sites, wallet integrations, and smart contract interactions using tools like HashLips and Candy Machine.',
  'Committed to open-source collaboration, clean coding practices, and delivering reliable, future-ready digital solutions.',
]

// const vsfPoints = [
//   'Extensive experience in designing and maintaining headless e-commerce websites using Vue Storefront.',
//   'Expertise in integrating Vue Storefront with Shopify and BigCommerce to deliver comprehensive solutions with seamless functionality and optimal performance.',
//   'Proven ability to collaborate effectively with cross-functional teams and a commitment to delivering high-quality results.',
//   'Expertise in debugging and troubleshooting issues with Vue Storefront, Shopify, and BigCommerce, ensuring a smooth user experience for customers.',
//   'Continuous commitment to staying up-to-date with the latest advancements in these ecosystems, enabling the provision of innovative solutions that drive the adoption of these platforms.',
// ]

const switchPoints = [
  'Develop and maintain a bug-free web application.',
  'Implement new Nuxt.js framework to improve the company\'s front-end.',
  'Incorporate new technology trends to enhance the company\'s product.',
  'Automate development and testing processes.',
  'Introduce and train the team on the Vue.js framework.',
]

const mobileadsPoints = [
  'I specialize in crafting customized HTML5 ads that engage and captivate the audience.',
  'My role involves creating rich media ads that incorporate interactive elements, animations, and multimedia content to deliver compelling advertising experiences.',
  'I work closely with clients to understand their unique brand and campaign goals, tailoring each ad to their specific needs.',
  'I utilize vanilla JavaScript to ensure browser compatibility across different devices, enhancing the reach of our ads.',
  'My responsibilities include optimizing ad performance and ensuring seamless integration across various advertising platforms and devices.',
]

const coconetPoints = [
  'As a software developer, I play a crucial role in the development of important business solutions for small and medium-sized enterprises in the Philippines.',
  'My expertise is utilized in the creation of three essential products: a cable billing management system, a payroll management system, and a law office management system.',
  'These desktop applications are specifically designed to meet the unique needs of SMBs and help streamline their operations.',
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
    jobTitle: 'Full Stack Engineer',
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
    date: 'Sept 2018 - Present (1 year as Upwork Talent)',
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
