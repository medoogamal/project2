<script setup>
import MainButton from '../../components/parts/MainButton.vue'
import MainTitle from '../../components/parts/MainTitle.vue'
import PageBanner from '../../components/parts/PageBanner.vue'
import { useLanguageStore } from '../../stores/store.js'
import MainLayout from '../layouts/MainLayout.vue'
import Phone from 'vue-material-design-icons/Phone.vue'
import Email from 'vue-material-design-icons/EmailOutline.vue'

const languageStore = useLanguageStore()
</script>
<template>
  <MainLayout>
    <main class="dark:text-white bg-[#edf0f2] dark:bg-transparent">
      <PageBanner
        image="/images/page-banner-6.jpg"
        :name="languageStore.lang.footer['contact']"
        :parentName="languageStore.lang['home']"
        parentPath=""
      />
      <div class="container mx-auto px-2 flex md:flex-row flex-col justify-evenly py-24">
        <div id="contact-form" class="bg-white dark:bg-black p-14 rounded-xl md:mb-0 mb-8">
          <MainTitle text="Contact Us" />
          <form>
            <div class="flex gap-3">
              <input
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 focus:outline-none dark:focus:border-blue-500"
                type="text"
                placeholder="Your name"
              />
              <input
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 focus:outline-none dark:focus:border-blue-500"
                type="email"
                placeholder="Email"
              />
            </div>
            <div class="flex gap-3 mt-4">
              <input
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 focus:outline-none dark:focus:border-blue-500"
                type="text"
                placeholder="Subject"
              />
              <input
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 focus:outline-none dark:focus:border-blue-500"
                type="text"
                placeholder="Phone"
              />
            </div>
            <textarea
              class="my-5 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 focus:outline-none dark:focus:border-blue-500"
              cols="50"
              rows="5"
              placeholder="Message"
            ></textarea>
            <MainButton text="Send" />
          </form>
        </div>
        <div class="bg-white dark:bg-black p-14 rounded-xl h-fit">
          <a href="https://wa.me/00201011609810">
            <div class="flex items-center gap-3 hover:text-[#ffc600] cursor-pointer mb-4">
              <Phone :size="30" />
              <p>00201011609810</p>
            </div>
          </a>
          <a href="mailto:support@agartha.academy">
            <div class="flex items-center gap-3 hover:text-[#ffc600] cursor-pointer">
              <Email :size="30" />
              <p>support@agartha.academy</p>
            </div>
          </a>
        </div>
      </div>
    </main>
  </MainLayout>
</template>
