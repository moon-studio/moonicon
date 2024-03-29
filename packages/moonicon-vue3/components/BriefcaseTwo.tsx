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

const BriefcaseTwo = defineComponent({
  name: 'BriefcaseTwo',
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
        <path d="M18.6666 7.83325H5.33326C4.41279 7.83325 3.6666 8.57944 3.6666 9.49992V17.8333C3.6666 18.7537 4.41279 19.4999 5.33326 19.4999H18.6666C19.5871 19.4999 20.3333 18.7537 20.3333 17.8333V9.49992C20.3333 8.57944 19.5871 7.83325 18.6666 7.83325Z" stroke={props.stroke} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/><path d="M15.3333 19.5V6.16667C15.3333 5.72464 15.1577 5.30072 14.8451 4.98816C14.5325 4.67559 14.1086 4.5 13.6666 4.5H10.3333C9.89123 4.5 9.46731 4.67559 9.15475 4.98816C8.84219 5.30072 8.6666 5.72464 8.6666 6.16667V19.5" stroke={props.stroke} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    )
  }
})

export default BriefcaseTwo
