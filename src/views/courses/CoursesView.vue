<script setup>
import MainLayout from '../layouts/MainLayout.vue'
import Magnify from 'vue-material-design-icons/Magnify.vue'

import CourseCard from '../../components/parts/CourseCard.vue'
</script>

<template>
  <MainLayout>
    <main>
      <div
        class="mx-4 my-20 bg-[#edf0f2] border dark:bg-[#131212] border-gray-200 dark:border-[#0e0d0d] rounded-lg"
      >
        <div class="w-full rounded-t-lg bg-white dark:bg-[#0e0d0d] py-3 px-4">
          <div class="flex items-center justify-between h-full">
            <div id="sortBy">sortBy</div>

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
        <div id="boxes" class="p-4">
          <div
            class="grid md:gap-4 xl:grid-cols-4 2xl:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 grid-col-1 gap-2 relative"
          >
            <CourseCard
              text="Personal Pyramid"
              image="https://agarthaacademy.b-cdn.net/courses/The-Ascension-summit/course.jpg"
              authImage="https://agarthaacademy.b-cdn.net/accounts/Nabil_Kamal/profile.jpg"
              price="50"
              author="Nabil Kamal"
              reviews="0"
            />
            <CourseCard
              text="Personal Pyramid"
              image="https://agarthaacademy.b-cdn.net/courses/Quantum-Healing/course.jpg"
              authImage="https://agarthaacademy.b-cdn.net/accounts/Nabil_Kamal/profile.jpg"
              price="50"
              author="Nabil Kamal"
              reviews="0"
            />
            <CourseCard
              text="Personal Pyramid"
              image="https://agarthaacademy.b-cdn.net/courses/Personal-pyramid-Nabil_Kamal/course.gif"
              authImage="https://agarthaacademy.b-cdn.net/accounts/Nabil_Kamal/profile.jpg"
              price="50"
              author="Nabil Kamal"
              reviews="0"
            />
            <CourseCard
              text="Personal Pyramid"
              image="https://agarthaacademy.b-cdn.net/courses/Quantum-Healing/course.jpg"
              authImage="https://agarthaacademy.b-cdn.net/accounts/Nabil_Kamal/profile.jpg"
              price="50"
              author="Nabil Kamal"
              reviews="0"
            />
            <CourseCard
              text="Personal Pyramid"
              image="https://agarthaacademy.b-cdn.net/courses/Quantum-Healing/course.jpg"
              authImage="https://agarthaacademy.b-cdn.net/accounts/Nabil_Kamal/profile.jpg"
              price="50"
              author="Nabil Kamal"
              reviews="0"
            />
          </div>
        </div>
      </div>
    </main>
  </MainLayout>
</template>
