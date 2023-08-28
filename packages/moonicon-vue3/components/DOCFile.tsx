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

const DOCFile = defineComponent({
  name: 'DOCFile',
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
        <path d="M19 20.5H6C5.44772 20.5 5 20.0523 5 19.5V4.5C5 3.94772 5.44772 3.5 6 3.5H14.5858C14.851 3.5 15.1054 3.60536 15.2929 3.79289L18.7071 7.20711C18.8946 7.39464 19 7.649 19 7.91421V11V12.5" stroke={props.stroke} stroke-width={props.strokeWidth} stroke-linecap="round"/><path d="M8.6001 14.6001V18.6001" stroke={props.stroke} stroke-width={props.strokeWidth} stroke-linecap="round"/><path d="M8.6001 14.6001H9.4251C10.311 14.6001 10.7712 15.4955 10.7712 16.6001C10.7712 17.7046 10.2244 18.6001 9.4251 18.6001H8.6001" stroke={props.stroke} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/><path d="M13.6656 18.6001C14.4232 18.6001 14.7511 17.7047 14.7511 16.6001C14.7511 15.4955 14.5039 14.6001 13.6656 14.6001C12.8273 14.6001 12.5801 15.4955 12.5801 16.6001C12.5801 17.7047 12.7854 18.6001 13.6656 18.6001Z" stroke={props.stroke} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/><path d="M18.7316 14.6001H18.0079C17.2086 14.6001 16.5605 15.4955 16.5605 16.6001C16.5605 17.7046 17.2086 18.6001 18.0079 18.6001H18.7316" stroke={props.stroke} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    )
  }
})

export default DOCFile
