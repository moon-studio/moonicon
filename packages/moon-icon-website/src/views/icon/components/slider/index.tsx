import styles from './index.module.scss'
import { computed, ComputedRef } from 'vue'
import { useIconsStore } from '@/store/icons'
import { useI18n } from 'vue-i18n'

export default defineComponent({
  name: 'Slider',
  setup() {
    const iconStore = useIconsStore()

    const iconTypes: ComputedRef<string[]> = computed(
      () => iconStore.getFilterClasses
    )

    return {
      iconTypes
    }
  },
  render() {
    const { t } = useI18n()
    return (
      <div class={styles.iconSlider}>
        {this.iconTypes.map((type) => (
          <div class={styles.iconTypeItem}>{t(`classification.${type}`)}</div>
        ))}
      </div>
    )
  }
})
