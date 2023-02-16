import { defineStore } from 'pinia'
import { LocalesStore, Locales } from './types'

export const useLocalesStore = defineStore({
  id: 'locales',
  state: (): LocalesStore => ({
    locales: 'en_US'
  }),
  getters: {
    getLocales(): Locales {
      return this.locales
    }
  },
  actions: {
    setLocales(lang: Locales): void {
      this.locales = lang
    }
  },
  persist: {
    storage: sessionStorage
  }
})
