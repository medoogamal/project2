<script setup>
import { toRefs } from 'vue'
import { useLanguageStore } from '../../stores/store.js'
import VLazyImage from 'v-lazy-image'

const languageStore = useLanguageStore()
const props = defineProps({
  image: String,
  text: String,
  subText: String
})
const { image, text, subText } = toRefs(props)
</script>

<template>
  <div class="relative w-full md:h-[600px] h-[190px] overflow-hidden">
    <div class="img relative">
      <v-lazy-image
        src-placeholder="/images/logo.png"
        :src="image"
        class="w-full md:h-[600px] h-[190px]"
        alt=""
      />
    </div>
    <div
      id="text"
      :class="languageStore.direction == 'ltr' ? 'left-10 md:left-20' : 'right-10 md:right-20'"
      class="absolute md:top-[40%] top-[15%] cursor-pointer w-[60%] z-10"
    >
      <h1 class="text-white md:text-3xl text-sm font-extrabold mb-5">{{ text }}</h1>
      <p class="text-[#eedc82] md:text-xl text-xs font-extrabold mb-3 md:mb-5" v-if="subText">
        {{ subText }}
      </p>

      <div id="join" class="">
        <router-link
          to=""
          class="md:py-3 md:px-4 py-1 px-2 bg-[#ffc600] rounded-lg hover:bg-[#bdac3c] font-bold"
          >Start Trial now</router-link
        >
      </div>
    </div>
  </div>
</template>

<style scoped>
.img::before {
  content: '';
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: black;
  opacity: 0.5;
  z-index: 3;
}
</style>
