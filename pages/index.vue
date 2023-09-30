<template>
  <BaseContainer>
    <BaseWelcome class="mt-40" />
  </BaseContainer>
</template>

<script setup>
definePageMeta({
  auth: false
})
useHead({
  title: 'Nuxt3 Start Kit',
  meta: [
    {
      hid: 'description',
      name: 'description',
      content: 'Make building modern web applications with Nuxt3 a breeze'
    }
  ]
})
</script>

<style scoped></style>
