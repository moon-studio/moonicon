import { createApp } from 'vue'
import App from './App'
import router from './router'
import i18n from './lang/index'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import './assets/styles/default.scss'
import './assets/styles/naive-reset.scss'

const app = createApp(App)
const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

app.use(router)
app.use(pinia)
app.use(i18n)
app.mount('#app')
