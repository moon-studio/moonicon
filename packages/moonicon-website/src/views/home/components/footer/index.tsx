import { NGi, NGrid } from 'naive-ui'
import styles from './index.module.scss'
import MoonLink from '@/components/moonLink'

export default defineComponent({
  name: 'Footer',
  setup() {},
  render() {
    return (
      <div class={styles.container}>
        <NGrid x-gap='0' cols='5'>
          <NGi>
            <img src={getImageUrl('Moonicon-vertical-logo')} alt='' />
          </NGi>
          <NGi>
            <div class={styles.title}>Moonicon</div>
            <div class={styles.content}>
              <div class={styles.info}>User Guide</div>
            </div>
          </NGi>
          <NGi>
            <div class={styles.title}>Developers</div>
            <div class={styles.content}>
              <div class={styles.info}>Design Document</div>
              <div class={styles.info}>NPM Address</div>
              <MoonLink label={'GitHub'}></MoonLink>
            </div>
          </NGi>
          <NGi>
            <div class={styles.title}>Follow us</div>
            <div class={styles.content}>
              <MoonLink
                address={'https://github.com/moon-studio'}
                label={'GitHub'}
              ></MoonLink>
            </div>
          </NGi>
          <NGi>
            <div class={styles.title}>About us</div>
            <div class={styles.content}>
              Moonicon is an open source library which provides simple and
              beautiful icons.
            </div>
          </NGi>
        </NGrid>
      </div>
    )
  }
})
