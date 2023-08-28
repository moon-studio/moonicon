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

const MessageSeven = defineComponent({
  name: 'MessageSeven',
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
        <path d="M20.25 14.75C20.25 15.2362 20.0568 15.7025 19.713 16.0464C19.3692 16.3902 18.9029 16.5833 18.4167 16.5833H7.83088C7.56566 16.5833 7.31131 16.6887 7.12377 16.8762L3.75 20.25V5.58333C3.75 5.0971 3.94315 4.63079 4.28697 4.28697C4.63079 3.94315 5.0971 3.75 5.58333 3.75H18.4167C18.9029 3.75 19.3692 3.94315 19.713 4.28697C20.0568 4.63079 20.25 5.0971 20.25 5.58333V14.75Z" stroke={props.stroke} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/><line x1="8.6" y1="8.4" x2="15.4" y2="8.4" stroke={props.stroke} stroke-width={props.strokeWidth} stroke-linecap="round"/><line x1="8.6" y1="11.9" x2="12.4" y2="11.9" stroke={props.stroke} stroke-width={props.strokeWidth} stroke-linecap="round"/>
      </svg>
    )
  }
})

export default MessageSeven
