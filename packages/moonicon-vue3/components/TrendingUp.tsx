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

const TrendingUp = defineComponent({
  name: 'TrendingUp',
  props,
  render() {
    const $props = this.$props
    
    return h(
      <defs>
        <g id="TrendingUp">
          <path d="M20.25 7.5L13.8321 13.9179C13.4416 14.3084 12.8084 14.3084 12.4179 13.9179L10.0821 11.5821C9.69158 11.1916 9.05842 11.1916 8.66789 11.5821L3.75 16.5" stroke={$props.stroke} strokeWidth={$props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/><path d="M15.75 7.5H20.25V12" stroke={$props.stroke} strokeWidth={$props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/>
        </g>
      </defs>
    )
  }
})

export { TrendingUp }
