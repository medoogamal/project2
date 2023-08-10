<script setup>
import { useLanguageStore } from '../../stores/store.js'

import MainLayout from '../layouts/MainLayout.vue'
import Book from 'vue-material-design-icons/Book.vue'
import Shield from 'vue-material-design-icons/Shield.vue'

import EventCard from '../../components/parts/EventCard.vue'
import PageBanner from '../../components/parts/PageBanner.vue'

const languageStore = useLanguageStore()
</script>

<template>
  <MainLayout>
    <main>
      <PageBanner
        image="https://kemet.agartha.academy/static/images/page-banner-3.jpg"
        name="Events"
        parentName="Home"
        parentPath=""
        class="img"
      />

      <div class="mx-4 my-10 rounded-lg">
        <div
          class="w-full rounded-t-lg bg-[#edf0f2] dark:bg-[#131212] py-10 px-6 mb-10 cursor-pointer"
        >
          <h1 class="md:text-3xl font-bold">Categories</h1>
          <div class="flex items-center gap-3 mt-3">
            <div class="flex items-center gap-1 hover:text-[#ffc600]">
              <Book fillColor="#ffc650" :size="18" />
              <span>public</span>
            </div>
            <div class="flex items-center gap-1 hover:text-[#ffc600]">
              <Shield fillColor="#ffc650" :size="18" />
              <span>Private</span>
            </div>
            <div class="flex items-center gap-1 hover:text-[#ffc600]">
              <Shield fillColor="#ffc650" :size="18" />
              <span>Complate</span>
            </div>
          </div>
        </div>
        <div id="boxes" class="p-4 bg-[#edf0f2] dark:bg-[#131212] rounded-lg">
          <div
            class="grid md:gap-4 2xl:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 grid-col-1 gap-2 relative"
          >
            <EventCard
              text="Personal Pyramid"
              image="https://agarthaacademy.b-cdn.net/events/Ana/Public-Event.png"
            />
            <EventCard
              text="Personal Pyramid"
              image="https://agarthaacademy.b-cdn.net/events/Ana/Public-Event.png"
            />
            <EventCard
              text="Personal Pyramid"
              image="https://agarthaacademy.b-cdn.net/events/Ana/Public-Event.png"
            />
            <EventCard
              text="Personal Pyramid"
              image="https://agarthaacademy.b-cdn.net/events/Ana/Private-Event.jpg"
            />
            <EventCard
              text="Personal Pyramid"
              image="https://agarthaacademy.b-cdn.net/events/Ana/Private-Event.jpg"
            />
          </div>
        </div>
      </div>
    </main>
  </MainLayout>
</template>
