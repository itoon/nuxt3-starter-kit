<template>
  <div class="flex flex-col justify-center min-h-full h-[calc(100vh-200px)] py-12 sm:px-6 lg:px-8">
    <div class="sm:mx-auto sm:w-full sm:max-w-md">
      <h1 class="mt-6 text-4xl font-bold tracking-tight text-center text-primary">
        Nuxt3 Starter Kit
      </h1>
      <p class="mt-2 text-sm text-center text-gray-600">Back Office</p>
    </div>

    <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
      <div class="px-4 py-8 bg-white shadow sm:rounded-lg sm:px-10">
        <Form
          v-slot="{ errors }"
          :validation-schema="schema"
          @submit="login"
          class="flex flex-col gap-4"
        >
          <div>
            <label for="username" class="block text-sm font-medium text-gray-700">Username</label>
            <div class="mt-1">
              <Field
                class="px-2 block w-full rounded-md border py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                name="username"
                value="jsmith"
                type="text"
              />
            </div>
          </div>

          <div>
            <label for="password" class="block text-sm font-medium text-gray-700">Password</label>
            <div class="mt-1">
              <Field
                class="px-2 block w-full rounded-md border py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                name="password"
                type="password"
                value="hunter2"
              />
            </div>
          </div>
          <template v-if="Object.keys(errors).length">
            <ul class="text-red-500">
              <li v-for="(message, field) in errors" :key="field">
                {{ message }}
              </li>
            </ul>
          </template>

          <div>
            <button
              type="submit"
              class="flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Sign in
            </button>
          </div>
        </Form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Form, Field, ErrorMessage } from 'vee-validate'
import * as yup from 'yup'

const schema = yup.object({
  username: yup.string().required(),
  password: yup.string().min(6).required()
})

useHead({
  htmlAttrs: {
    class: 'h-full bg-gray-50'
  },
  bodyAttrs: {
    class: 'h-full'
  }
})

definePageMeta({
  auth: {
    unauthenticatedOnly: true,
    navigateAuthenticatedTo: '/admin/dashboard'
  }
})

const { signIn } = useAuth()

const login = async (values) => {
  try {
    await signIn('credentials', {
      username: values.username,
      password: values.password
    })
  } catch (e) {
    console.log('TEST')
  }
}

const validateEmail = (value) => {
  if (!value) {
    return 'This field is required'
  }
  // if the field is not a valid email
  const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i
  if (!regex.test(value)) {
    return 'This field must be a valid email'
  }
  // All is good
  return true
}
</script>

<style lang="scss" scoped></style>
