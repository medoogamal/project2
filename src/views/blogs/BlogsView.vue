<script setup>
import MainLayout from '../layouts/MainLayout.vue'
import BlogSlider from '../../components/parts/BlogSlider.vue'
import VLazyImage from 'v-lazy-image'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay, Navigation, Pagination, A11y } from 'swiper/modules'
import { useLanguageStore } from '../../stores/store.js'
import Plus from 'vue-material-design-icons/Plus.vue'
import { ref } from 'vue'
import ChevronDown from 'vue-material-design-icons/ChevronDown.vue'
import Calendar from 'vue-material-design-icons/Calendar.vue'
import Eye from 'vue-material-design-icons/Eye.vue'
import Comments from 'vue-material-design-icons/Comment.vue'
import Blogs from 'vue-material-design-icons/Book.vue'
import CreatePostOverlay from '../../components/parts/CreatePostOverlay.vue'

const modules = [Autoplay, Navigation, Pagination, A11y]
const languageStore = useLanguageStore()
const showCreatePost = ref(false)
const openSideCatigory = ref(false)
const openRecentPosts = ref(false)
const openCatigorys = ref(false)
const openTopWriters = ref(false)
</script>
<template>
  <MainLayout>
    <main>
      <!-- start slider -->
      <swiper
        dir="ltr"
        :modules="modules"
        :slides-per-view="1"
        :space-between="50"
        navigation
        :pagination="{ clickable: true }"
        :autoplay="{
          delay: 9000,
          disableOnInteraction: false
        }"
      >
        <swiper-slide
          ><BlogSlider
            :dir="languageStore.direction"
            image="https://agarthaacademy.b-cdn.net/blogs/Batoul/Ouija/Ouija-1.jpg"
            text="OUIJA"
        /></swiper-slide>
        <swiper-slide
          ><BlogSlider
            :dir="languageStore.direction"
            image="https://agarthaacademy.b-cdn.net/blogs/Nabil_Kamal/brain-of-m/brain-of-m-1.jpg"
            text="BRAIN OF MAN AND WOMAN"
        /></swiper-slide>
        <swiper-slide
          ><BlogSlider
            :dir="languageStore.direction"
            image="https://agarthaacademy.b-cdn.net/blogs/Batoul/How-does-m/How-does-m.jpg"
            text="How does music use 528 Hz to upgrade your DNA?"
        /></swiper-slide>
        ...
      </swiper>
      <!-- end slider -->

      <div class="container mx-auto my-10 z-20 py-20">
        <div
          @click="showCreatePost = true"
          class="flex items-center gap-1 py-1 px-1 rounded-full bg-[#a6e076] dark:bg-[#07294d] w-fit my-4 cursor-pointer md:mx-0 mx-auto"
        >
          <Plus
            :size="27"
            class="bg-[#ffc600] dark:bg-[#121e2b] p-1 rounded-full hover:bg-[#07294d] hover:text-white"
          />
          <button class="text-xl pr-3">create new Article</button>
        </div>
        <div class="flex gap-3 relative">
          <div
            id="category"
            :class="
              openSideCatigory
                ? 'absolute w-[300px] h-[60%]  top-0 rounded-xl py-3 md:static md:h-auto'
                : 'hidden md:block'
            "
            class="md:block w-1/4 border :bg-[#131212] dark:text-white rounded-xl py-4 z-20 overflow-auto"
          >
            <div id="container-nav">
              <div
                class="main-sidenav-menu flex justify-between mb-5 border-b border-gray-100 p-2 cursor-pointer"
              >
                <span>Blogs </span>
                <Blogs />
              </div>
              <div class="subsidenav-content overflow-auto">
                <div
                  class="sidenav-row-map primary flex justify-between items-center"
                  @click="openRecentPosts = !openRecentPosts"
                >
                  <div class="px-3">Recent Posts</div>
                  <ChevronDown class="px-3" :class="openRecentPosts ? 'rotate-180' : 'rotate-0'" />
                </div>
                <ul class="p-5 pt-0" v-if="openRecentPosts">
                  <li class="p-1 pl-0 cursor-pointer hover:text-green-500">
                    Brain of man and woman
                  </li>
                  <li class="p-1 pl-0 cursor-pointer hover:text-green-500">DNa</li>
                </ul>
                <div
                  @click="openCatigorys = !openCatigorys"
                  class="sidenav-row-map primary flex justify-between items-center"
                  id="Asia"
                >
                  <div class="px-3">Categories</div>
                  <ChevronDown class="px-3" :class="openCatigorys ? 'rotate-180' : 'rotate-0'" />
                </div>
                <ul class="p-5 pt-0" v-if="openCatigorys">
                  <li class="p-1 pl-0 cursor-pointer hover:text-green-500">Healing Music</li>
                  <li class="p-1 pl-0 cursor-pointer hover:text-green-500">Acrylic Drawing</li>
                  <li class="p-1 pl-0 cursor-pointer hover:text-green-500">Mind</li>
                  <li class="p-1 pl-0 cursor-pointer hover:text-green-500">Digital Drawing</li>
                </ul>
                <div
                  @click="openTopWriters = !openTopWriters"
                  class="sidenav-row-map primary flex justify-between items-center"
                  id="Asia"
                >
                  <div class="px-3">Top Writers</div>
                  <ChevronDown class="px-3" :class="openTopWriters ? 'rotate-180' : 'rotate-0'" />
                </div>
                <ul class="p-5 pt-0" v-if="openTopWriters">
                  <li class="p-1 pl-0 cursor-pointer hover:text-green-500">Healing Music</li>
                  <li class="p-1 pl-0 cursor-pointer hover:text-green-500">Acrylic Drawing</li>
                  <li class="p-1 pl-0 cursor-pointer hover:text-green-500">Mind</li>
                  <li class="p-1 pl-0 cursor-pointer hover:text-green-500">Digital Drawing</li>
                </ul>
              </div>
            </div>
          </div>
          <button
            v-if="openSideCatigory"
            :class="languageStore.direction == 'rtl' ? 'right-[83%]' : 'left-[83%] '"
            class="bg-red-400 rounded-full p-2 absolute cursor-pointer hover:bg-red-500 top-0 md:hidden z-20"
            @click="openSideCatigory = false"
          >
            Close
          </button>
          <div
            id="maps"
            class="md:w-[72%] w-full bg-gray-100 dark:bg-[#131212] dark:text-white p-2 rounded-xl"
          >
            <div class="flex justify-end">
              <button
                v-if="!openSideCatigory"
                class="cursor-pointer md:hidden block bg-blue-400 rounded-full p-2 hover:bg-blue-500"
                @click="openSideCatigory = true"
              >
                Filter
              </button>
            </div>

            <div class="flex w-full items-center gap-4 justify-center flex-wrap rounded-xl py-5">
              <!-- <div v-if="isLoading" class="flex items-center justify-center">
                <svg
                  aria-hidden="true"
                  class="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                  viewBox="0 0 100 101"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                    fill="currentColor"
                  />
                  <path
                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                    fill="currentFill"
                  />
                </svg>
              </div> -->

              <div
                class="bg-white rounded-lg pb-10 w-[85%] sm:w-[48%] md:w-[30%] dark:bg-[#0a0a0a] p-2"
              >
                <div class="relative h-[200px]">
                  <v-lazy-image
                    class="w-full mb-4 h-full"
                    src="https://agarthaacademy.b-cdn.net/blogs/Nabil_Kamal/the-Akashic-records/the-Akashic-records-1.jpg"
                    src-placeholder="/images/logo.png"
                  />

                  <div
                    id="text"
                    :class="
                      languageStore.direction == 'ltr' ? 'left-2 md:left-2' : 'right-2 md:right-2'
                    "
                    class="absolute top-[15%] cursor-pointer z-10"
                  >
                    <h1 class="text-white md:text-xl text-sm font-extrabold hover:text-red-300">
                      OUIJA
                    </h1>
                    <p class="text-[#eedc82] text-xs font-extrabold mb-3">By Batoul Abdulmalek</p>

                    <div id="box" class="text-white flex gap-2 items-center mt-auto">
                      <div class="flex gap-1 items-center">
                        <Calendar :size="15" />
                        <span class="text-xs">Aug 16, 2023</span>
                      </div>
                      <div class="flex gap-1 items-center">
                        <comments :size="15" />
                        <span class="text-xs">comments</span>
                      </div>
                      <div class="flex gap-1 items-center">
                        <Eye :size="15" />
                        <span class="text-xs">1</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="justify-around">
                  <div class="mb-2">
                    <p class="font-bold w-3/4 overflow-ellipsis whitespace-nowrap overflow-hidden">
                      Ouija It is a means of communication between dimensions Unfortunately, it is
                      among the techni…
                    </p>
                  </div>
                  <button
                    class="py-1 mt-5 px-2 bg-[#fae555] rounded-lg hover:bg-[#f5df4f] font-bold"
                  >
                    view
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <CreatePostOverlay v-if="showCreatePost" @close="showCreatePost = false" />
    </main>
  </MainLayout>
</template>
<style scoped>
.sidenav-row-map {
  padding: 10px 0;
  cursor: pointer;
  position: relative;
}
.sidenav-row-map::before {
  content: '';
  position: absolute;
  width: 0;
  height: 100%;
  background-color: #dacccc;
  z-index: -1;
  transition: 0.5s;
}
.sidenav-row-map:hover:before {
  width: 100%;
}
</style>
