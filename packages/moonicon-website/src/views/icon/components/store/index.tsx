import styles from './index.module.scss'
import { useIconsStore } from '@/store/icons'
import { computed } from 'vue'

import MIcon from '@moonicon/vue3/src'
import { Icon } from '@/store/icons/types'
import { getImageUrl } from '@/utils/common'
import router from '@/router'
import { useI18n } from 'vue-i18n'
import {NButton} from "naive-ui";

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
    const { t } = useI18n()

    if (!this.icons.length) {
      return (
        <div class={styles.emptyContent}>
          <img src={getImageUrl('empty')} class={styles.emptyTipImage}></img>
          <p class={styles.emptyTipMessage}>{t('icon.emptyMessage')}</p>
          <p class={styles.emptyTipButton}>
            <NButton>{t('icon.request')}</NButton>
          </p>
        </div>
      )
    }
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
