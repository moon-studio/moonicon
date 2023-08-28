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

const Mic = defineComponent({
  name: 'Mic',
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
        <path d="M12 3.75C11.4033 3.75 10.831 3.98705 10.409 4.40901C9.98705 4.83097 9.75 5.40326 9.75 6V12C9.75 12.5967 9.98705 13.169 10.409 13.591C10.831 14.0129 11.4033 14.25 12 14.25C12.5967 14.25 13.169 14.0129 13.591 13.591C14.0129 13.169 14.25 12.5967 14.25 12V6C14.25 5.40326 14.0129 4.83097 13.591 4.40901C13.169 3.98705 12.5967 3.75 12 3.75Z" stroke={props.stroke} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/><path d="M17.25 10.5V12C17.25 13.3924 16.6969 14.7277 15.7123 15.7123C14.7277 16.6969 13.3924 17.25 12 17.25C10.6076 17.25 9.27226 16.6969 8.28769 15.7123C7.30312 14.7277 6.75 13.3924 6.75 12V10.5" stroke={props.stroke} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/><path d="M12 17.25V20.25" stroke={props.stroke} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/><path d="M9 20.25H15" stroke={props.stroke} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    )
  }
})

export default Mic
