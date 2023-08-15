<script setup>
import { onMounted, ref, watch } from 'vue'
import { useRouter } from 'vue-router'
import { useLanguageStore } from '../stores/store.js'
import MainLayout from './layouts/MainLayout.vue'
import HomeSlider from '../components/parts/HomeSlider.vue'
import MainButton from '../components/parts/MainButton.vue'
import CourseBox from '../components/parts/CourseBox.vue'
import NumbersSection from '../components/sections/NumbersSection.vue'
import BestTeachers from '../components/sections/BestTeachers.vue'
import Calender from 'vue-material-design-icons/Calendar.vue'
import Clock from 'vue-material-design-icons/Clock.vue'
import Location from 'vue-material-design-icons/Map.vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay, Navigation, Pagination, A11y } from 'swiper/modules'

const modules = [Autoplay, Navigation, Pagination, A11y]
const languageStore = useLanguageStore()
const router = useRouter()

// Function to update swiper slides per view based on screen size
let swiperSlidesPerView = ref(3)
const updateSlidesPerView = () => {
  if (window.innerWidth >= 768 && window.innerWidth < 1400) {
    swiperSlidesPerView.value = 3
  } else if (window.innerWidth >= 1400) {
    swiperSlidesPerView.value = 4
  } else {
    swiperSlidesPerView.value = 2
  }
}

// Update swiper slides per view on window resize
onMounted(() => {
  window.addEventListener('resize', updateSlidesPerView)
})
onMounted(() => {
  updateSlidesPerView()
})
import { Input, Ripple, initTE } from 'tw-elements'

initTE({ Input, Ripple })
// This will update the selectedLanguage value based on the URL when the page loads
watch(
  () => router.currentRoute.value.params,
  (params) => {
    if (params.lang === 'ar') {
      languageStore.changeLanguage('ar')
    } else {
      languageStore.changeLanguage('en')
    }
  },
  { immediate: true }
)
</script>

