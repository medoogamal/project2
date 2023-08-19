<script setup>
import MainLayout from '../layouts/MainLayout.vue'
import { useLanguageStore } from '../../stores/store.js'
import VLazyImage from 'v-lazy-image'
const languageStore = useLanguageStore()
</script>
<template>
  <MainLayout>
    <main>
      <div
        id="library-categories"
        :class="languageStore.direction == 'ltr' ? '' : 'scaleFilp'"
        class="relative md:h-[480px] py-5"
      >
        <div
          :class="languageStore.direction == 'ltr' ? 'sm:ml-auto ml-20' : 'sm:mr-auto mr-20'"
          class="sm:w-[50%] grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1"
        >
          <router-link :to="`/${languageStore.langUrl}/library/books/e-books`">
            <div
              id="box"
              class="text-center w-fit h-[235px] cursor-pointer shadow-lg dark:shadow-blue-500/50 p-3 m-2 rounded-xl"
            >
              <v-lazy-image
                src-placeholder="/images/logo.png"
                class="transition-all duration-500 w-[160px] mx-auto mb-2"
                src="https://kemet.agartha.academy/static/library/assets/img/icon/ebooks.png"
                alt=""
              />
              <h4>E-BOOKS</h4>
            </div>
          </router-link>
          <div
            id="box"
            class="text-center w-fit h-[235px] cursor-pointer shadow-lg dark:shadow-blue-500/50 p-3 m-2 rounded-xl"
          >
            <v-lazy-image
              src-placeholder="/images/logo.png"
              class="transition-all duration-500 w-[160px] mx-auto mb-2"
              src="https://kemet.agartha.academy/static/library/assets/img/icon/AudioBooks.png"
              alt=""
            />
            <h4>AUDIO BOOKS</h4>
          </div>
          <div
            id="box"
            class="text-center w-fit h-[235px] cursor-pointer shadow-lg dark:shadow-blue-500/50 p-3 m-2 rounded-xl"
          >
            <v-lazy-image
              src-placeholder="/images/logo.png"
              class="transition-all duration-500 w-[160px] mx-auto mb-2"
              src="https://kemet.agartha.academy/static/library/assets/img/icon/music.png"
              alt=""
            />
            <h4>BEST MUSIC</h4>
          </div>
          <div
            id="box"
            class="text-center w-fit h-[235px] cursor-pointer shadow-lg dark:shadow-blue-500/50 p-3 m-2 rounded-xl"
          >
            <v-lazy-image
              src-placeholder="/images/logo.png"
              class="transition-all duration-500 w-[160px] mx-auto mb-2"
              src="https://kemet.agartha.academy/static/library/assets/img/icon/film.png"
              alt=""
            />
            <h4>DOCUMENTARIES</h4>
          </div>
          <router-link :to="`/${languageStore.langUrl}/library/maps`">
            <div
              id="box"
              class="text-center w-fit h-[235px] cursor-pointer shadow-lg dark:shadow-blue-500/50 p-3 m-2 rounded-xl"
            >
              <v-lazy-image
                src-placeholder="/images/logo.png"
                class="transition-all duration-500 w-[160px] mx-auto mb-2"
                src="https://kemet.agartha.academy/static/library/img/icon/maps.png"
                alt=""
              />
              <h4>MAPS</h4>
            </div>
          </router-link>
          <div
            id="box"
            class="text-center w-fit h-[235px] cursor-pointer shadow-lg dark:shadow-blue-500/50 p-3 m-2 rounded-xl"
          >
            <v-lazy-image
              src-placeholder="/images/logo.png"
              class="transition-all duration-500 w-[160px] mx-auto mb-2"
              src="https://kemet.agartha.academy/static/library/img/icon/EarthNow-01.png"
              alt=""
            />
            <h4>EARTH</h4>
          </div>
        </div>
      </div>
      <div class="container mx-auto py-20">
        <div class="cursor-pointer mx-3">
          <h5
            id="title"
            :class="languageStore.direction == 'ltr' ? 'after:left-0' : 'after:right-0'"
            class="font-bold text-sm md:text-lg relative pb-3 mb-3"
          >
            The most important books that have just arrived
          </h5>
          <h2 class="font-bold text-2xl">RECENT E-BOOKS</h2>
        </div>
        <div
          id="book-shelf"
          class="flex gap-1 md:w-[80%] w-[90%] mx-auto my-10 relative after:!-top-[5%] md:after:!top-[65%] lg:after:!top-[88%]"
        >
          <div class="book relative">
            <v-lazy-image
              src-placeholder="/images/logo.png"
              class="w-full h-full"
              src="https://agarthaacademy.b-cdn.net/library-e-book/Agartha-Kemet/Reality-tr119/e_book.jpg"
              alt=""
            />
          </div>
          <div class="book relative">
            <v-lazy-image
              src-placeholder="/images/logo.png"
              class="w-full h-full"
              src="https://agarthaacademy.b-cdn.net/library-e-book/batoul/Reality-Cr118/e_book.jpg"
              alt=""
            />
          </div>
          <div class="book relative">
            <v-lazy-image
              src-placeholder="/images/logo.png"
              class="w-full h-full"
              src="https://agarthaacademy.b-cdn.net/library-e-book/nabil/The-Victor105/e_book.jpg"
              alt=""
            />
          </div>
          <div class="book relative">
            <v-lazy-image
              src-placeholder="/images/logo.png"
              class="w-full h-full"
              src="https://agarthaacademy.b-cdn.net/library-e-book/nabil/Old-World-104/e_book.jpg"
              alt=""
            />
          </div>

          <div class="book relative">
            <img
              class="w-full h-full"
              src="https://agarthaacademy.b-cdn.net/library-e-book/Agartha-Kemet/Reality-tr119/e_book.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </main>
  </MainLayout>
</template>
<style scoped>
#library-categories::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  background-image: url('/public/images/welcome-bg.png');
  background-size: cover;
  background-position-x: 43%;
}
#library-categories.scaleFilp::before {
  transform: scaleX(-1);
}
#box:hover img {
  transform: scale(1.1);
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
#book-shelf::after {
  background: url(https://kemet.agartha.academy/static/images/wall-bookshelf.png);
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: bottom left;
  display: block;
  width: 100%;
  height: 150px;
  content: '';
  position: absolute;
  top: 94%;
  left: 0;
}
.book {
  perspective: 500px;
  position: relative;
  top: 0;
  z-index: 2;
  display: block;
  margin: 0 auto;
  width: 160px;
  height: auto;
  box-shadow: 10px 10px 30px rgba(0, 0, 0, 0.4);
  transform-origin: 0 0;
  transform-style: preserve-3d;
  transform: rotateY(0);
  transition: all 1000ms;
  cursor: pointer;
}
.book:after {
  content: '';
  position: absolute;
  display: block;
  top: 2px;
  right: -1px;
  background: url(https://kemet.agartha.academy/static/images/book-right.png) repeat;
  width: 4px;
  height: calc(100% - 3px);
  transform: rotateY(35deg);
  transform-origin: right;
  transition: all 500ms;
}
.book:hover {
  box-shadow: 20px 10px 50px rgba(0, 0, 0, 0.4);
  transform: rotateY(-30deg) scale(1.1);
  top: -20px;
}
.book:hover:after {
  right: -15px;
  width: 15px;
}
</style>
