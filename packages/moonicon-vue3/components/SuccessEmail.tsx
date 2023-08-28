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

const SuccessEmail = defineComponent({
  name: 'SuccessEmail',
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
        <path d="M20.5253 11.9428V6.60001C20.5253 6.04772 20.0776 5.60001 19.5253 5.60001H12.0627H4.6001C4.04781 5.60001 3.6001 6.04772 3.6001 6.60001V11.9428V17.2855C3.6001 17.8378 4.04781 18.2855 4.6001 18.2855H12.0627" stroke={props.stroke} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/><path d="M4.02319 6.02286L11.4697 11.5062C11.8224 11.7658 12.303 11.7658 12.6556 11.5062L20.1021 6.02286" stroke={props.stroke} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/><path d="M14.5 16.5L15.7442 17.7442C16.1532 18.1532 16.8229 18.1309 17.2039 17.6956L20 14.5" stroke={props.stroke} stroke-width={props.strokeWidth} stroke-linecap="round"/>
      </svg>
    )
  }
})

export default SuccessEmail
