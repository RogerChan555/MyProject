import Vue from 'vue'
import Router from 'vue-router'

import product from '~/pages/product/_id'
import index from '~/pages/index'

Vue.use(Router)

export function createRouter() {
  return new Router({
    mode: 'history',
    linkActiveClass: 'nuxt-link-active',
    linkExactActiveClass: 'nuxt-link-exact-active',
    routes: [
      {
        path: '/',
        component: index
      },
      {
        path: '/product/:databaseId',
        name: 'product',
        component: product
      }
    ],
    fallback: false
  })
}
