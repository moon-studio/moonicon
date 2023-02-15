import { useI18n } from 'vue-i18n'
import styles from './index.module.scss'

export default defineComponent({
  name: 'About',
  setup() {},
  render() {
    const { t } = useI18n()
    return (
      <div class={styles.container}>
        <div class={styles.title}>{t('home.aboutMoonicon')}</div>
        <div class={styles.introduction}>
          {t('home.introduction')}
        </div>
        <div class={styles.address}>
          Github: https://github.com/moon-studio/moon-icon <br />
          Download Vue3 code: https://www.npmjs.com/package/@moon-icon/vue3
        </div>
      </div>
    )
  }
})
