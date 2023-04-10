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

const Orange = defineComponent({
  name: 'Orange',
  props,
  render() {
    const $props = this.$props
    
    return h(
      <defs>
        <g id="Orange">
          <path d="M4.20823 12.5384C4.20823 17.0948 6.95826 20.2666 11.9999 20.2666C17.0416 20.2666 19.7916 17.0948 19.7916 12.5384C19.7916 10.8516 19.2854 9.2831 18.4166 7.97639C16.9385 5.75348 14.8695 5.2205 11.9999 5.2205C9.13032 5.2205 7.06127 5.75348 5.58323 7.97639C4.71446 9.2831 4.20823 10.8516 4.20823 12.5384Z" stroke={$props.stroke} strokeWidth={$props.strokeWidth} stroke-linecap="square" stroke-linejoin="bevel"/>
<path d="M15.5703 9.88467H15.5803" stroke={$props.stroke} strokeWidth={$props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/>
<path d="M16.2952 14.2063H16.3052" stroke={$props.stroke} strokeWidth={$props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/>
<path d="M13.7141 16.5971H13.7241" stroke={$props.stroke} strokeWidth={$props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/>
<path d="M11.4645 5.20473L10.987 4.73004C10.5945 4.33985 10.5936 3.7051 10.9849 3.31377L11.2928 3.0059C11.6833 2.61538 12.3165 2.61538 12.707 3.0059L13.017 3.31583C13.4075 3.70636 13.4075 4.33952 13.017 4.73005L12.5423 5.20473" stroke={$props.stroke} strokeWidth={$props.strokeWidth} stroke-linecap="round" stroke-linejoin="bevel"/>

        </g>
      </defs>
    )
  }
})

export { Orange }
