import {
  NLayout,
  NLayoutHeader,
  NLayoutContent,
  NConfigProvider,
  zhCN,
  dateZhCN
} from 'naive-ui'
import Navbar from './components/navbar'
import themeList from '../theme'

const Content = defineComponent({
  name: 'Content',
  setup() {
    return {}
  },
  render() {
    return (
      <NConfigProvider
        locale={zhCN}
        date-locale={dateZhCN}
        theme-overrides={themeList.light}
      >
        <NLayoutHeader>
          <Navbar />
        </NLayoutHeader>
        <NLayout position='absolute' style='top: 80px'>
          <NLayoutContent
            native-scrollbar={false}
            style='padding: 0 64px 0 64px'
            contentStyle={'height: 100%'}
          >
            <router-view />
          </NLayoutContent>
        </NLayout>
      </NConfigProvider>
    )
  }
})

export default Content
