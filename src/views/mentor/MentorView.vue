<script setup>
import PageBanner from '../../components/parts/PageBanner.vue'
import MainLayout from '../layouts/MainLayout.vue'
import { useLanguageStore } from '../../stores/store.js'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay, Navigation, Pagination, A11y } from 'swiper/modules'

const modules = [Autoplay, Navigation, Pagination, A11y]
const languageStore = useLanguageStore()
</script>
<template>
  <MainLayout>
    <main class="dark:text-white bg-gray-50 dark:bg-transparent">
      <PageBanner
        image="https://kemet.agartha.academy/static/images/consultations/header.jpg"
        name="Mentor"
        :parentName="languageStore.lang['home']"
        parentPath=""
      />
      <div class="container mx-auto flex md:flex-row flex-col my-20 gap-3">
        <img
          src="https://kemet.agartha.academy/static/images/consultations/feature2.png"
          class="md:w-[35%] w-full md:mb-0 mb-5"
          alt=""
        />
        <div>
          <h1 class="text-3xl mb-5 font-bold">Teachers available for Mentor</h1>
          <p class="text-sm">
            There are times when we feel that it is the end and then discover that it is the
            beginning, and there are doors that we feel closed and then discover that they are the
            real entrance.
          </p>
          <div>
            <!-- start slider -->
            <swiper
              dir="ltr"
              class="md:w-[580px] mt-10"
              :modules="modules"
              :slides-per-view="3"
              :space-between="50"
              :pagination="{ clickable: true }"
              :autoplay="{
                delay: 7000,
                disableOnInteraction: false
              }"
            >
              <swiper-slide
                ><div class="text-center w-fit cursor-pointer">
                  <img
                    src="https://agarthaacademy.b-cdn.net/accounts/batoul/profile.png"
                    class="rounded-full mb-5 md:w-[110px] w-[90px] md:h-[110px] h-[90px]"
                    alt=""
                  />
                  <h2 class="text-lg font-semibold">Ahmed</h2>
                </div></swiper-slide
              >
              <swiper-slide
                ><div class="text-center w-fit cursor-pointer">
                  <img
                    src="https://agarthaacademy.b-cdn.net/accounts/Ahmed_abdallah/profile.jpg"
                    class="rounded-full mb-5 md:w-[110px] w-[90px] md:h-[110px] h-[90px]"
                    alt=""
                  />
                  <h2 class="text-lg font-semibold">Ahmed</h2>
                </div></swiper-slide
              >
              <swiper-slide
                ><div class="text-center w-fit cursor-pointer">
                  <img
                    src="https://agarthaacademy.b-cdn.net/accounts/Ana/profile.jpg"
                    class="rounded-full mb-5 md:w-[110px] w-[90px] md:h-[110px] h-[90px]"
                    alt=""
                  />
                  <h2 class="text-lg font-semibold">Ahmed</h2>
                </div></swiper-slide
              >
              <swiper-slide
                ><div class="text-center w-fit cursor-pointer">
                  <img
                    src="https://agarthaacademy.b-cdn.net/accounts/ms.ruba/profile.jpg"
                    class="rounded-full mb-5 md:w-[110px] w-[90px] md:h-[110px] h-[90px]"
                    alt=""
                  />
                  <h2 class="text-lg font-semibold">Ahmed</h2>
                </div></swiper-slide
              >
              <swiper-slide
                ><div class="text-center w-fit cursor-pointer">
                  <img
                    src="https://agarthaacademy.b-cdn.net/accounts/Nabil_Kamal/profile.jpg"
                    class="rounded-full mb-5 md:w-[110px] w-[90px] md:h-[110px] h-[90px]"
                    alt=""
                  />
                  <h2 class="text-lg font-semibold">Ahmed</h2>
                </div></swiper-slide
              >
              ...
            </swiper>
            <!-- end slider -->
          </div>
        </div>
      </div>
    </main>
  </MainLayout>
</template>
<style scoped></style>
