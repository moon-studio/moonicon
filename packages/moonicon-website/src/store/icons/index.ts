import { defineStore } from 'pinia'
import { Customize, Icon, IconsStore, SearchText, SearchType } from './types'

export const defaultCustomize: Customize = {
  size: 32,
  strokeWidth: 1.5,
  stroke: '#000000',
  fill: 'none'
}

export const useIconsStore = defineStore({
  id: 'icons',
  state: (): IconsStore => ({
    searchText: '',
    searchType: 'name',
    onlySelected: false,
    icons: [],
    selectedIconsMap: {},
    classification: [],
    customize: { ...defaultCustomize }
  }),
  getters: {
    getSearchType(): SearchType {
      return this.searchType
    },
    getSearchText(): SearchText {
      return this.searchText
    },
    getOnlySelected(): boolean {
      return this.onlySelected
    },
    getSelectedIcons(): Icon[] {
      return this.getFilterIcons.filter(
        (icon) => this.selectedIconsMap[icon.name]
      )
    },
    getSelectedIconsMap(): Record<string, boolean> {
      return this.selectedIconsMap
    },
    getFilterIcons(): Icon[] {
      if (!this.searchText) {
        return this.icons
      }
      return this.icons.filter((icon) => {
        return (
          icon[this.getSearchType] &&
          icon[this.getSearchType].startsWith(this.searchText)
        )
      })
    },
    getFilterClasses(): string[] {
      const classMap: Record<string, boolean> = {}
      return this.getFilterIcons.reduce((arr: string[], icon: Icon) => {
        // 非“仅选中”时去除重复 class
        if (!this.onlySelected) {
          if (!classMap[icon.classification]) {
            classMap[icon.classification] = true
            arr.push(icon.classification)
          }
        } else {
          if (
            !classMap[icon.classification] &&
            this.selectedIconsMap[icon.name]
          ) {
            classMap[icon.classification] = true
            arr.push(icon.classification)
          }
        }
        return arr
      }, [])
    },
    getCustomize(): Customize {
      return this.customize
    }
  },
  actions: {
    setSearchText(text: string): void {
      this.searchText = text
    },
    setCustomize<T extends keyof Customize>(key: T, value: Customize[T]) {
      this.customize[key] = value
    },
    setIcons(icons: Icon[]) {
      this.icons = icons
    },
    setOnlySelected(onlySelected: boolean) {
      this.onlySelected = onlySelected
    },
    removeSelectedIcon(icon: Icon) {
      this.selectedIconsMap[icon.name] = false
    },
    pushSelectedIcons(icon: Icon) {
      this.selectedIconsMap[icon.name] = true
    }
  },
  persist: {
    storage: sessionStorage
  }
})
