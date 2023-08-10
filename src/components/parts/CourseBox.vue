<script setup>
import Star from 'vue-material-design-icons/Star.vue'
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
  <div class="w-fit" :dir="languageStore.direction">
    <div class="relative">
      <img :src="image" alt="" class="w-[300px] h-[300px]" />
      <div
        id="price"
        :class="languageStore.direction == 'ltr' ? 'right-6' : 'left-6'"
        class="text-white bg-[#ffc600] absolute p-3 rounded-full bottom-10 z-10 cursor-pointer hover:bg-[#fc5600]"
      >
        ${{ price }}
      </div>
      <div
        id="by"
        class="flex items-center justify-between px-2 py-3 bg-black opacity-70 absolute w-full bottom-0"
      >
        <div class="flex items-center gap-3 cursor-pointer">
          <img class="rounded-full w-[40px] h-[40px]" :src="authImage" alt="" />
          <span class="text-white hover:text-[#ffc600]">{{ author }}</span>
        </div>
        <Star fillColor="#ffc600" />
      </div>
    </div>
    <p class="text-lg mt-2 cursor-pointer hover:text-[#ffc600]">
      <span>({{ reviews }} Reviews)</span> {{ text }}
    </p>
  </div>
</template>
