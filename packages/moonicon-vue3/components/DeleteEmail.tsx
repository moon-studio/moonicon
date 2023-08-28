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

const DeleteEmail = defineComponent({
  name: 'DeleteEmail',
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
        <path d="M15.6695 12.9824H18.6695M17.1696 16.4134V18.4716M17.1696 14.6601H18.6696C19.2218 14.6601 19.6696 15.1078 19.6696 15.6601V18.9963C19.6696 19.5485 19.2218 19.9963 18.6696 19.9963H15.6696C15.1173 19.9963 14.6696 19.5485 14.6696 18.9963V15.6601C14.6696 15.1078 15.1173 14.6601 15.6696 14.6601H17.1696Z" stroke={props.stroke} stroke-width={props.strokeWidth} stroke-linecap="round"/><path d="M20.5253 11.9428V6.60001C20.5253 6.04772 20.0776 5.60001 19.5253 5.60001H12.0627H4.6001C4.04781 5.60001 3.6001 6.04772 3.6001 6.60001V11.9428V17.2855C3.6001 17.8378 4.04781 18.2855 4.6001 18.2855H12.0627" stroke={props.stroke} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/><path d="M4.02295 6.02286L11.4695 11.5062C11.8221 11.7658 12.3027 11.7658 12.6554 11.5062L20.1019 6.02286" stroke={props.stroke} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    )
  }
})

export default DeleteEmail
