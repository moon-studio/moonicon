import styles from './index.module.scss'
import { useI18n } from 'vue-i18n'
import { NButton } from 'naive-ui'

export default defineComponent({
  name: 'Download',
  setup() {},
  render() {
    const { t } = useI18n()
    return (
      <div class={styles.iconDownload}>
        <NButton class='m-block' type={'primary'} size='large'>
          {t('icon.download-svg')}
        </NButton>
      </div>
    )
  }
})