<template>
  <MainLayout>
    <main class="dark:text-white bg-gray-50 dark:bg-transparent">
      <!-- start slider -->
      <swiper
        dir="ltr"
        :modules="modules"
        :slides-per-view="1"
        :space-between="50"
        navigation
        :pagination="{ clickable: true }"
        :autoplay="{
          delay: 7000,
          disableOnInteraction: false
        }"
      >
        <swiper-slide
          ><HomeSlider
            :dir="languageStore.direction"
            image="/images/kemet-S3.jpg"
            text="Best courses you need to learn and upgrade your mind"
        /></swiper-slide>
        <swiper-slide
          ><HomeSlider
            :dir="languageStore.direction"
            image="/images/kemet-S1.jpg"
            text="Rare books, audio books, documentaries, important maps, and music
            can be found at the Agartha Library"
        /></swiper-slide>
        <swiper-slide
          ><HomeSlider
            :dir="languageStore.direction"
            image="/images/S2.jpg"
            text="Rare books, audio books, documentaries, important maps, and music
            can be found at the Agartha Library"
        /></swiper-slide>
        ...
      </swiper>
      <!-- end slider -->

      <!-- start newslater -->

      <div class="container mx-auto my-5 flex justify-between flex-wrap">
        <div class="flex gap-3 mb-5 mx-auto">
          <div>
            <div
              class="box relative md:w-[230px] md:h-[140px] w-auto h-[140px] img rounded-lg overflow-hidden cursor-pointer"
            >
              <img
                src="https://agarthaacademy.b-cdn.net/course_category/None/category.jpeg"
                class="w-full h-full"
                alt=""
              />
              <div
                class="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] text-white hover:text-gray-300 z-10"
              >
                <h3>Egyptology</h3>
                <p>0 courses</p>
              </div>
            </div>
          </div>
          <div>
            <div
              class="box relative md:w-[230px] md:h-[140px] w-auto h-[140px] img rounded-lg overflow-hidden cursor-pointer"
            >
              <img
                src="https://agarthaacademy.b-cdn.net/course_category/%D8%A7%D9%84%D8%B9%D9%84%D9%88%D9%85-%D8%A7%D9%84%D8%A5%D9%86%D8%B3%D8%A7%D9%86%D9%8A%D8%A9/category.jpg"
                class="w-full h-full"
                alt=""
              />
              <div
                class="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] text-white hover:text-gray-300 z-10"
              >
                <h3>Egyptology</h3>
                <p>0 courses</p>
              </div>
            </div>
          </div>
        </div>
        <div
          class="shadow-lg md:w-[500px] text-center rounded-lg overflow-hidden mx-auto px-2 md:px-0 lg:-mt-[177px] z-20"
        >
          <div class="p-10 bg-[#07294d]">
            <h1 class="font-bold text-2xl text-[#ffc600]">GET OUR NEWSLETTER</h1>
            <p class="text-white w-[80%] mx-auto">
              Best courses, important events and library news sent to your inbox.
            </p>
          </div>
          <div class="p-10 shadow-lg shadow-slate-900 dark:border border-black rounded-lg">
            <form class="w-[90%] mx-auto">
              <input
                type="text"
                placeholder="Your name"
                class="block border border-gray-400 w-full p-4 rounded-lg text-gray-500 focus:ring-0 focus:outline-none focus:border mb-3"
              />
              <input
                type="email"
                placeholder="Your Mail"
                class="block border border-gray-400 w-full p-4 rounded-lg text-gray-500 focus:ring-0 focus:outline-none focus:border mb-3"
              />
              <input
                type="text"
                placeholder="Your Phone"
                class="block border border-gray-400 w-full p-4 rounded-lg text-gray-500 focus:ring-0 focus:outline-none focus:border mb-3"
              />
              <MainButton text="Get It Now" class="mt-5" />
            </form>
          </div>
        </div>
      </div>
      <!-- end newslater -->

      <!-- start feature -->
      <div id="feature" class="bg-[#ececec] dark:bg-[#111111] py-[80px]">
        <!-- start featured courses -->
        <!-- title -->
        <div class="lg:mx-40 2xl:mx-60 mx-auto">
          <div class="cursor-pointer mx-2 my-2">
            <h5
              id="title"
              :class="languageStore.direction == 'ltr' ? 'after:left-0' : 'after:right-0'"
              class="font-bold text-sm md:text-lg relative pb-3 mb-3"
            >
              The most important books that have just arrived
            </h5>
            <h2 class="font-bold text-2xl">RECENT E-BOOKS</h2>
          </div>
          <!-- title -->
          <!-- start slider -->
          <swiper
            dir="ltr"
            :modules="modules"
            :slides-per-view="swiperSlidesPerView"
            :space-between="10"
            navigation
            :autoplay="{
              delay: 7000,
              disableOnInteraction: false
            }"
          >
            <swiper-slide>
              <CourseBox
                text="Personal Pyramid"
                image="https://agarthaacademy.b-cdn.net/courses/Personal-pyramid-Nabil_Kamal/course.gif"
                authImage="https://agarthaacademy.b-cdn.net/accounts/Nabil_Kamal/profile.jpg"
                price="50"
                author="Nabil Kamal"
                reviews="0"
            /></swiper-slide>
            <swiper-slide>
              <CourseBox
                text="Personal Pyramid"
                image="https://agarthaacademy.b-cdn.net/courses/Quantum-Healing/course.jpg"
                authImage="https://agarthaacademy.b-cdn.net/accounts/Nabil_Kamal/profile.jpg"
                price="50"
                author="Nabil Kamal"
                reviews="0"
            /></swiper-slide>
            <swiper-slide>
              <CourseBox
                text="Personal Pyramid"
                image="https://agarthaacademy.b-cdn.net/courses/Quantum-jumping/course.webp"
                authImage="https://agarthaacademy.b-cdn.net/accounts/Nabil_Kamal/profile.jpg"
                price="50"
                author="Nabil Kamal"
                reviews="0"
            /></swiper-slide>
            <swiper-slide>
              <CourseBox
                text="Personal Pyramid"
                image="https://agarthaacademy.b-cdn.net/courses/Quantum-Healing/course.jpg"
                authImage="https://agarthaacademy.b-cdn.net/accounts/Nabil_Kamal/profile.jpg"
                price="50"
                author="Nabil Kamal"
                reviews="0"
            /></swiper-slide>
            <swiper-slide>
              <CourseBox
                text="Personal Pyramid"
                image="https://agarthaacademy.b-cdn.net/courses/Personal-pyramid-Nabil_Kamal/course.gif"
                authImage="https://agarthaacademy.b-cdn.net/accounts/Nabil_Kamal/profile.jpg"
                price="50"
                author="Nabil Kamal"
                reviews="0"
            /></swiper-slide>
            <swiper-slide>
              <CourseBox
                text="Personal Pyramid"
                image="https://agarthaacademy.b-cdn.net/courses/Quantum-jumping/course.webp"
                authImage="https://agarthaacademy.b-cdn.net/accounts/Nabil_Kamal/profile.jpg"
                price="50"
                author="Nabil Kamal"
                reviews="0"
            /></swiper-slide>
            ...
          </swiper>
          <!-- end slider -->
        </div>
        <!-- end featured courses -->
        <!-- start numbers section -->
        <NumbersSection />
        <!-- end numbers section -->
        <!-- start best teachers -->
        <BestTeachers />
        <!-- end best teachers -->
      </div>
      <!-- end feature -->
      <!-- start comming events -->
      <div class="relative h-[200px] md:h-[400px] overflow-hidden md:mx-20 mx-5 my-10 rounded-xl">
        <div
          :class="
            languageStore.direction == 'ltr'
              ? 'after:!-left-[90px] md:after:!-left-[200px]'
              : 'md:after:!-right-[200px] after:!-right-[90px]'
          "
          class="img md:hover:after:!w-[70%] hover:after:!w-[110%]"
        >
          <img
            src="https://kemet.agartha.academy/static/images/bg-3.jpg"
            class="w-full h-[200px] md:h-[400px]"
          />
          <div
            class="absolute top-[50%] -translate-y-[50%] z-10 text-white text-xs md:text-base"
            :class="languageStore.direction == 'ltr' ? 'left-10' : 'right-10'"
          >
            <h1 class="text-white text-xl md:text-3xl font-bold mb-5">Upcoming events</h1>
            <div>
              <div class="flex items-center gap-1 mb-2">
                <Calender fillColor="#ffc600" />
                <span>2023/12/19</span>
              </div>
              <p class="hover:text-[#ffc600] cursor-pointer mb-2">Egyptology</p>
              <div class="flex items-center gap-3 mb-2">
                <div class="flex items-center gap-1">
                  <Clock fillColor="#ffc600" />
                  <span>2023/12/19</span>
                </div>
                <div class="flex items-center gap-1">
                  <Location fillColor="#ffc600" />
                  <span>2023/12/19</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- end comming events -->
    </main></MainLayout
  >
</template>

<style scoped>
.img::before {
  content: '';
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: rgb(119, 103, 136);
  opacity: 0.5;
  z-index: 3;
}
.img::after {
  content: '';
  position: absolute;
  width: 0;
  transform: skew(45deg);
  height: 100%;
  top: 0;
  left: -200px;
  background-color: rgb(0, 0, 0);
  opacity: 0.5;
  z-index: 3;
  transition: 0.5s;
}
#title::before {
  content: '';
  position: absolute;
  bottom: 0;
  width: 40px;
  height: 2px;
  background-color: #ffc600;
  transition: 0.5s;
}
#title:hover:before {
  width: 130px;
}
</style>
