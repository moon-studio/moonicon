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

const DownloadEmail = defineComponent({
  name: 'DownloadEmail',
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
        <path d="M20.5253 11.9428V6.60001C20.5253 6.04772 20.0776 5.60001 19.5253 5.60001H12.0627H4.6001C4.04781 5.60001 3.6001 6.04772 3.6001 6.60001V11.9428V17.2855C3.6001 17.8378 4.04781 18.2855 4.6001 18.2855H12.0627" stroke={props.stroke} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/><path d="M17.0854 13L17.0854 18.9238" stroke={props.stroke} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/><path d="M15 16.808L17.1143 18.9236L19.2285 16.808" stroke={props.stroke} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/><path d="M4.02295 6.02286L11.4695 11.5062C11.8221 11.7658 12.3027 11.7658 12.6554 11.5062L20.1019 6.02286" stroke={props.stroke} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    )
  }
})

export default DownloadEmail
