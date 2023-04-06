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

const SortTwo = defineComponent({
  name: 'SortTwo',
  props,
  render() {
    const $props = this.$props
    
    return h(
      <defs>
        <g id="SortTwo">
          <path d="M10 19.5V4.5L6 8.5M15 4.5V19.5L19 15.5" stroke={$props.stroke} stroke-width={$props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/>
        </g>
      </defs>
    )
  }
})

export { SortTwo }
  