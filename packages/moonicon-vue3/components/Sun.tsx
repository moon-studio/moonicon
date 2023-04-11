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

const Sun = defineComponent({
  name: 'Sun',
  props,
  render() {
    const $props = this.$props
    
    return h(
      <defs>
        <g id="Sun">
          <path d="M11.9999 15.75C14.071 15.75 15.7499 14.0711 15.7499 12C15.7499 9.92893 14.071 8.25 11.9999 8.25C9.92887 8.25 8.24994 9.92893 8.24994 12C8.24994 14.0711 9.92887 15.75 11.9999 15.75Z" stroke={$props.stroke} strokeWidth={$props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/><path d="M11.9999 3.75V5.25" stroke={$props.stroke} strokeWidth={$props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/><path d="M11.9999 18.75V20.25" stroke={$props.stroke} strokeWidth={$props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/><path d="M6.16493 6.16504L7.22993 7.23004" stroke={$props.stroke} strokeWidth={$props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/><path d="M16.7699 16.77L17.8349 17.835" stroke={$props.stroke} strokeWidth={$props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/><path d="M3.74994 12H5.24994" stroke={$props.stroke} strokeWidth={$props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/><path d="M18.7499 12H20.2499" stroke={$props.stroke} strokeWidth={$props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/><path d="M6.16493 17.835L7.22993 16.77" stroke={$props.stroke} strokeWidth={$props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/><path d="M16.7699 7.23004L17.8349 6.16504" stroke={$props.stroke} strokeWidth={$props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/>
        </g>
      </defs>
    )
  }
})

export { Sun }
