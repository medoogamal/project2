<script setup>
import MainLayout from '../layouts/MainLayout.vue'
import { useLanguageStore } from '../../stores/store.js'
import HomeSlider from '../../components/parts/HomeSlider.vue'
import OurTeachers from '../../components/sections/OutTeachers.vue'
</script>
<template>
  <MainLayout>
    <main class="dark:text-white bg-gray-50 dark:bg-transparent">
      <HomeSlider
        class="md:!h-[400px]"
        :dir="useLanguageStore.direction"
        image="https://kemet.agartha.academy/static/images/page-banner-3.jpg"
        text="Join Agartha, and teach with us"
        subText="Become a teacher and carve the way for generations to a prosperous future
            Let the map of the universe expand with your achievements
            "
      />

      <div class="text-center">
        <h1 class="md:text-3xl text-sm font-extrabold my-10">So many reasons to join</h1>
        <div class="container mx-auto grid lg:grid-cols-6 md:grid-cols-3 grid-cols-2">
          <div
            class="feature-card flex flex-col gap-5 dark:before:bg-black before:bg-[#eee] relative w-[170px] h-[225px] border shadow-xl p-2 py-4 rounded-lg z-10 m-2"
          >
            <img
              class="w-[80px] mx-auto mb-5"
              src="/Teacher Feature/feature-1.png"
              alt="investment"
            />
            <p class="text-xs">Agartha Studio:Your Creative Teaching Space.</p>
          </div>
          <div
            class="feature-card flex flex-col gap-5 dark:before:bg-black before:bg-[#eee] relative w-[170px] h-[225px] border shadow-xl p-2 py-4 rounded-lg z-10 m-2"
          >
            <img
              class="w-[80px] mx-auto mb-5"
              src="/Teacher Feature/feature-2.png"
              alt="investment"
            />
            <p class="text-xs">
              A E-store and E-library to display and sell your educational products.
            </p>
          </div>
          <div
            class="feature-card flex flex-col gap-5 dark:before:bg-black before:bg-[#eee] relative w-[170px] h-[225px] border shadow-xl p-2 py-4 rounded-lg z-10 m-2"
          >
            <img
              class="w-[80px] mx-auto mb-5"
              src="/Teacher Feature/feature-3.png"
              alt="investment"
            />
            <p class="text-xs">
              Experts and consulting:start as an expert in the consulting department.
            </p>
          </div>
          <div
            class="feature-card flex flex-col gap-5 dark:before:bg-black before:bg-[#eee] relative w-[170px] h-[225px] border shadow-xl p-2 py-4 rounded-lg z-10 m-2"
          >
            <img
              class="w-[75px] mx-auto mb-5"
              src="/Teacher Feature/feature-4.png"
              alt="investment"
            />
            <p class="text-xs">
              Interactive events and discussions that bring you closer to students and increase
              their interaction
            </p>
          </div>
          <div
            class="feature-card flex flex-col gap-5 dark:before:bg-black before:bg-[#eee] relative w-[170px] h-[225px] border shadow-xl p-2 py-4 rounded-lg z-10 m-2"
          >
            <img
              class="w-[105px] mt-1 mx-auto mb-5"
              src="/Teacher Feature/feature-5.png"
              alt="investment"
            />
            <p class="text-xs">
              An opportunity to join the annual Agartha camps in the Arab countries and network with
              other experts.
            </p>
          </div>
          <div
            class="feature-card flex flex-col gap-5 dark:before:bg-black before:bg-[#eee] relative w-[170px] h-[225px] border shadow-xl p-2 py-4 rounded-lg z-10 m-2"
          >
            <img
              class="w-[75px] mx-auto mb-2"
              src="/Teacher Feature/feature-6.png"
              alt="investment"
            />
            <p class="text-xs">Marketing campaigns and promotional programs (optional)</p>
          </div>
          <div
            class="feature-card flex flex-col gap-5 dark:before:bg-black before:bg-[#eee] relative w-[170px] h-[225px] border shadow-xl p-2 py-4 rounded-lg z-10 m-2"
          >
            <img
              class="w-[80px] mx-auto mb-5"
              src="/Teacher Feature/feature-7.png"
              alt="investment"
            />
            <p class="text-xs">percentage that increases with your productivity and popularity.</p>
          </div>
          <div
            class="feature-card flex flex-col gap-5 dark:before:bg-black before:bg-[#eee] relative w-[170px] h-[225px] border shadow-xl p-2 py-4 rounded-lg z-10 m-2"
          >
            <img
              class="w-[95px] mx-auto mb-5"
              src="/Teacher Feature/feature-8.png"
              alt="investment"
            />
            <p class="text-xs">
              Additional income from tickets for online conferences and seminars targeting your
              interested audience.
            </p>
          </div>
          <div
            class="feature-card flex flex-col gap-5 dark:before:bg-black before:bg-[#eee] relative w-[170px] h-[225px] border shadow-xl p-2 py-4 rounded-lg z-10 m-2"
          >
            <img
              class="w-[90px] mx-auto mb-5"
              src="/Teacher Feature/feature-9.png"
              alt="investment"
            />
            <p class="text-xs -mt-3">
              Protect and secure your course content from unwanted downloading, theft or spread.
            </p>
          </div>
          <div
            class="feature-card flex flex-col gap-5 dark:before:bg-black before:bg-[#eee] relative w-[170px] h-[225px] border shadow-xl p-2 py-4 rounded-lg z-10 m-2"
          >
            <img
              class="w-[75px] mx-auto mb-5"
              src="/Teacher Feature/feature-10.png"
              alt="investment"
            />
            <p class="text-xs">
              Unlimited storage of all your lectures, resources and files for free.
            </p>
          </div>
          <div
            class="feature-card flex flex-col gap-5 dark:before:bg-black before:bg-[#eee] relative w-[170px] h-[225px] border shadow-xl p-2 py-4 rounded-lg z-10 m-2"
          >
            <img
              class="w-[80px] mx-auto mb-5"
              src="/Teacher Feature/feature-11.png"
              alt="investment"
            />
            <p class="text-xs">
              freely set the prices of your products and effectively compete in the market.
            </p>
          </div>
          <div
            class="feature-card flex flex-col gap-5 dark:before:bg-black before:bg-[#eee] relative w-[170px] h-[2225x] border shadow-xl p-2 py-4 rounded-lg z-10 m-2"
          >
            <img
              class="w-[85px] mt-1 mx-auto mb-[23px]"
              src="/Teacher Feature/feature-12.png"
              alt="investment"
            />
            <p class="text-xs">
              Multiple options for teaching methods: online, offline, or on-site.
            </p>
          </div>
        </div>
      </div>

      <!-- start our teachers -->
      <OurTeachers />
      <!-- end our teachers -->
    </main>
  </MainLayout>
</template>
<style scoped>
.feature-card:after {
  content: '';
  /* border-right: 1px solid #b6b5b5; */
  border-right: 2px solid #bfbfe1;
  border-left: 2px solid #bfbfe1;
  height: 0;
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 100%;
  background-color: transparent;
  z-index: -3;
  transition: 0.5s;
  border-radius: 8px;
}
.feature-card:hover:after {
  top: 50%;
  transform: translateY(-50%);
  height: 100%;
}
.feature-card::before {
  content: '';
  height: 100%;
  position: absolute;
  right: 0;
  width: 0;
  top: 0;
  z-index: -3;
  transition: 0.5s;
  transition-delay: 0.25s;
  border-radius: 8px;
}

.feature-card:hover::before {
  width: 100%;
}

@media (max-width: 500px) {
  .feature-card::before {
    transition-delay: 0s;
  }
}
</style>
