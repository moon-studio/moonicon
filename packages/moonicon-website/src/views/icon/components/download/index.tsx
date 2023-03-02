import styles from './index.module.scss'
import { NButton } from 'naive-ui'

export default defineComponent({
  name: 'Download',
  setup() {},
  render() {
    return (
      <div class={styles.iconDownload}>
        <NButton class='m-block' type={'primary'} size='large'>
          Download SVG
        </NButton>
      </div>
    )
  }
})
