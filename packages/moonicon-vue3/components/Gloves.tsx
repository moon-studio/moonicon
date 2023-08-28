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

const Gloves = defineComponent({
  name: 'Gloves',
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
        <path d="M17.9999 17.5H18.267C18.8193 17.5 19.267 17.9477 19.267 18.5V19C19.267 19.5523 18.8193 20 18.267 20H7.49994C6.94765 20 6.49994 19.5523 6.49994 19V18.5C6.49994 17.9477 6.94765 17.5 7.49994 17.5H7.99994M17.9999 17.5V5.5C17.9999 4.11929 16.8807 3 15.4999 3H10.4999C9.11923 3 7.99994 4.11929 7.99994 5.5V8.5M17.9999 17.5H7.99994M7.99994 17.5L5.68621 14.2608C5.56506 14.0912 5.49994 13.888 5.49994 13.6795V9.5C5.49994 8.94772 5.94765 8.5 6.49994 8.5H7.99994M7.99994 8.5V11.25" stroke={props.stroke} stroke-width={props.strokeWidth} stroke-linecap="round"/>
      </svg>
    )
  }
})

export default Gloves
