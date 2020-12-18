import Vue from 'vue'
import Router from 'vue-router'
import DashboardLayout from '@/layout/DashboardLayout'
import AuthLayout from '@/layout/AuthLayout'
Vue.use(Router)

export default new Router({
  linkExactActiveClass: 'active',
  routes: [
    {
      path: '/',
      redirect: 'dashboard',
      component: DashboardLayout,
      children: [
        {
          path: '/dashboard',
          name: 'bienvenido',
          // route level code-splitting
          // this generates a separate chunk (about.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => import(/* webpackChunkName: "demo" */ './views/Dashboard.vue')
        },
        {
          path: '/profile',
          name: 'mi perfil',
          component: () => import(/* webpackChunkName: "demo" */ './views/UserProfile.vue')
        },
        {
          path: '/familia-por-edad',
          name: 'familia por edad',
          component: () => import(/* webpackChunkName: "demo" */ './views/Family.vue'),
        },
        {
          path: '/georeferencia',
          name: 'georeferencia',
          component: () => import(/* webpackChunkName: "demo" */ './views/Georeferencia.vue')
        },
        {
          path: '/riesgo-familiar',
          name: 'riesgo familiar',
          component: () => import(/* webpackChunkName: "demo" */ './views/Question.vue')
        },
        {
          path: '/mortalidad-familiar',
          name: 'mortalidad familiar',
          component: () => import(/* webpackChunkName: "demo" */ './views/Mortality.vue')
        },
        {
          path: '/evolucion-familiar',
          name: 'evolucion familiar',
          component: () => import(/* webpackChunkName: "demo" */ './views/Evolution.vue')
        },
        {
          path: '/resultados',
          name: 'resultados',
          component: () => import(/* webpackChunkName: "demo" */ './views/Total.vue')
        },


      ]
    },
    {
      path: '/',
      redirect: 'login',
      component: AuthLayout,
      children: [
        {
          path: '/login',
          name: 'login',
          props: true,
          component: () => import(/* webpackChunkName: "demo" */ './views/Login.vue')
        },
      ]
    }
  ]
})
