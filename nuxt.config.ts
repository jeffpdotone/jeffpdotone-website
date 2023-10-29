// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['nuxt-primevue'],
  devtools: { enabled: true },
  css: ['~/assets/main.css'],
  vue: {
    compilerOptions: {
      isCustomElement: tag => tag.includes('box-icon')
    }
  },
  primevue: {
    options: {
      unstyled: true,
    },
    importPT: { as: 'Tailwind', from: 'primevue/passthrough/tailwind' }
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {}
    }
  }
})
