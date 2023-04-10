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

const BloodTransfusion = defineComponent({
  name: 'BloodTransfusion',
  props,
  render() {
    const $props = this.$props
    
    return h(
      <defs>
        <g id="BloodTransfusion">
          <path d="M11.5103 12.1947H13.4879M12.5 12.1947V14M12.5 10.5H13.9C13.9552 10.5 14 10.4552 14 10.4V6.1C14 6.04477 13.9552 6 13.9 6H11.1C11.0448 6 11 6.04477 11 6.1V10.4C11 10.4552 11.0448 10.5 11.1 10.5H12.5Z" stroke={$props.stroke} strokeWidth={$props.strokeWidth} stroke-linecap="round"/>
<path d="M4.75585 20.2164H8.81685M4.75585 20.2164V3.90524C4.75585 3.85001 4.80062 3.80524 4.85585 3.80524H12.3702M4.75585 20.2164H3.7406" stroke={$props.stroke} strokeWidth={$props.strokeWidth} stroke-linecap="round"/>
<path d="M19.9 18H8.1C8.04477 18 8 17.9552 8 17.9V16.5C8 16.2239 8.22386 16 8.5 16H19.5C19.7761 16 20 16.2239 20 16.5V17.9C20 17.9552 19.9552 18 19.9 18Z" stroke={$props.stroke} strokeWidth={$props.strokeWidth} stroke-linecap="round"/>

        </g>
      </defs>
    )
  }
})

export { BloodTransfusion }
