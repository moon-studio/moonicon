import { useI18n } from 'vue-i18n'
import styles from './index.module.scss'

export default defineComponent({
  name: 'About',
  setup() {
    const hanldleLink = (type: number) => {
      if (type === 0) {
        window.open('https://github.com/moon-studio/moonicon')
      } else {
        window.open('https://www.npmjs.com/package/@moonicon/vue3')
      }
    }

    return { hanldleLink }
  },
  render() {
    const { t } = useI18n()
    return (
      <div class={styles.container}>
        <div class={styles.title}>{t('home.aboutMoonicon')}</div>
        <div class={styles.introduction}>
          {t('home.introduction')}
        </div>
        <div class={styles.address}>
          Github: <span onClick={() => this.hanldleLink(0)}>https://github.com/moon-studio/moonicon</span> <br />
          Download Vue3 code: <span onClick={() => this.hanldleLink(1)}>https://www.npmjs.com/package/@moonicon/vue3</span>
        </div>
      </div>
    )
  }
})
