import { createRouter, createWebHistory } from 'vue-router'

// @ts-ignore
import generatedRoutes from '~pages'

import { setupLayouts } from 'virtual:generated-layouts'
const routes = setupLayouts(generatedRoutes)

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return {
        top: 0,
        behavior: 'smooth',
      }
    }
  },

  routes: routes
})

router.beforeEach((to, from, next) => {
  const title = to.meta.title as string
  if (title) {
    document.title = title
  }
  next()
})

export default router
