import styles from './index.module.scss'
import { NInput, NCheckbox } from 'naive-ui'
import { computed } from 'vue'
import { useIconsStore } from '@/store/icons'
import { useI18n } from 'vue-i18n'

export default defineComponent({
  name: 'Search',
  setup() {
    const iconStore = useIconsStore()

    const filterText = computed({
      get: () => iconStore.getSearchText,
      set: iconStore.setSearchText
    })
    const onlySelect = computed({
      get: () => iconStore.getOnlySelected,
      set: iconStore.setOnlySelected
    })

    return {
      filterText,
      onlySelect
    }
  },
  render() {
    const { t } = useI18n()
    return (
      <div class={styles.iconSearch}>
        <NInput
          placeholder={t('icon.searchPlaceholder')}
          size='large'
          clearable={true}
          v-model={[this.filterText, 'value']}
        ></NInput>
        <NCheckbox size='large' v-model={[this.onlySelect, 'checked']}>
          {t('icon.onlySelected')}
        </NCheckbox>
      </div>
    )
  }
})
