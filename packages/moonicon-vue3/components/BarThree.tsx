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

const BarThree = defineComponent({
  name: 'BarThree',
  props,
  render() {
    const $props = this.$props
    
    return h(
      <defs>
        <g id="BarThree">
          <path d="M4.49286 19.5117H19.2845" stroke={$props.stroke} strokeWidth={$props.strokeWidth} stroke-linecap="round"/>
<path d="M4.00009 3.50002L5.66904 10.1719M5.66904 10.1719C6.03883 11.2927 10.1374 11.5729 12.1404 11.5729M5.66904 10.1719C2.71071 10.1719 3.51192 14.8418 4.28232 17.1768C4.65211 18.2976 4.12825 19.8231 3.82009 20.4457" stroke={$props.stroke} strokeWidth={$props.strokeWidth} stroke-linecap="round"/>
<path d="M20 3.5L18.3601 10.1719M18.3601 10.1719C17.9903 11.2927 13.8918 11.5729 11.8888 11.5729M18.3601 10.1719C21.3185 10.1719 20.5173 14.8418 19.7469 17.1768C19.3771 18.2975 19.9009 19.8231 20.2091 20.4457" stroke={$props.stroke} strokeWidth={$props.strokeWidth} stroke-linecap="round"/>

        </g>
      </defs>
    )
  }
})

export { BarThree }
