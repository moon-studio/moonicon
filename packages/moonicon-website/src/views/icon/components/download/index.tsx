import styles from './index.module.scss'
import { useI18n } from 'vue-i18n'
import { NButton } from 'naive-ui'
import JSZip from 'jszip'

export default defineComponent({
  name: 'Download',
  setup() {
    const handleDownload = () => {
      // 获取所有svg
      const data = document.querySelectorAll('svg')
      /**
       * data的数据结构[{},{}]
       * {id/name: "xxx", svgHTML: "<svg>..."}
       * 然后修改下下面的代码就可以了
       */
      // 创建zip包
      const zip = new JSZip()
      data.forEach((obj: any) => {
        // 修改下这里的代码就可以了，like this
        // zip.file(obj.id + '.svg', obj.svgHTML);
        // zip包里面不断塞svg文件
        zip.file(Math.random() + '.svg', obj.outerHTML)
      })
      // 生成zip文件并下载
      zip
        .generateAsync({
          type: 'blob'
        })
        .then((content: Blob | MediaSource) => {
          // 下载的文件名
          const filename = 'docment.zip'
          // 创建隐藏的可下载链接
          const eleLink = document.createElement('a')
          eleLink.download = filename
          eleLink.style.display = 'none'
          // 下载内容转变成blob地址
          eleLink.href = URL.createObjectURL(content)
          // 触发点击
          document.body.appendChild(eleLink)
          eleLink.click()
          // 然后移除
          document.body.removeChild(eleLink)
        })
    }

    return { handleDownload }
  },
  render() {
    const { t } = useI18n()
    return (
      <div class={styles.iconDownload}>
        <NButton
          class='m-block'
          type={'primary'}
          size='large'
          onClick={this.handleDownload}
        >
          {t('icon.download-svg')}
        </NButton>
      </div>
    )
  }
})
