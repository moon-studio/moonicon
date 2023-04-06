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

const SwapHorizontal = defineComponent({
  name: 'SwapHorizontal',
  props,
  render() {
    const $props = this.$props
    
    return h(
      <defs>
        <g id="SwapHorizontal">
          <path d="M13.875 3.875L19.204 8.25M19.204 8.25L13.875 12.625M19.204 8.25H4.7395M10.125 20.125L4.7395 15.75M4.7395 15.75L10.125 11.375M4.7395 15.75H19.204" stroke={$props.stroke} stroke-width={$props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/>
        </g>
      </defs>
    )
  }
})

export { SwapHorizontal }
  