// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@sidebase/nuxt-auth',
    '@nuxtjs/tailwindcss',
    'nuxt-headlessui',
    '@vueuse/nuxt',
    'nuxt-icon',
    '@nuxt/image',
    '@pinia/nuxt',
    [
      '@vee-validate/nuxt',
      {
        // disable or enable auto imports
        autoImports: true,
        // Use different names for components
        componentNames: {
          Form: 'VeeForm',
          Field: 'VeeField',
          FieldArray: 'VeeFieldArray',
          ErrorMessage: 'VeeErrorMessage'
        }
      }
    ]
  ],
  auth: {
    enableGlobalAppMiddleware: true
  },
  image: {
    dir: 'assets/imgs',
    format: ['webp']
  }
})
