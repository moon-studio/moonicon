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

const Sunrise = defineComponent({
  name: 'Sunrise',
  props,
  render() {
    const $props = this.$props
    
    return h(
      <defs>
        <g id="Sunrise">
          <path d="M15.7499 16.5C15.7499 15.5054 15.3549 14.5516 14.6516 13.8483C13.9483 13.1451 12.9945 12.75 11.9999 12.75C11.0054 12.75 10.0515 13.1451 9.34829 13.8483C8.64503 14.5516 8.24994 15.5054 8.24994 16.5" stroke={$props.stroke} strokeWidth={$props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/>
<path d="M11.9999 4.5V9.75" stroke={$props.stroke} strokeWidth={$props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6.16495 10.665L7.22995 11.73" stroke={$props.stroke} strokeWidth={$props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3.74994 16.5H5.24994" stroke={$props.stroke} strokeWidth={$props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/>
<path d="M18.7499 16.5H20.2499" stroke={$props.stroke} strokeWidth={$props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/>
<path d="M16.7699 11.73L17.8349 10.665" stroke={$props.stroke} strokeWidth={$props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/>
<path d="M20.2499 19.5H3.74994" stroke={$props.stroke} strokeWidth={$props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8.99994 7.5L11.9999 4.5L14.9999 7.5" stroke={$props.stroke} strokeWidth={$props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/>

        </g>
      </defs>
    )
  }
})

export { Sunrise }
