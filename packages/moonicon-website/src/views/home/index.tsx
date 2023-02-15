import styles from './index.module.scss'
import { getImageUrl } from '../../utils/common'
import { NDivider } from 'naive-ui'
import About from './components/about'
import Footer from './components/footer'
import { Router } from 'vue-router'

export default defineComponent({
  name: 'Home',
  setup() {
    const router: Router = useRouter()

    const handleJump = () => {
      router.push('/icon')
    }
    return { handleJump }
  },
  render() {
    return (
      <div class={styles.container}>
        <div class={styles.banner}>
          <div class={styles.title}>
            <img src={getImageUrl('banner')} alt='' />
          </div>
          <div class={styles.info} onClick={this.handleJump}>Try Moonicon</div>
          <div class={styles.pattern}>
            <img src={getImageUrl('banner2')} alt='' />
          </div>
        </div>
        <NDivider />
        <About></About>
        <NDivider />
        <Footer></Footer>
      </div>
    )
  }
})
