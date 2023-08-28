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

const EmailAttachment = defineComponent({
  name: 'EmailAttachment',
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
        <path d="M20.5253 11.6428V6.30005C20.5253 5.74776 20.0776 5.30005 19.5253 5.30005H12.0627H4.6001C4.04781 5.30005 3.6001 5.74776 3.6001 6.30005V11.6428V16.9856C3.6001 17.5379 4.04781 17.9856 4.6001 17.9856H12.0627" stroke={props.stroke} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/><path d="M4.02319 5.7229L11.4697 11.2062C11.8224 11.4659 12.303 11.4659 12.6556 11.2062L20.1021 5.7229" stroke={props.stroke} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/><path d="M14.4366 14.9119L14.224 15.1245C13.5196 15.8289 13.513 16.9645 14.2093 17.6608C14.9056 18.3571 16.0411 18.3505 16.7456 17.646L16.9581 17.4334" stroke={props.stroke} stroke-width={props.strokeWidth} stroke-linecap="square" stroke-linejoin="round"/><path d="M16.1375 13.2112L16.35 12.9986C17.0545 12.2941 18.19 12.2875 18.8863 12.9838C19.5826 13.6801 19.576 14.8157 18.8716 15.5201L18.659 15.7327" stroke={props.stroke} stroke-width={props.strokeWidth} stroke-linecap="square" stroke-linejoin="round"/><path d="M15.6975 16.1727L17.3982 14.472" stroke={props.stroke} stroke-width={props.strokeWidth} stroke-linecap="square" stroke-linejoin="round"/>
      </svg>
    )
  }
})

export default EmailAttachment
