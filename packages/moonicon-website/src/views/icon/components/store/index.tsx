import styles from './index.module.scss'
import { useIconsStore } from '@/store/icons'
import { computed } from 'vue'

import MIcon from '@moonicon/vue3/src'
import { Icon } from '@/store/icons/types'

export default defineComponent({
  name: 'Store',
  setup() {
    const iconStore = useIconsStore()
    const iconCustomize = computed(() => iconStore.getCustomize)

    const onlySelected = computed(() => iconStore.getOnlySelected)
    const selectedIconsMap = computed(() => iconStore.getSelectedIconsMap)

    const icons = computed(() => {
      return onlySelected.value
        ? iconStore.getSelectedIcons
        : iconStore.getFilterIcons
    })

    const changeIconSelected = (e: MouseEvent, icon: Icon) => {
      console.log('click', icon)
      selectedIconsMap.value[icon.name]
        ? iconStore.removeSelectedIcon(icon)
        : iconStore.pushSelectedIcons(icon)
    }

    return {
      icons,
      iconCustomize,
      onlySelected,
      selectedIconsMap,

      changeIconSelected
    }
  },
  render() {
    return (
      <div class={styles.iconStore}>
        {this.icons.map((icon) => (
          <div
            class={`${styles.iconItem} ${
              (this.selectedIconsMap[icon.name] && styles.isSelected) || ''
            }`}
          >
            <div
              class={styles.iconContent}
              onClick={(event) => this.changeIconSelected(event, icon)}
            >
              <div class={styles.iconArea}>
                <MIcon
                  name={icon.name}
                  size={this.iconCustomize.size}
                  strokeWidth={this.iconCustomize.strokeWidth}
                  stroke={this.iconCustomize.stroke}
                  fill={this.iconCustomize.fill}
                ></MIcon>
              </div>
              <div class={styles.iconName}>{icon.name}</div>
            </div>
          </div>
        ))}
      </div>
    )
  }
})
