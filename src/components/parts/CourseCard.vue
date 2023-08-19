<script setup>
import Star from 'vue-material-design-icons/Star.vue'
import HeartOutline from 'vue-material-design-icons/HeartOutline.vue'
import profile from 'vue-material-design-icons/Account.vue'
import VLazyImage from 'v-lazy-image'
import { toRefs } from 'vue'
import { useLanguageStore } from '../../stores/store.js'
const languageStore = useLanguageStore()

const props = defineProps({
  text: String,
  image: String,
  price: String,
  author: String,
  authImage: String,
  reviews: String
})
const { text, image, price, author, authImage } = toRefs(props)
</script>
<template>
  <div class="w-fit mx-auto" :dir="languageStore.direction">
    <div class="bg-white dark:bg-black rounded-lg">
      <div class="w-[300px] h-[300px] overflow-hidden relative rounded-t-lg cursor-pointer">
        <v-lazy-image
          src-placeholder="/images/logo.png"
          :src="image"
          alt=""
          class="w-[300px] h-[280px]"
        />
        <div
          id="price"
          :class="languageStore.direction == 'ltr' ? 'right-6' : 'left-6'"
          class="text-white bg-[#ffc600] absolute p-3 rounded-full bottom-0 z-10 cursor-pointer hover:bg-[#fc5600]"
        >
          ${{ price }}
        </div>
      </div>

      <div>
        <div class="mt-2 cursor-pointer px-3">
          <div class="flex items-center gap-2 text-xs">
            <Star :size="15" fillColor="#ffc600" />
            <span class="">({{ reviews }} Reviews)</span>
          </div>
          <p class="text-lg hover:text-[#ffc600]">{{ text }}</p>
        </div>
      </div>
      <div id="by" class="flex items-center justify-between px-2 py-5 w-full bottom-0">
        <div class="flex items-center gap-3 cursor-pointer">
          <img class="rounded-full w-[40px] h-[40px]" :src="authImage" alt="" />
          <span class="dark:text-white hover:text-[#ffc600]">{{ author }}</span>
        </div>
        <div class="cursor-pointer flex items-center gap-2">
          <div class="flex gap-.5 items-center">
            <profile :size="20" />
            <span class="text-sm text-gray-600">4</span>
          </div>
          <div class="flex gap-.5 items-center">
            <HeartOutline :size="20" />
            <span class="text-sm text-gray-600">23</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
