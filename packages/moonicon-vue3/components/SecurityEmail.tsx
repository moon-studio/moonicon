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

const SecurityEmail = defineComponent({
  name: 'SecurityEmail',
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
        <path d="M20.5253 11.9428V6.60001C20.5253 6.04772 20.0776 5.60001 19.5253 5.60001H12.0627H4.6001C4.04781 5.60001 3.6001 6.04772 3.6001 6.60001V11.9428V17.2855C3.6001 17.8378 4.04781 18.2855 4.6001 18.2855H12.0627" stroke={props.stroke} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/><path d="M4.02319 6.02286L11.4697 11.5062C11.8224 11.7658 12.303 11.7658 12.6556 11.5062L20.1021 6.02286" stroke={props.stroke} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/><path d="M20 15C20 14.5 19 13.5 17 13.5C16.1667 13.5 14 13.8 14 15C14 16.3333 15 19 17 19C17.8333 19 20 18.2 20 15Z" stroke={props.stroke} stroke-width={props.strokeWidth}/>
      </svg>
    )
  }
})

export default SecurityEmail
