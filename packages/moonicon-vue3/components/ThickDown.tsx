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

const ThickDown = defineComponent({
  name: 'ThickDown',
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
        <path d="M12.7886 19.8887L19.2406 11.6148C19.7527 10.9582 19.2848 9.9999 18.4521 9.9999L15.4 9.9999L15.4 5.8999C15.4 5.34762 14.9523 4.8999 14.4 4.8999L9.6 4.8999C9.04771 4.8999 8.6 5.34762 8.6 5.8999L8.6 9.9999L5.54793 9.9999C4.71519 9.9999 4.24727 10.9582 4.75936 11.6148L11.2114 19.8887C11.6118 20.4021 12.3882 20.4021 12.7886 19.8887Z" stroke={props.stroke} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    )
  }
})

export default ThickDown
