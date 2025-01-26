import path from 'path'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  compatibilityDate: '2024-04-03',
  modules: ['@primevue/nuxt-module', '@nuxt/eslint', 'nuxt-vuefire'],
  devtools: { enabled: true },
  css: ['~/assets/main.css'],
  vue: {
    compilerOptions: {
      isCustomElement: tag => tag.includes('box-icon'),
    },
  },
  primevue: {
    options: {
      unstyled: true,
    },
    importPT: { from: path.resolve(__dirname, './presets/aura') },
    components: {
      include: ['Card', 'Rating'],
    },
    directives: {
      include: [],
    },
    composables: {
      include: [],
    },
  },
  eslint: {
    config: {
      stylistic: true,
    },
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
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
