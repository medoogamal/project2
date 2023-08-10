<script setup>
import MainTitle from '../../components/parts/MainTitle.vue'
import PageBanner from '../../components/parts/PageBanner.vue'
import { useLanguageStore } from '../../stores/store.js'
import MainLayout from '../layouts/MainLayout.vue'

import NumbersSection from '../../components/sections/NumbersSection.vue'
import OutTeachers from '../../components/sections/OutTeachers.vue'

const languageStore = useLanguageStore()
</script>
<template>
  <MainLayout>
    <main class="dark:text-white bg-[#edf0f2] dark:bg-transparent">
      <PageBanner
        image="/images/page-banner-1.jpg"
        :name="languageStore.lang.footer['aboutUs']"
        :parentName="languageStore.lang['home']"
        parentPath=""
      />
      <div class="container mx-auto px-2">
        <div class="flex justify-evenly gap-4 py-14 md:flex-row flex-col">
          <div class="md:w-[50%] w-full">
            <MainTitle class="!mb-8" :text="languageStore.lang.footer['aboutUs']" />
            <h1 class="md:text-3xl text-xl font-bold mb-5">
              {{ languageStore.lang['welcomeMsg'] }}
            </h1>
            <p>
              Your awareness is important so what you do now is crucial. We know how stressful the
              learning process can be. Our goal is to create the right plan to help you develop your
              awareness. We offer you the knowledge, skills and experience of experienced
              professionals. We have personally experienced this case and can appreciate what you
              are about to experience. - Our goal is to make a strong team! Once students register
              with us, they are considered part of the Agartha family. Our academic staff and fellow
              academics are known for their credibility, dedication, quality and professionalism and
              are ready to help you develop yourself.
            </p>
          </div>
          <img class="md:w-[400px] w-full rounded-xl" src="/images/about-2.jpg" alt="" />
        </div>
        <div class="flex justify-evenly gap-4 py-14 md:flex-row flex-col">
          <div class="md:w-[30%] w-full">
            <h1 class="md:text-3xl text-xl font-bold mb-5 text-gray-300">01</h1>
            <h1 class="md:text-3xl text-xl font-bold mb-5">Why Choose us</h1>
            <p>
              We have the origin of the information, we turn it into experience, where anyone can
              master new skills and achieve their goals.
            </p>
          </div>
          <div class="md:w-[30%] w-full">
            <h1 class="md:text-3xl text-xl font-bold mb-5 text-gray-300">02</h1>
            <h1 class="md:text-3xl text-xl font-bold mb-5">Our Mission</h1>
            <p>
              Our mission is to create a positive learning environment on two levels: 1- Scientists
              and Trainers: We help develop scientists to raise the level of awareness of humanity
              and achieve their full potential to be the leaders of tomorrow. 2- The student: the
              student is qualified to enjoy his abilities that benefit himself, his community and
              humanity, as we are united by one planet that needs a lot of care and development.
            </p>
          </div>
          <div class="md:w-[30%] w-full">
            <h1 class="md:text-3xl text-xl font-bold mb-5 text-gray-300">03</h1>
            <h1 class="md:text-3xl text-xl font-bold mb-5">Our vision</h1>
            <p>
              To be the Agartha Academy as a high-level university-methodology education platform to
              study the issues of our time with openness, urbanization, technological change,
              economic empowerment, sustainability and globalization. We will be the preeminent
              intellectual and creative center for active participation in a world that increasingly
              demands continuous development, better designed to meet human needs.
            </p>
          </div>
        </div>
      </div>
      <NumbersSection />
      <OutTeachers />
    </main>
  </MainLayout>
</template>
