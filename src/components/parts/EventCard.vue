<script setup>
import Calender from 'vue-material-design-icons/Calendar.vue'
import Clock from 'vue-material-design-icons/Clock.vue'
import VLazyImage from 'v-lazy-image'
import { toRefs } from 'vue'
import { useLanguageStore } from '../../stores/store.js'
import Map from 'vue-material-design-icons/Map.vue'
const languageStore = useLanguageStore()

const props = defineProps({
  text: String,
  image: String
})
const { text, image } = toRefs(props)
</script>
<template>
  <div class="w-fit mx-auto" :dir="languageStore.direction">
    <div class="bg-white dark:bg-black rounded-lg flex overflow-hidden items-center">
      <div class="w-[210px] h-[210px] overflow-hidden relative cursor-pointer">
        <v-lazy-image
          src-placeholder="/images/logo.png"
          :src="image"
          alt=""
          class="w-[210px] h-[210px]"
        />
      </div>
      <div>
        <div>
          <div class="mt-2 cursor-pointer px-3">
            <div class="flex items-center gap-2 text-xs">
              <Calender :size="15" fillColor="#ffc600" />
              <span class="">27 Dec 2022</span>
            </div>
            <p class="text-lg hover:text-[#ffc600]">{{ text }}</p>
          </div>
        </div>
        <div class="px-2 py-5 w-full bottom-0">
          <div class="flex items-center gap-2 text-xs py-1">
            <Clock :size="15" fillColor="#ffc600" />
            <span class=""> 05 p.m. - 09 p.m.</span>
          </div>
          <div class="flex items-center gap-2 text-xs py-1">
            <Map :size="15" fillColor="#ffc600" />
            <span class=""> 05 p.m. - 09 p.m.</span>
          </div>
          <h4 class="text-lg">Public Event</h4>
        </div>
      </div>
    </div>
  </div>
</template>
