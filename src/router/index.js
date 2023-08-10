import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import NotFoundView from '../views/NotFoundView.vue'
import AboutView from '../views/AboutView.vue'
import MapsView from '../views/library/MapsView.vue'
import LoginView from '../views/profile/LoginView.vue'
import RegisterView from '../views/profile/RegisterView.vue'
import CoursesView from '../views/courses/CoursesView.vue'
import EventsView from '../views/events/EventsView.vue'
import LibraryView from '../views/library/LibraryView.vue'
import EBooksView from '../views/library/books/EBooksView.vue'
import MentorView from '../views/mentor/MentorView.vue'
import TeachersView from '../views/services/TeachersView.vue'
import ContactusView from '../views/services/ContactusView.vue'
import AboutusView from '../views/services/AboutusView.vue'

const supportedLanguages = ['en', 'ar']

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/ar' // Redirect the root path to the English version by default
    },
    {
      path: '/:lang',
      component: HomeView,
      beforeEnter: (to, from, next) => {
        const langParam = to.params.lang
        if (supportedLanguages.includes(langParam)) {
          next()
        } else {
          // Redirect to the 404 page if the provided language is unsupported
          next({ name: 'NotFound', params: { lang: 'en' }, component: NotFoundView })
        }
      }
    },
    {
      // Define the 404 page route
      path: '/:lang/about',
      name: 'about',
      component: AboutView
    },
    {
      path: '/:lang/library',
      component: LibraryView
    },
    {
      path: '/:lang/library',
      children: [
        {
          path: 'maps',
          name: 'library.maps',
          component: MapsView
        },
        {
          path: 'books',
          children: [
            {
              path: 'e-books',
              name: 'e-books',
              component: EBooksView
            }
          ]
        }
      ]
    },
    {
      path: '/:lang/profile',
      children: [
        {
          path: 'login',
          name: 'login',
          component: LoginView
        },
        {
          path: 'register',
          name: 'register',
          component: RegisterView
        }
      ]
    },
    {
      path: '/:lang/courses',
      name: 'courses',
      component: CoursesView,
      children: []
    },
    {
      path: '/:lang/events',
      name: 'events',
      component: EventsView,
      children: []
    },
    {
      path: '/:lang/consultant',
      name: 'mentor',
      component: MentorView,
      children: []
    },
    {
      path: '/:lang/services',
      name: 'services',
      children: [
        {
          path: 'teachers',
          name: 'teachers',
          component: TeachersView
        },
        {
          path: 'contact-us',
          name: 'contact-us',
          component: ContactusView
        },
        {
          path: 'about-us',
          name: 'about-us',
          component: AboutusView
        }
      ]
    },
    {
      // Define the 404 page route
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: NotFoundView
    }
  ]
})

export default router
