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

const TrendingDown = defineComponent({
  name: 'TrendingDown',
  props,
  render() {
    const $props = this.$props
    
    return h(
      <defs>
        <g id="TrendingDown">
          <path d="M20.25 16.5L13.8321 10.0821C13.4416 9.69158 12.8084 9.69158 12.4179 10.0821L10.0821 12.4179C9.69158 12.8084 9.05842 12.8084 8.66789 12.4179L3.75 7.5" stroke={$props.stroke} stroke-width={$props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/><path d="M15.75 16.5H20.25V12" stroke={$props.stroke} stroke-width={$props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/>
        </g>
      </defs>
    )
  }
})

export { TrendingDown }
