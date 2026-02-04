import { defineNuxtConfig } from '@nuxt/bridge'

export default defineNuxtConfig({
  bridge: {
    nitro: true,
    vite: false,
  },
  devServer: {
    port: 5001,
  },
})
