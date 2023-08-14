import { defineComponent, h } from 'vue'
import type { PropType } from 'vue'
  
const props = {
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

const DescOne = defineComponent({
  name: 'DescOne',
  props,
  render() {
    const $props = this.$props
    
    return h(
      <defs>
        <g id="DescOne">
          <path d="M20.5 6.5H12.5M12.5 12H18.5M16.5 17.5H12.5M7.5 4V20M7.5 20L10.5 17M7.5 20L4.5 17" stroke={$props.stroke} stroke-width={$props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/>
        </g>
      </defs>
    )
  }
})

export { DescOne }
