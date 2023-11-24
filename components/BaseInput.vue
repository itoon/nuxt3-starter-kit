<template>
  <div>
    <label for="username" class="block text-sm font-medium text-gray-700">Username</label>
    <div class="mt-1">
      <input
        v-model="username"
        id="username"
        name="username"
        required
        class="px-2 block w-full rounded-md border py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
      />
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
