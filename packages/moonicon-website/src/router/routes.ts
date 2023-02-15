import type { RouteRecordRaw } from 'vue-router'
import type { Component } from 'vue'
import utils from '../utils'

// All TSX files under the views folder automatically generate mapping relationship
const modules = import.meta.glob('/src/views/**/**.tsx')
const components: { [key: string]: Component } = utils.mapping(modules)

/**
 * Basic page
 */
const basePage: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: { name: 'home' },
    meta: { title: '首页' },
    component: () => import('../layouts'),
    children: [
      {
        path: '/home',
        name: 'home',
        component: components['home'],
        meta: {
          title: '首页',
          activeMenu: 'home',
          auth: []
        }
      },
      {
        path: '/icon',
        name: 'icon',
        component: components['icon'],
        meta: {
          title: '图标',
          activeMenu: 'icon',
          auth: []
        }
      }
    ]
  }
]

const routes: RouteRecordRaw[] = [...basePage]

export default routes
