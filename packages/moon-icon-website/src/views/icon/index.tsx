import styles from './index.module.scss'
import Search from './components/search'
import Slider from './components/slider'
import Store from './components/store'
import Customize from './components/customize'
import Download from './components/download'

import icons from '@moon-icon/svg/resources/index.json'
import { useIconsStore } from '@/store/icons'
import type { Icon } from '@/store/icons/types'

export default defineComponent({
  name: 'Icon',
  setup() {
    const iconStore = useIconsStore()

    iconStore.setIcons(icons as Icon[])
  },
  render() {
    return (
      <div class={styles.iconContent}>
        <div class={styles.iconSearcher}>
          <Search />
          <Download />
        </div>
        <div class={styles.iconWrapper}>
          <Slider />
          <Store />
          <Customize />
        </div>
      </div>
    )
  }
})
