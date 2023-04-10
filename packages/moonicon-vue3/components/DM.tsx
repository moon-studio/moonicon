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

const DM = defineComponent({
  name: 'DM',
  props,
  render() {
    const $props = this.$props
    
    return h(
      <defs>
        <g id="DM">
          <path d="M11.175 5.2773C15.4046 3.62975 19.4939 4.08119 20.9314 6.58763C22.1691 8.74572 21.0991 11.8313 18.5067 14.4466M13.2272 17.9929C8.82688 19.8726 4.47323 19.4861 2.98024 16.8829C1.66038 14.5815 2.98314 11.2218 5.9595 8.5061C6.98561 16.715 13.2364 11.8134 13.2364 17.9701M11.1664 5.28347C11.1664 11.4401 17.4172 6.74498 18.4433 14.4408" stroke={$props.stroke} strokeWidth={$props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8.60974 6.60471C8.60974 14.8136 15.7925 8.65692 15.7925 16.3527" stroke={$props.stroke} strokeWidth={$props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/>

        </g>
      </defs>
    )
  }
})

export { DM }
