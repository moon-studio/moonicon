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

const ChevronUp = defineComponent({
  name: 'ChevronUp',
  props,
  render() {
    const $props = this.$props
    
    return h(
      <defs>
        <g id="ChevronUp">
          <path d="M5 16L12 9L19 16" stroke={$props.stroke} stroke-width={$props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/>
        </g>
      </defs>
    )
  }
})

export { ChevronUp }
