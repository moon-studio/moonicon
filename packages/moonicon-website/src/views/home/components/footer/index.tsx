import { NGi, NGrid } from 'naive-ui'
import { useI18n } from 'vue-i18n'
import styles from './index.module.scss'
import MoonLink from '@/components/moonLink'

export default defineComponent({
  name: 'Footer',
  setup() {},
  render() {
    const { t } = useI18n()
    return (
      <div class={styles.container}>
        <NGrid x-gap='0' cols='5'>
          <NGi>
            <img src={getImageUrl('Moonicon-vertical-logo')} alt='' />
          </NGi>
          <NGi>
            <div class={styles.title}>{t('home.follow-us')}</div>
            <div class={styles.content}>
              <MoonLink
                address={'https://github.com/moon-studio'}
                label={'Moon Studio'}
              />
              <MoonLink
                address={'https://github.com/moon-studio/moonicon'}
                label={'Moon Icon'}
              />
            </div>
          </NGi>
        </NGrid>
      </div>
    )
  }
})
