<script setup>
import { computed, onMounted, ref } from 'vue'
import axios from 'axios'
import { useLanguageStore } from '../../stores/store.js'
import MainLayout from './../layouts/MainLayout.vue'
import PageBanner from '../../components/parts/PageBanner.vue'
import Earth from 'vue-material-design-icons/Earth.vue'
import plus from 'vue-material-design-icons/Plus.vue'
import ChevronLeft from 'vue-material-design-icons/ChevronLeft.vue'
import Map from 'vue-material-design-icons/Map.vue'
import VLazyImage from 'v-lazy-image'
import CreatePostOverlay from '../../components/parts/CreatePostOverlay.vue'

const languageStore = useLanguageStore()
let showCreatePost = ref(false)

let openSideCatigory = ref(false)
let mapsData = ref([])
let isLoading = ref(true)
const open = ref(false)

const getMaps = async () => {
  await axios
    .get('https://www.kemet.agartha.academy/library/search/maps/')
    .then((res) => {
      mapsData.value = res.data.data // Update the mapsData reactive object with the fetched data
      isLoading.value = false // Data fetching is complete, so set isLoading to false
    })
    .catch((error) => {
      console.error(error) // Handle any potential errors
      isLoading.value = false // Even if there's an error, we need to stop loading the spinner
    })
}

const perPage = 12
let currentPage = ref(1)

const paginatedMaps = computed(() => {
  const start = (currentPage.value - 1) * perPage
  const end = start + perPage
  return mapsData.value.slice(start, end)
})

const totalPages = computed(() => Math.ceil(mapsData.value.length / perPage))

const changePage = (page) => {
  if (page >= 1 && page <= totalPages.value) {
    currentPage.value = page
  }
}
const visiblePages = computed(() => {
  const range = 3 // Adjust this number to control the number of visible page buttons
  const start = Math.max(1, currentPage.value - range)
  const end = Math.min(totalPages.value, currentPage.value + range)

  const pages = []
  for (let i = start; i <= end; i++) {
    pages.push(i)
  }
  return pages
})
onMounted(() => getMaps())
</script>

