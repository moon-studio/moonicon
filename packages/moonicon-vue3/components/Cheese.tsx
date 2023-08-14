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

const Cheese = defineComponent({
  name: 'Cheese',
  props,
  render() {
    const $props = this.$props
    
    return h(
      <defs>
        <g id="Cheese">
          <path d="M3.79214 10.8542C3.79214 9.90413 11.2787 4.65873 13.3603 3.55811C13.6642 3.39744 14.037 3.34165 14.3821 3.55813C15.9877 4.56525 18.6048 7.1127 20.0803 8.76923" stroke={$props.stroke} stroke-width={$props.strokeWidth} stroke-linecap="round" stroke-linejoin="bevel"/><path d="M20.3123 9.37355C20.3123 8.79211 19.8719 8.52272 19.3814 8.59672C16.5346 9.0261 8.90864 10.1754 4.8852 10.5216C4.03132 10.615 3.68732 10.6356 3.68732 11.2543V19.5397C3.68732 19.8395 3.94936 20.0719 4.24704 20.0361L19.872 18.1564C20.1233 18.1262 20.3123 17.913 20.3123 17.66V9.37355Z" stroke={$props.stroke} stroke-width={$props.strokeWidth} stroke-linecap="square" stroke-linejoin="round"/><path d="M7.64423 15.9611H7.65423" stroke={$props.stroke} stroke-width={$props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/><path d="M10.3712 12.8311H10.3812" stroke={$props.stroke} stroke-width={$props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/><path d="M13.8226 15.4938H13.8326" stroke={$props.stroke} stroke-width={$props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/><path d="M16.0966 12.3418H16.1066" stroke={$props.stroke} stroke-width={$props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/>
        </g>
      </defs>
    )
  }
})

export { Cheese }
