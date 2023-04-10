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

const SwapVertical = defineComponent({
  name: 'SwapVertical',
  props,
  render() {
    const $props = this.$props
    
    return h(
      <defs>
        <g id="SwapVertical">
          <path d="M20.125 13.875L15.75 19.204M15.75 19.204L11.375 13.875M15.75 19.204V4.7395M3.875 10.125L8.25 4.7395M8.25 4.7395L12.625 10.125M8.25 4.7395V19.204" stroke={$props.stroke} strokeWidth={$props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/>

        </g>
      </defs>
    )
  }
})

export { SwapVertical }
