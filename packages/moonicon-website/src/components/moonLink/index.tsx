import styles from './index.module.scss'
import { computed } from 'vue'

export default defineComponent({
  name: 'MoonLink',
  props: {
    address: {
      type: String,
      default: undefined
    },
    label: {
      type: String,
      default: ''
    },
    vertical: {
      type: Boolean,
      default: true
    }
  },
  setup(props) {
    const routeToPath = () => {
      window.open(props.address, '_blank')
    }

    const computedClasses = computed(() => {
      let className = styles.moonLink

      if (!props.address) className += ` ${styles.disabledLink}`
      if (props.vertical) className += ` ${styles.verticalLink}`

      return className
    })

    return {
      routeToPath,
      computedClasses
    }
  },
  render() {
    return (
      <div class={this.computedClasses}>
        <span onClick={() => this.routeToPath()}>{this.label}</span>
      </div>
    )
  }
})
