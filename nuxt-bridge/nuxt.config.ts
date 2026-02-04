import { defineNuxtConfig } from '@nuxt/bridge'

export default defineNuxtConfig({
  bridge: {
    nitro: true,
    vite: false,
  },
  components: [
    { path: '~/components', pathPrefix: false },
    { path: '../shared/components', pathPrefix: false },
  ],
  imports: {
    dirs: ['../shared/composables'],
  },
  devServer: {
    port: 5001,
  },
})
