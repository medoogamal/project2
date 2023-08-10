<script setup>
import BookCard from '../../../components/parts/BookCard.vue'
import MainLayout from '../../layouts/MainLayout.vue'
import BookCardList from '../../../components/parts/BookCardList.vue'
import ViewList from 'vue-material-design-icons/ViewList.vue'
import ViewGrid from 'vue-material-design-icons/ViewGrid.vue'
import Magnify from 'vue-material-design-icons/Magnify.vue'
import { ref } from 'vue'
import PageBanner from '../../../components/parts/PageBanner.vue'
import { useLanguageStore } from '../../../stores/store.js'

const languageStore = useLanguageStore()

let isGrid = ref(true)
let isList = ref(false)

const Grid = () => {
  isGrid.value = true
  isList.value = false
}
const List = () => {
  isGrid.value = false
  isList.value = true
}
</script>
<template>
  <MainLayout>
    <main>
      <PageBanner
        image="https://kemet.agartha.academy/static/images/page-banner-7.jpg"
        name="E-Book"
        :parentName="languageStore.lang.library['library']"
        parentPath="library"
      />
      <div
        class="mx-4 my-20 bg-[#edf0f2] border dark:bg-[#131212] border-gray-200 dark:border-[#0e0d0d] rounded-lg"
      >
        <div class="w-full rounded-t-lg bg-white dark:bg-[#0e0d0d] py-3 px-4">
          <div class="flex items-center justify-between h-full">
            <div id="sortBy" class="flex gap-2 items-center">
              <ViewGrid
                @click="Grid"
                :class="isGrid ? 'text-[#ffc600]' : 'text-black dark:text-gray-100'"
                :size="20"
                class="cursor-pointer hover:text-[#ffc600]"
              />
              <ViewList
                @click="List"
                :class="isList ? 'text-[#ffc600]' : 'text-black dark:text-gray-100'"
                class="cursor-pointer hover:text-[#ffc600]"
              />
            </div>

            <div class="flex items-center md:w-[30%] w-[40%]">
              <div class="flex items-center w-full bg-gray-100 dark:bg-[#000000] rounded-lg">
                <Magnify class="pl-4" fillColor="#8e8e8e" :size="27" />
                <input
                  type="text"
                  placeholder="Search"
                  class="bg-transparent w-full border-0 ring-0 focus:ring-0 focus:outline-none pl-3"
                />
              </div>
            </div>
          </div>
        </div>
        <div v-if="isGrid" id="boxesGrid" class="p-4">
          <div
            class="grid md:gap-4 xl:grid-cols-4 2xl:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 grid-col-1 gap-2 relative"
          >
            <BookCard
              text="معجزة الصباح"
              image="https://agarthaacademy.b-cdn.net/library-e-book/nabil/%D9%85%D8%B9%D8%AC%D8%B2%D8%A9-%D8%A7%D9%84%D8%B5%D8%A8%D8%A7%D8%AD/e_book.JPG"
              price="Free"
              author="Nabil Kamal"
              reviews="0"
            />
            <BookCard
              text="فصوص الحكم"
              image="https://agarthaacademy.b-cdn.net/library-e-book/nabil/%D9%81%D8%B5%D9%88%D8%B5-%D8%A7%D9%84%D8%AD%D9%83%D9%85/e_book.JPG"
              price="Free"
              author="Nabil Kamal"
              reviews="0"
            />
            <BookCard
              text="معجزة الصباح"
              image="https://agarthaacademy.b-cdn.net/library-e-book/nabil/%D9%85%D8%B9%D8%AC%D8%B2%D8%A9-%D8%A7%D9%84%D8%B5%D8%A8%D8%A7%D8%AD/e_book.JPG"
              price="Free"
              author="Nabil Kamal"
              reviews="0"
            />
            <BookCard
              text="فصوص الحكم"
              image="https://agarthaacademy.b-cdn.net/library-e-book/nabil/%D9%81%D8%B5%D9%88%D8%B5-%D8%A7%D9%84%D8%AD%D9%83%D9%85/e_book.JPG"
              price="Free"
              author="Nabil Kamal"
              reviews="0"
            />
            <BookCard
              text="معجزة الصباح"
              image="https://agarthaacademy.b-cdn.net/library-e-book/nabil/%D9%85%D8%B9%D8%AC%D8%B2%D8%A9-%D8%A7%D9%84%D8%B5%D8%A8%D8%A7%D8%AD/e_book.JPG"
              authImage="https://agarthaacademy.b-cdn.net/accounts/Nabil_Kamal/profile.jpg"
              price="Free"
              author="Nabil Kamal"
              reviews="0"
            />
          </div>
        </div>
        <div v-if="isList" id="boxesList" class="p-4 bg-[#edf0f2] dark:bg-[#131212] rounded-lg">
          <div class="grid md:gap-4 2xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-2 relative">
            <BookCardList
              text="معجزة الصباح"
              image="https://agarthaacademy.b-cdn.net/library-e-book/nabil/%D9%85%D8%B9%D8%AC%D8%B2%D8%A9-%D8%A7%D9%84%D8%B5%D8%A8%D8%A7%D8%AD/e_book.JPG"
            />
            <BookCardList
              text="فصوص الحكم"
              image="https://agarthaacademy.b-cdn.net/library-e-book/nabil/%D9%81%D8%B5%D9%88%D8%B5-%D8%A7%D9%84%D8%AD%D9%83%D9%85/e_book.JPG"
            />
            <BookCardList
              text="معجزة الصباح"
              image="https://agarthaacademy.b-cdn.net/library-e-book/nabil/%D9%85%D8%B9%D8%AC%D8%B2%D8%A9-%D8%A7%D9%84%D8%B5%D8%A8%D8%A7%D8%AD/e_book.JPG"
            />
            <BookCardList
              text="فصوص الحكم"
              image="https://agarthaacademy.b-cdn.net/library-e-book/nabil/%D9%81%D8%B5%D9%88%D8%B5-%D8%A7%D9%84%D8%AD%D9%83%D9%85/e_book.JPG"
            />
            <BookCardList
              text="فصوص الحكم"
              image="https://agarthaacademy.b-cdn.net/library-e-book/nabil/%D9%81%D8%B5%D9%88%D8%B5-%D8%A7%D9%84%D8%AD%D9%83%D9%85/e_book.JPG"
            />
          </div>
        </div>
      </div>
    </main>
  </MainLayout>
</template>
