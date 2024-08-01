import path from 'path'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  modules: ['@primevue/nuxt-module', '@nuxt/eslint'],
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
    importPT: { from: path.resolve(__dirname, './presets/aura') },
    components: {
      include: ['Card', 'Rating']
    },
    directives: {
      include: []
    },
    composables: {
      include: []
    }
  },
  eslint: {
    config: {
      stylistic: true
    }
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {}
    }
  }
})
