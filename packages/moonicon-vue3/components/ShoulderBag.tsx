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

const ShoulderBag = defineComponent({
  name: 'ShoulderBag',
  props,
  render() {
    const $props = this.$props
    
    return h(
      <defs>
        <g id="ShoulderBag">
          <path d="M8.02637 13.0217L9.85855 16.6906C10.0278 17.0296 10.3742 17.2438 10.7532 17.2438H13.0603C13.4236 17.2438 13.7584 17.0467 13.9347 16.729L15.9919 13.0217" stroke={$props.stroke} stroke-width={$props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/><path d="M18.8485 12.7856H5.16962L6.30953 20.6545H17.7086L18.8485 12.7856Z" stroke={$props.stroke} stroke-width={$props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/><path d="M15.1951 12.7857C15.1951 9.04696 13.2394 3.62817 12.0089 3.62817C10.4916 3.62817 8.82269 9.04696 8.82269 12.7857" stroke={$props.stroke} stroke-width={$props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/>
        </g>
      </defs>
    )
  }
})

export { ShoulderBag }
  