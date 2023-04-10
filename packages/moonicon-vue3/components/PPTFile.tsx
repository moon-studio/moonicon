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

const PPTFile = defineComponent({
  name: 'PPTFile',
  props,
  render() {
    const $props = this.$props
    
    return h(
      <defs>
        <g id="PPTFile">
          <path d="M19 20.5H6C5.44772 20.5 5 20.0523 5 19.5V4.5C5 3.94772 5.44772 3.5 6 3.5H14.5858C14.851 3.5 15.1054 3.60536 15.2929 3.79289L18.7071 7.20711C18.8946 7.39464 19 7.649 19 7.91421V11V12.5" stroke={$props.stroke} strokeWidth={$props.strokeWidth} stroke-linecap="round"/>
<path d="M9.6001 14.6001V18.0058" stroke={$props.stroke} strokeWidth={$props.strokeWidth} stroke-linecap="round"/>
<path d="M13.3716 14.6001V18.0058" stroke={$props.stroke} strokeWidth={$props.strokeWidth} stroke-linecap="round"/>
<path d="M18 14.6077V18.0223" stroke={$props.stroke} strokeWidth={$props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/>
<path d="M17 14.6077H18H19" stroke={$props.stroke} strokeWidth={$props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9.6001 14.6001H10.6287C11.1968 14.6001 11.6574 15.0575 11.6574 15.6218C11.6574 16.1861 11.1968 16.6435 10.6287 16.6435H9.6001" stroke={$props.stroke} strokeWidth={$props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/>
<path d="M13.3716 14.6001H14.4002C14.9683 14.6001 15.4288 15.0575 15.4288 15.6218C15.4288 16.1861 14.9683 16.6435 14.4002 16.6435H13.3716" stroke={$props.stroke} strokeWidth={$props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/>

        </g>
      </defs>
    )
  }
})

export { PPTFile }
