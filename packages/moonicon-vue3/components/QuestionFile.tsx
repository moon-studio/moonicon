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

const QuestionFile = defineComponent({
  name: 'QuestionFile',
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
        <path d="M5 19.5V4.5C5 3.94772 5.44772 3.5 6 3.5H14.5858C14.851 3.5 15.1054 3.60536 15.2929 3.79289L18.7071 7.20711C18.8946 7.39464 19 7.649 19 7.91421V19.5C19 20.0523 18.5523 20.5 18 20.5H6C5.44772 20.5 5 20.0523 5 19.5Z" stroke={props.stroke} stroke-width={props.strokeWidth}/><path d="M12.0232 13.7173V12.313C13.0853 12.313 13.9463 11.6142 13.9463 10.2065C13.9463 8.79884 13.0853 8.1001 12.0232 8.1001C10.9611 8.1001 10.1001 8.66941 10.1001 10.0414" stroke={props.stroke} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/><circle cx="11.9999" cy="15.6" r="0.6" fill="black"/>
      </svg>
    )
  }
})

export default QuestionFile
