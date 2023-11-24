<template>
  <BaseContainer>
    <div id="pinia" class="flex flex-col max-w-xs gap-2 mx-auto mt-4">
      <h2 class="text-2xl text-center">Name: {{ userStore.user }}</h2>
      <div class="px-4 py-1 text-white bg-green-500">
        <h2 class="font-light">FirstName: {{ userStore.firstname }}</h2>
        <h2 class="font-light">Lastname: {{ userStore.lastname }}</h2>
      </div>
      <input
        v-model="user"
        type="text"
        class="px-2 block w-full rounded-md border py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        autocomplete="off"
      />
      <button
        @click="submit"
        class="flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
      >
        Update Pinia
      </button>
    </div>
  </BaseContainer>
</template>

<script setup lang="ts">
import { useUserStore } from '~/store/index'
// import { storeToRefs } from 'pinia'

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

const userStore = useUserStore()
const user = ref('')
// const { user } = storeToRefs(userStore)

const submit = () => {
  userStore.updateName(user.value)
}
</script>

<style scoped></style>
