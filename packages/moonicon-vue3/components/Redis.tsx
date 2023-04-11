import { defineComponent, h } from 'vue'
import type { PropType } from 'vue'

const props = {
  // fill color
  fill: {
    type: String as PropType<string>,
    default: '#fff'
  },
  // stroke color
  stroke: {
    type: String as PropType<string>,
    default: '#333'
  },
  // recommended value 1.2
  strokeWidth: {
    type: [Number, String] as PropType<number | string>,
    default: 1.2
  }
}

const Redis = defineComponent({
  name: 'Redis',
  props,
  render() {
    const $props = this.$props
    
    return h(
      <defs>
        <g id="Redis">
          <path d="M20.4917 12.1792L11.8431 16.3835L3.19456 12.1792M20.4917 16.0386L11.8431 20.243L3.19456 16.0386M16.1674 6.19842L11.8431 3.90512L7.51885 6.19842M16.1674 6.19842L20.4917 8.49172L16.1674 10.5939M16.1674 6.19842L7.51885 10.5939M7.51885 10.5939L11.8431 12.6961L16.1674 10.5939M7.51885 10.5939L3.19456 8.49172L7.51885 6.19842M16.1674 10.5939L7.51885 6.19842" stroke={$props.stroke} strokeWidth={$props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/>
        </g>
      </defs>
    )
  }
})

export { Redis }
