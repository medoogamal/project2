<script setup>
import MainLayout from '../layouts/MainLayout.vue'
import { useLanguageStore } from '../../stores/store.js'
const languageStore = useLanguageStore()

import useVuelidate from '@vuelidate/core'
import { required, minLength, email, sameAs } from '@vuelidate/validators'
import { reactive, computed } from 'vue'

const formDate = reactive({
  username: '',
  email: '',
  password: '',
  confirmPassword: ''
})

const rules = computed(() => {
  return {
    username: { required, minLength: minLength(10) },
    email: { required, email },
    password: { required },
    confirmPassword: { required, sameAs: sameAs(formDate.password) }
  }
})

const v$ = useVuelidate(rules, formDate)

const submitForm = async () => {
  const result = await v$.value.$validate()
  if (result) {
    alert('form submitted')
  } else {
    alert('noooooot')
  }
}
</script>

<template>
  <MainLayout>
    <main>
      <section class="">
        <div class="container h-full px-6 py-24">
          <div class="g-6 flex h-full flex-wrap items-center justify-center lg:justify-between">
            <!-- Left column container with background-->
            <div class="mb-12 md:mb-0 md:w-8/12 lg:w-6/12 relative">
              <img
                src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
                class="w-full"
                alt="Phone image"
              />
              <img
                src="/images/logo.png"
                class="absolute top-[4px] left-[38%] -translate-y-[50%] -translate-x-[50%] w-[45px]"
                alt=""
              />
              <img
                src="/images/logo.png"
                class="absolute top-[25%] left-[40%] -translate-y-[50%] -translate-x-[50%] w-[100px] md:w-[160px] -rotate-45"
                alt=""
              />
            </div>

            <!-- Right column container with form -->
            <div class="md:w-8/12 lg:ml-6 lg:w-5/12">
              <form @submit.prevent="submitForm">
                <!-- user input -->
                <div class="relative mb-6" data-te-input-wrapper-init>
                  <input
                    v-model="formDate.username"
                    type="text"
                    class="peer block min-h-[auto] w-full rounded border bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                    placeholder="Email address"
                  />
                  <label
                    for="exampleFormControlInput3"
                    :class="languageStore.direction == 'rtl' ? 'left-3' : 'right-3'"
                    class="peer-focus:dark:bg-[#1a1a1a] peer-focus:px-2 peer-focus:bg-white pointer-events-none absolute top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.9] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                    >User Name
                  </label>
                  <span class="text-red-500" v-for="error in v$.username.$errors" :key="error.$uid">
                    {{ error.$message }}
                  </span>
                </div>
                <!-- Email input -->
                <div class="relative mb-6" data-te-input-wrapper-init>
                  <input
                    v-model="formDate.email"
                    type="email"
                    class="peer block min-h-[auto] w-full rounded border bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                    placeholder="Email address"
                    autocomplete="off"
                  />
                  <label
                    :class="languageStore.direction == 'rtl' ? 'left-3' : 'right-3'"
                    for="exampleFormControlInput3"
                    class="peer-focus:dark:bg-[#1a1a1a] peer-focus:px-2 peer-focus:bg-white pointer-events-none absolute top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.9] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                    >Email address
                  </label>
                  <span class="text-red-500" v-for="error in v$.email.$errors" :key="error.$uid">
                    {{ error.$message }}
                  </span>
                </div>

                <!-- Password input -->
                <div class="relative mb-6" data-te-input-wrapper-init>
                  <input
                    v-model="formDate.password"
                    type="password"
                    class="peer block min-h-[auto] w-full rounded border bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                    placeholder="Password"
                    autocomplete="off"
                  />
                  <label
                    :class="languageStore.direction == 'rtl' ? 'left-3' : 'right-3'"
                    for="exampleFormControlInput33"
                    class="peer-focus:dark:bg-[#1a1a1a] peer-focus:px-2 peer-focus:bg-white pointer-events-none absolute top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.9] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                    >Password
                  </label>
                  <span class="text-red-500" v-for="error in v$.password.$errors" :key="error.$uid">
                    {{ error.$message }}
                  </span>
                </div>

                <!-- Password comformation input -->
                <div class="relative mb-6" data-te-input-wrapper-init>
                  <input
                    v-model="formDate.confirmPassword"
                    type="password"
                    class="peer block min-h-[auto] w-full rounded border bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                    placeholder="confirm Password"
                    autocomplete="off"
                  />
                  <label
                    :class="languageStore.direction == 'rtl' ? 'left-3' : 'right-3'"
                    for="exampleFormControlInput33"
                    class="peer-focus:dark:bg-[#1a1a1a] peer-focus:px-2 peer-focus:bg-white pointer-events-none absolute top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.9] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                    >Confirm Password
                  </label>
                  <span
                    class="text-red-500"
                    v-for="error in v$.confirmPassword.$errors"
                    :key="error.$uid"
                  >
                    {{ error.$message }}
                  </span>
                </div>

                <!-- Remember me checkbox -->
                <div class="mb-6 flex items-center justify-between">
                  <router-link
                    :to="`/${languageStore.langUrl}/profile/login`"
                    class="text-blue-500 hover:text-blue-700"
                  >
                    already have an account..!</router-link
                  >
                </div>

                <!-- Submit button -->
                <button
                  type="submit"
                  class="inline-block w-full rounded bg-primary px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal dark:text-white shadow-[0_2px_9px_1px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_2px_9px_1px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                  data-te-ripple-init
                  data-te-ripple-color="light"
                >
                  Register
                </button>

                <!-- Divider -->
                <div
                  class="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300"
                >
                  <p class="mx-4 mb-0 text-center font-semibold dark:text-neutral-200">OR</p>
                </div>

                <!-- Social login buttons -->
                <a
                  class="mb-3 flex w-full items-center justify-center rounded bg-primary px-7 pb-2.5 pt-3 text-center text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                  style="background-color: #3b5998"
                  href="#!"
                  role="button"
                  data-te-ripple-init
                  data-te-ripple-color="light"
                >
                  <!-- Facebook -->
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="mr-2 h-3.5 w-3.5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"
                    />
                  </svg>
                  Continue with Facebook
                </a>
                <a
                  class="mb-3 flex w-full items-center justify-center rounded bg-info px-7 pb-2.5 pt-3 text-center text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#54b4d3] transition duration-150 ease-in-out hover:bg-info-600 hover:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)] focus:bg-info-600 focus:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)] focus:outline-none focus:ring-0 active:bg-info-700 active:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(84,180,211,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.2),0_4px_18px_0_rgba(84,180,211,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.2),0_4px_18px_0_rgba(84,180,211,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.2),0_4px_18px_0_rgba(84,180,211,0.1)]"
                  style="background-color: #55acee"
                  href="#!"
                  role="button"
                  data-te-ripple-init
                  data-te-ripple-color="light"
                >
                  <!-- Twitter -->
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="mr-2 h-3.5 w-3.5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"
                    />
                  </svg>
                  Continue with Twitter
                </a>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  </MainLayout>
</template>
