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

const PantiesOne = defineComponent({
  name: 'PantiesOne',
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
        <path d="M10.4999 16.7639H13.4999M10.4999 16.7639C11.3522 10.8964 7.88334 9.28234 3.99994 9.97027M10.4999 16.7639L3.99994 9.97027M13.4999 16.7639C12.7186 11.0619 14.7558 9.24636 19.9999 9.97027M13.4999 16.7639L19.9999 9.97027M3.99994 9.97027V8.32968C3.99994 7.7774 4.44765 7.32968 4.99994 7.32968H10.4999H13.4999H18.9999C19.5522 7.32968 19.9999 7.7774 19.9999 8.32968V9.97027" stroke={props.stroke} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    )
  }
})

export default PantiesOne
