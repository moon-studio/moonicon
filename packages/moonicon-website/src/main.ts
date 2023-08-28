import { Component, createApp } from 'vue'
import App from './App'
import router from './router'
import i18n from './lang/index'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import './assets/styles/default.scss'
import './assets/styles/naive-reset.scss'

import * as MIcons from '@moonicon/vue3'

const app = createApp(App)
const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

for (const mIconsKey in MIcons) {
  app.component(mIconsKey, (MIcons as Record<string, Component>)[mIconsKey])
}

app.use(router)
app.use(pinia)
app.use(i18n)
app.mount('#app')
