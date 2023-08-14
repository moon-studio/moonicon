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

const DescTwo = defineComponent({
  name: 'DescTwo',
  props,
  render() {
    const $props = this.$props
    
    return h(
      <defs>
        <g id="DescTwo">
          <path d="M10.5 4V20L14.5 15.5" stroke={$props.stroke} stroke-width={$props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/>
        </g>
      </defs>
    )
  }
})

export { DescTwo }
