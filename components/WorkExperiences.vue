<template>
  <div class="timeline">
    <article
      v-for="item in events"
      :key="item.companyName"
      class="experience-row"
    >
      <div class="experience-date">
        {{ item.date }}
      </div><div class="experience-body">
        <p class="company">
          {{ item.companyName }}
        </p><h3>{{ item.jobTitle }}</h3><ul>
          <li
            v-for="point in item.points"
            :key="point"
          >
            {{ point }}
          </li>
        </ul>
      </div>
    </article>
  </div>
</template>

<script setup lang="ts">
const events = [
  { companyName: 'Freelance', jobTitle: 'Independent E-commerce, NetSuite & Smart Building Engineer', date: '2012 — 2018 · 2026 — Present', points: ['Own customer-facing e-commerce projects from architecture through deployment and ongoing support.', 'Build headless Shopify and BigCommerce storefronts and connect them with NetSuite and other business systems.', 'Deliver mobile applications and manage cloud and Linux infrastructure across AWS, Google Cloud, and Alibaba Cloud.'] },
  { companyName: 'Switch Automation', jobTitle: 'Senior Software Engineer', date: '2018 — 2026', points: ['Led the front-end modernization of an enterprise smart-building platform with Nuxt and Vue.', 'Built MQTT integrations that brought real-time connected-building data into the web application.', 'Owned production features, debugging, reliability work, and repeatable development and testing workflows.', 'Trained teammates on Vue patterns so the team could confidently maintain the new front end.'] },
  { companyName: 'MobileAds', jobTitle: 'Mid Frontend Engineer', date: '2015 — 2018', points: ['Built HTML5 rich-media ads for major brands, including Rexona and BPI.', 'Created interactive mobile experiences using gyroscope, shake, camera, and QR-code capabilities.', 'Worked directly with clients and owned performance and cross-platform campaign integration.'] },
  { companyName: 'Coconet Business Solutions', jobTitle: 'Junior Software Engineer', date: '2012 — 2015', points: ['Built cable billing, payroll management, and law-office management software for Philippine SMEs.', 'Translated day-to-day business workflows into software that streamlined operations.'] },
]
</script>
