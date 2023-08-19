<script setup>
import MainLayout from '../layouts/MainLayout.vue'
import VLazyImage from 'v-lazy-image'
</script>
<template>
  <MainLayout>
    <main>
      <!-- component -->
      <div class="bg-gray-100 dark:bg-[#1a1a1a] flex flex-wrap items-center justify-center">
        <div class="mb-20 relative md:block hidden">
          <!-- src-placeholder="/images/pricing-bg-2.png" -->
          <v-lazy-image src="/images/pricing-bg-2.png" class="w-full h-full" alt="" />
          <div
            class="absolute top-[50%] -translate-y-[50%] text-center w-[65%] left-[50%] -translate-x-[50%]"
          >
            <h1 class="font-bold md:text-xl mb-2">Start your knowledge journey now.</h1>
            <p class="text-xs">
              You have arrived at Agartha, a subscription will give you the latest and best
              innovations of global and Arab minds in the humanities and spiritual sciences through
              exclusive articles on Agartha.
            </p>
            <p class="text-xs">
              Additionally, if you are an Agartha student, you can extend access to your courses by
              subscribing.
            </p>
          </div>
        </div>
        <div class="mb-20 relative md:hidden block">
          <!-- src-placeholder="/images/pricing-bg-2.png" -->
          <v-lazy-image src="/images/pricing-bg-mob.jpg" class="w-full h-full" alt="" />
          <div
            class="absolute top-[50%] -translate-y-[50%] text-center w-[65%] left-[50%] -translate-x-[50%]"
          >
            <h1 class="font-bold md:text-xl mb-2">Start your knowledge journey now.</h1>
            <p class="text-sm">
              You have arrived at Agartha, a subscription will give you the latest and best
              innovations of global and Arab minds in the humanities and spiritual sciences through
              exclusive articles on Agartha.
            </p>
            <p class="text-sm">
              Additionally, if you are an Agartha student, you can extend access to your courses by
              subscribing.
            </p>
          </div>
        </div>
        <div
          class="mb-10 flex flex-col sm:flex-col lg:flex-row xl:flex-row md:flex-row justify-center items center container"
        >
          <div
            class="py-12 sm:py-12 md:py-6 lg:py-6 xl:py-6 px-8 w-full md:max-w-min sm:w-full bg-white dark:bg-[#0f0f0f] z-10"
          >
            <h1 class="text-gray-500 font-semibold text-xl">Basic</h1>
            <div class="text-center py-4 px-7">
              <h1 class="text-gray-700 text-4xl font-black">$199.00</h1>
              <p class="text-gray-500 mt-2">Monthely</p>
            </div>
            <div class="h-px bg-gray-200"></div>
            <div class="text-center mt-3">
              <p class="text-sm text-gray-400">
                If you are an Agarthian student The course will be extended for an additional 3
                Months. (The subscription period is added to the access period of the course)
              </p>
            </div>
            <button
              class="w-full mt-6 mb-3 py-2 text-white font-semibold bg-[#07294d] hover:shadow-xl duration-200 hover:bg-gray-800"
            >
              Buy Now
            </button>
          </div>
          <div
            class="py-12 sm:py-12 md:py-6 lg:py-6 xl:py-6 px-8 w-full md:max-w-min sm:w-full bg-[#07294d] transform scale-1 sm:scale-1 md:scale-105 lg:scale-105 xl:scale-105 z-20 shadow-none sm:shadow-none md:shadow-xl lg:shadow-xl xl:shadow-xl"
          >
            <h1 class="text-purple-200 font-semibold text-xl">Pro</h1>
            <div class="text-center py-4 px-7">
              <h1 class="text-white text-4xl font-black">$399.00</h1>
              <p class="text-white text-opacity-50 mt-2">Monthely</p>
            </div>
            <div class="h-px bg-purple-400"></div>
            <div class="text-center mt-3">
              <p class="text-sm text-white text-opacity-80">
                If you are an Agarthian student The course will be extended for an additional 3
                Months. (The subscription period is added to the access period of the course)
              </p>
            </div>
            <button
              class="w-full mt-6 mb-3 py-2 text-white font-semibold bg-[#ffc600] hover:shadow-xl duration-200 hover:bg-purple-800"
            >
              Buy Now
            </button>
          </div>
          <div
            class="py-12 sm:py-12 md:py-6 lg:py-6 xl:py-6 px-8 w-full md:max-w-min sm:w-full bg-white dark:bg-[#0f0f0f] z-10"
          >
            <h1 class="text-gray-500 font-semibold text-xl">Enterprise</h1>
            <div class="text-center py-4 px-7">
              <h1 class="text-gray-700 text-4xl font-black">$899.00</h1>
              <p class="text-gray-500 mt-2">Monthely</p>
            </div>
            <div class="h-px bg-gray-200"></div>
            <div class="text-center mt-3">
              <p class="text-sm text-gray-400">
                If you are an Agarthian student The course will be extended for an additional 3
                Months. (The subscription period is added to the access period of the course)
              </p>
            </div>
            <button
              class="w-full mt-6 mb-3 py-2 text-white font-semibold bg-[#07294d] hover:shadow-xl duration-200 hover:bg-gray-800"
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </main>
  </MainLayout>
</template>
