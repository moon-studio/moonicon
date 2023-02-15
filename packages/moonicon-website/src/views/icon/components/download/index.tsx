import styles from './index.module.scss'
import { NButton } from 'naive-ui'

export default defineComponent({
  name: 'Download',
  setup() {},
  render() {
    return (
      <div class={styles.iconDownload}>
        <NButton class='m-block' size='large' ghost={true} type='primary'>
          Download SVG
        </NButton>
      </div>
    )
  }
})
