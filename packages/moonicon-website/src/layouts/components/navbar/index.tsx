import { defineComponent } from 'vue'
import { NDivider, NMenu, NButton } from 'naive-ui'
import { getImageUrl } from '@/utils/common'
import { useI18n } from 'vue-i18n'
import { RouterLink } from 'vue-router'
import router from '../../../router'
import styles from './index.module.scss'

const Navbar = defineComponent({
  name: 'Navbar',
  setup() {
    const { locale, t } = useI18n()

    const menuOptions = [
      {
        label: () =>
          h(
            RouterLink,
            {
              to: {
                name: 'icon'
              }
            },
            { default: () => t('navbar.icon') }
          ),
        key: 'Icon'
      }
    ]

    const updateLanguage = () => {
      if (locale.value === 'en_US') {
        locale.value = 'zh_CN'
      } else {
        locale.value = 'en_US'
      }
    }

    return {
      menuOptions,
      updateLanguage
    }
  },
  render() {
    const { t } = useI18n()
    return (
      <div class={styles.container}>
        <div class={styles.navbar}>
          <img
            src={getImageUrl('Moonicon-logo')}
            class={styles.logo}
            onClick={() => router.push('/home')}
          ></img>
          <NMenu mode='horizontal' options={this.menuOptions} />
          <div class={styles.user}>
            <NButton onClick={this.updateLanguage}>
              {t('home.language')}
            </NButton>
          </div>
        </div>
        <NDivider />
      </div>
    )
  }
})

export default Navbar
