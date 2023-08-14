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

const Resume = defineComponent({
  name: 'Resume',
  props,
  render() {
    const $props = this.$props
    
    return h(
      <defs>
        <g id="Resume">
          <path d="M9 18.1295V5.87052C9 5.48462 9.41861 5.24419 9.75193 5.43863L20.2596 11.5681C20.5904 11.761 20.5904 12.239 20.2596 12.4319L9.75194 18.5614C9.41861 18.7558 9 18.5154 9 18.1295Z" stroke={$props.stroke} stroke-width={$props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/><path d="M5 5V19" stroke={$props.stroke} stroke-width={$props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/>
        </g>
      </defs>
    )
  }
})

export { Resume }