<template>
  <MainLayout>
    <main class="dark:text-white bg-gray-50 dark:bg-transparent">
      <PageBanner
        image="/images/slider-image-3.jpg"
        :name="languageStore.lang.library.maps['maps']"
        :parentName="languageStore.lang.library['library']"
        parentPath="library"
      />

      <div class="container mx-auto my-10 z-20 py-20">
        <div
          @click="showCreatePost = true"
          class="flex items-center gap-1 py-1 px-1 rounded-full bg-[#a6e076] dark:bg-[#07294d] w-fit my-4 cursor-pointer md:mx-0 mx-auto"
        >
          <plus
            :size="27"
            class="bg-[#ffc600] dark:bg-[#121e2b] p-1 rounded-full hover:bg-[#07294d] hover:text-white"
          />
          <button class="text-xl pr-3">create new Map</button>
        </div>
        <div class="flex gap-3 relative">
          <div
            id="category"
            :class="
              openSideCatigory
                ? 'absolute w-[300px] h-[60%]  top-0 rounded-xl py-3 md:static md:h-auto'
                : 'hidden md:block'
            "
            class="md:block w-1/4 border :bg-[#131212] dark:text-white rounded-xl py-4 z-20"
          >
            <div
              :class="open ? 'hidden -translate-x-96' : 'block translate-x-0'"
              id="container-nav"
            >
              <div
                class="main-sidenav-menu flex justify-between mb-5 border-b border-gray-100 p-2 cursor-pointer"
              >
                <span>Maps </span>
                <Map />
              </div>
              <div class="subsidenav-content">
                <div
                  class="sidenav-row-map primary flex justify-between items-center"
                  @click="open = true"
                >
                  <div class="px-3">Contries</div>
                  <Earth class="px-3" />
                </div>
                <div class="sidenav-row-map primary flex justify-between items-center" id="Asia">
                  <div class="px-3">Contenent</div>
                  <Earth class="px-3" />
                </div>
              </div>
            </div>
            <div
              :class="open ? 'block translate-x-0' : 'hidden translate-x-96'"
              class="subcontainer-sidenav"
              id="subcontainer-nav"
            >
              <div
                class="main-sidenav-menu flex justify-between mb-5 border-b border-gray-100 p-2 cursor-pointer"
                @click="open = false"
              >
                <span>MAIN MENU </span>
                <ChevronLeft />
              </div>
              <div class="subsidenav-content">
                <div class="sidenav-row-map primary flex justify-between items-center">
                  <div class="px-3">world</div>
                  <Earth class="px-3" />
                </div>
                <div class="sidenav-row-map primary flex justify-between items-center" id="Asia">
                  <div class="px-3">Asia</div>
                  <Earth class="px-3" />
                </div>
                <div class="sidenav-row-map primary flex justify-between items-center">
                  <div class="px-3">Africa</div>
                  <Earth class="px-3" />
                </div>
                <div class="sidenav-row-map primary flex justify-between items-center">
                  <div class="px-3">Europe</div>
                  <Earth class="px-3" />
                </div>
                <div class="sidenav-row-map primary flex justify-between items-center">
                  <div class="px-3">North America</div>
                  <Earth class="px-3" />
                </div>
                <div class="sidenav-row-map primary flex justify-between items-center">
                  <div class="px-3">South America</div>
                  <Earth class="px-3" />
                </div>
                <div class="sidenav-row-map primary flex justify-between items-center">
                  <div class="px-3">Australia/Oceania</div>
                  <Earth class="px-3" />
                </div>
                <div class="sidenav-row-map primary flex justify-between items-center">
                  <div class="px-3">Antarctica</div>
                  <Earth class="px-3" />
                </div>
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
            <div
              v-if="openSideCatigory"
              id="overlay"
              class="fixed top-0 right-0 w-full h-full bg-black opacity-60 md:hidden"
            ></div>
            <div class="flex w-full items-center gap-4 justify-center flex-wrap rounded-xl py-5">
              <div v-if="isLoading" class="flex items-center justify-center">
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
              </div>

              <div
                v-else
                v-for="(map, index) in paginatedMaps"
                :key="index"
                class="bg-white rounded-lg pb-10 w-[85%] sm:w-[48%] md:w-[30%] dark:bg-[#0a0a0a] p-2"
              >
                <v-lazy-image
                  class="w-full mb-4 h-[200px]"
                  :src="JSON.parse(map.data).images"
                  src-placeholder="/images/logo.png"
                />
                <div class="justify-around">
                  <div class="mb-2">
                    <p class="font-bold w-3/4 overflow-ellipsis whitespace-nowrap overflow-hidden">
                      {{ map.name }}
                    </p>
                    <span>${{ map.price }}</span>
                  </div>
                  <button class="py-1 px-2 bg-[#fae555] rounded-lg hover:bg-[#f5df4f] font-bold">
                    view
                  </button>
                </div>
              </div>
            </div>
            <!-- paggination -->
            <div class="flex items-center justify-center mt-5 mb-4">
              <button
                class="bg-blue-500 text-white px-4 py-2 rounded-lg mx-2 disabled:opacity-40"
                :disabled="currentPage === 1"
                @click="changePage(currentPage - 1)"
              >
                Previous
              </button>

              <div class="items-center hidden md:flex">
                <span class="mx-2">Page {{ currentPage }} of {{ totalPages }}</span>
                <div class="flex space-x-2">
                  <button
                    v-for="pageNumber in visiblePages"
                    :key="pageNumber"
                    class="px-4 mx-1 py-2 rounded-lg"
                    :class="{
                      'bg-blue-500 text-white': pageNumber === currentPage,
                      'bg-gray-300': pageNumber !== currentPage
                    }"
                    @click="changePage(pageNumber)"
                  >
                    {{ pageNumber }}
                  </button>
                </div>
              </div>

              <button
                class="bg-blue-500 text-white px-4 py-2 rounded-lg ml-2 disabled:opacity-40"
                :disabled="currentPage === totalPages"
                @click="changePage(currentPage + 1)"
              >
                Next
              </button>
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
