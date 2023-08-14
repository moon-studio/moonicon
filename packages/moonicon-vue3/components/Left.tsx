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

const Left = defineComponent({
  name: 'Left',
  props,
  render() {
    const $props = this.$props
    
    return h(
      <defs>
        <g id="Left">
          <path d="M20 12H4M4 12L11 5M4 12L11 19" stroke={$props.stroke} stroke-width={$props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/>
        </g>
      </defs>
    )
  }
})

export { Left }
