import { defineComponent, h } from 'vue'
import type { PropType } from 'vue'
  
const props = {
  size: {
    type: [Number, String] as PropType<number | string>,
    default: '24'
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

const SettingThree = defineComponent({
  name: 'SettingThree',
  props,
  setup(props) {
    return () => (
      <svg
        width={props.size}
        height={props.size}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path d="M14.5 4V6M14.5 8V6M14.5 6H3.5" stroke={props.stroke} stroke-width={props.strokeWidth} stroke-linecap="round"/><path d="M17 6H19.5" stroke={props.stroke} stroke-width={props.strokeWidth} stroke-linecap="round"/><path d="M8.5 14V12M8.5 10V12M8.5 12L19.5 12" stroke={props.stroke} stroke-width={props.strokeWidth} stroke-linecap="round"/><path d="M6 12H3.5" stroke={props.stroke} stroke-width={props.strokeWidth} stroke-linecap="round"/><path d="M14.5 16V18M14.5 20V18M14.5 18H3.5" stroke={props.stroke} stroke-width={props.strokeWidth} stroke-linecap="round"/><path d="M17 18H19.5" stroke={props.stroke} stroke-width={props.strokeWidth} stroke-linecap="round"/>
      </svg>
    )
  }
})

export default SettingThree
