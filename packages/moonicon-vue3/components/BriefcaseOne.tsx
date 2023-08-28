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

const BriefcaseOne = defineComponent({
  name: 'BriefcaseOne',
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
        <path d="M7.83319 7.83325C7.83319 6.45254 8.95248 5.33325 10.3332 5.33325H14.0832C15.4639 5.33325 16.5832 6.45254 16.5832 7.83325V8.66659H7.83319V7.83325Z" stroke={props.stroke} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/><path d="M3.66669 12.4167L11.7979 14.4495C11.9306 14.4827 12.0694 14.4827 12.2021 14.4495L20.3334 12.4167V17.8334C20.3334 18.2937 19.9603 18.6667 19.5 18.6667H4.50002C4.03978 18.6667 3.66669 18.2937 3.66669 17.8334V12.4167Z" stroke={props.stroke} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/><path d="M20.3334 13.2501V9.50008C20.3334 9.03983 19.9603 8.66675 19.5 8.66675H4.50002C4.03978 8.66675 3.66669 9.03983 3.66669 9.50008V13.2501" stroke={props.stroke} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/><path d="M11.9999 14V11.5M11.9999 11.5H9.99994M11.9999 11.5H13.9999" stroke={props.stroke} stroke-width={props.strokeWidth} stroke-linecap="round"/>
      </svg>
    )
  }
})

export default BriefcaseOne
