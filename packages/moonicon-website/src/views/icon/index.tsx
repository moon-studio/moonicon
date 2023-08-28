import styles from './index.module.scss'
import Search from './components/search'
import Slider from './components/slider'
import Store from './components/store/IconStore.vue'
import Customize from './components/customize'
import Download from './components/download'

import icons from '@moonicon/svg/resources/index.json'
import { useIconsStore } from '@/store/icons'
import type { Icon } from '@/store/icons/types'
import { NDivider } from 'naive-ui'

export default defineComponent({
  name: 'Icon',
  setup() {
    const iconStore = useIconsStore()

    iconStore.setIcons(icons as Icon[])
  },
  render() {
    return (
      <div class={styles.iconContent}>
        <Search />
        <Download />
        <NDivider class={styles.nDivider} />
        <Slider />
        <Store />
        <Customize />
      </div>
    )
  }
})
