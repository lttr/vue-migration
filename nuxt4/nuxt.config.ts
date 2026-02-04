export default defineNuxtConfig({
  compatibilityDate: '2025-01-01',
  components: [
    { path: '~/components', pathPrefix: false },
    { path: '../../shared/components', pathPrefix: false },
  ],
  imports: {
    dirs: ['../../shared/composables'],
  },
  devServer: {
    port: 5002,
  },
})
