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

const PDFFile = defineComponent({
  name: 'PDFFile',
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
        <path d="M19 20.5H6C5.44772 20.5 5 20.0523 5 19.5V4.5C5 3.94772 5.44772 3.5 6 3.5H14.5858C14.851 3.5 15.1054 3.60536 15.2929 3.79289L18.7071 7.20711C18.8946 7.39464 19 7.649 19 7.91421V11V12.5" stroke={props.stroke} stroke-width={props.strokeWidth} stroke-linecap="round"/><path d="M12.7156 14.6001V18.6001" stroke={props.stroke} stroke-width={props.strokeWidth} stroke-linecap="round"/><path d="M8.6001 14.6001V18.6001" stroke={props.stroke} stroke-width={props.strokeWidth} stroke-linecap="round"/><path d="M16.8313 18.6001V14.6001H18.702" stroke={props.stroke} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/><path d="M16.8313 17.1001H18.702" stroke={props.stroke} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/><path d="M8.6001 14.6001H9.90962C10.4262 14.6001 10.845 15.1597 10.845 15.8501C10.845 16.5404 10.4262 17.1001 9.90962 17.1001H8.6001" stroke={props.stroke} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/><path d="M12.7156 14.6001H13.4639C14.2904 14.6001 14.9605 15.4955 14.9605 16.6001C14.9605 17.7046 14.2904 18.6001 13.4639 18.6001H12.7156" stroke={props.stroke} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    )
  }
})

export default PDFFile
