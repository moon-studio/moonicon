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

const Right = defineComponent({
  name: 'Right',
  props,
  render() {
    const $props = this.$props
    
    return h(
      <defs>
        <g id="Right">
          <path d="M4 12H20M20 12L13 5M20 12L13 19" stroke={$props.stroke} stroke-width={$props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/>
        </g>
      </defs>
    )
  }
})

export { Right }
