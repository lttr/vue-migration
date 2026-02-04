export default defineNuxtConfig({
  compatibilityDate: '2025-01-01',
  components: [
    { path: '~/components', pathPrefix: false },
  ],
  devServer: {
    port: 5002,
  },
})
