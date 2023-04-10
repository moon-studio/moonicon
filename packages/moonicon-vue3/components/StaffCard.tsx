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

const StaffCard = defineComponent({
  name: 'StaffCard',
  props,
  render() {
    const $props = this.$props
    
    return h(
      <defs>
        <g id="StaffCard">
          <path d="M10.5002 8.09846H4.4422C3.97847 8.09846 3.60254 8.48724 3.60254 8.96683V18.519C3.60254 18.9986 3.97847 19.3873 4.4422 19.3873H19.556C20.0198 19.3873 20.3957 18.9986 20.3957 18.519V8.96683C20.3957 8.48724 20.0198 8.09846 19.556 8.09846H13.5002M10.5002 8.09846V4.5L13.5002 4.5V8.09846M10.5002 8.09846H13.5002" stroke={$props.stroke} strokeWidth={$props.strokeWidth} stroke-linejoin="round"/>
<path d="M12 10.5H18" stroke={$props.stroke} strokeWidth={$props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 13.75H16" stroke={$props.stroke} strokeWidth={$props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 17H18" stroke={$props.stroke} strokeWidth={$props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8.5 10.5H7C6.44772 10.5 6 10.9477 6 11.5V15C6 15.5523 6.44772 16 7 16H8.5C9.05228 16 9.5 15.5523 9.5 15V11.5C9.5 10.9477 9.05228 10.5 8.5 10.5Z" stroke={$props.stroke} strokeWidth={$props.strokeWidth} stroke-linecap="round"/>

        </g>
      </defs>
    )
  }
})

export { StaffCard }
