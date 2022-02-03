import { createRouter, createWebHistory } from 'vue-router'
import { getUserState } from '../firebase'

import HelloWorld from '../components/HelloWorld.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HelloWorld,
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('../views/Register.vue'),
    meta: {
      requiresUnauth: true,
    },
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue'),
    meta: {
      requiresUnauth: true,
    },
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: () => import('../views/Dashboard.vue'),
    meta: {
      requiresAuth: true,
    },
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach(async (to, from, next) => {
  const isAuth = await getUserState() // get user auth
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth)
  const requiresUnauth = to.matched.some(record => record.meta.requiresUnauth)

  // if page requires auth & user not authenticated
  if (requiresAuth && !isAuth) next('/login')
  // authenticated user CANNOT access login/register page
  else if (requiresUnauth && isAuth) next('/dashboard')
  // if page NOT requires auth
  else next()
})

export default router
