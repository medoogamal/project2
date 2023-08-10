<script setup>
import { toRefs } from 'vue'

const props = defineProps({
  text: String
})
const { text } = toRefs(props)
</script>

<template>
  <button
    class="block px-5 py-3 font-bold text-center border border-[#ffc600] rounded-sm text-[#07294d] bg-[#ffc600] hover:border-[#07294d] hover:text-[#ffc600] hover:bg-[#07294d] w-full"
  >
    {{ text }}
  </button>
</template>
