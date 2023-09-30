// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@sidebase/nuxt-auth',
    '@nuxtjs/tailwindcss',
    'nuxt-headlessui',
    '@vueuse/nuxt',
    'nuxt-icon'
  ],
  auth: {
    enableGlobalAppMiddleware: true
  }
})
