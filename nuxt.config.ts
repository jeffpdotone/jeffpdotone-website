// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxt/ui', '@nuxt/eslint', 'nuxt-vuefire'],
  ssr: false,
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  css: ['~/assets/main.css'],
  vue: {
    compilerOptions: {
      isCustomElement: tag => tag.includes('box-icon'),
    },
  },
  eslint: {
    config: {
      stylistic: true,
    },
  },
  vuefire: {
    config: {
      apiKey: 'AIzaSyDqDlru1MitjCumsuuuVZKmxnyGxvm0hwI',
      authDomain: 'jeffpdotone.firebaseapp.com',
      projectId: 'jeffpdotone',
      storageBucket: 'jeffpdotone.firebasestorage.app',
      messagingSenderId: '126383063633',
      appId: '1:126383063633:web:5ec83d8448d613ea3bee70',
    },
  },
})
