import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'
import { resolve } from 'path'

export default defineNuxtConfig({
  app: {
    // baseURL: 'https://sudoris.github.io/icjia-hub-reboot/'
  },

  // ssr: false,

  css: ['~/assets/css/main.css'],
  devtools: { enabled: true },

  build: {
    transpile: ['vuetify'],
  },

  modules: [   
    '@pinia/nuxt',
    (_options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) => {
        // @ts-expect-error
        config.plugins.push(vuetify({ autoImport: true }))
      })
    },
  ],
  vite: {
    resolve: {
      alias: {
        '@': resolve(__dirname, './')
      }
    },
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },

  compatibilityDate: '2024-08-20',
})