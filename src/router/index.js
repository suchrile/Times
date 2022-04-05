import { createRouter, createWebHistory } from 'vue-router'
import { getAuth } from 'firebase/auth'

const routes = [
  {
    path: '/auth',
    name: 'Auth',
    meta: { layout: 'auth' },
    component: () => import('@/views/Auth.vue'),
  },
  {
    path: '/',
    name: 'G_APP_REVIEW',
    meta: { auth: true, layout: 'main', largetitle: true },
    component: () => import('@/views/Review.vue'),
  },
  {
    path: '/today',
    name: 'G_APP_TODAY',
    meta: { auth: true, layout: 'main', largetitle: true },
    component: () => import('@/views/Today.vue'),
  },
  {
    path: '/calendar',
    name: 'G_APP_CALENDAR',
    meta: { auth: true, layout: 'main', largeheader: true },
    component: () => import('@/views/Calendar.vue'),
  },
  {
    path: '/tasks',
    name: 'G_APP_ALL_TASKS',
    meta: { auth: true, layout: 'main', largeheader: true },
    component: () => import('@/views/Tasks.vue'),
  },
  {
    path: '/settings',
    name: 'G_APP_SETTINGS',
    meta: { auth: true, layout: 'main', largeheader: true },
    component: () => import('@/views/Settings.vue'),
  },
  {
    path: '/settings/profile',
    name: 'G_APP_PROFILE',
    meta: { auth: true, layout: 'main', largeheader: false },
    component: () => import('@/views/SettingsProfile.vue'),
  },
  {
    path: '/settings/appearance',
    name: 'G_APP_APPEARANCE',
    meta: { auth: true, layout: 'main', largeheader: false },
    component: () => import('@/views/SettingsAppearance.vue'),
  },
  {
    path: '/settings/language',
    name: 'G_APP_LANGUAGE',
    meta: { auth: true, layout: 'main', largeheader: false },
    component: () => import('@/views/SettingsLanguage.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  const currentUser = getAuth().currentUser
  const requireAuth = to.matched.some(record => record.meta.auth)

  if (requireAuth && !currentUser) {
    return next(`/auth?to=${to.path}`)
  }
  next()

})

export default router
