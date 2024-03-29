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

const Store = defineComponent({
  name: 'Store',
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
        <path d="M6 10.5V19C6 19.5523 6.44772 20 7 20H13.5C14.0523 20 14.5 19.5523 14.5 19V12.5M19 20V10.5M5.943 10.5H19.057C19.7552 10.5 20.2385 9.80263 19.9933 9.14888L19.2433 7.14888C19.097 6.75857 18.7238 6.5 18.307 6.5H6.693C6.27616 6.5 5.90304 6.75857 5.75667 7.14888L5.00667 9.14888C4.76151 9.80263 5.24479 10.5 5.943 10.5Z" stroke={props.stroke} stroke-width={props.strokeWidth} stroke-linecap="round"/><line x1="6.1" y1="3.90409" x2="18.9" y2="3.90409" stroke={props.stroke} stroke-width={props.strokeWidth} stroke-linecap="round"/>
      </svg>
    )
  }
})

export default Store
