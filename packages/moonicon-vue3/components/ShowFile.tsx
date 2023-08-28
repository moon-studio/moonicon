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

const ShowFile = defineComponent({
  name: 'ShowFile',
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
        <path d="M5 19.5V4.5C5 3.94772 5.44772 3.5 6 3.5H14.5858C14.851 3.5 15.1054 3.60536 15.2929 3.79289L18.7071 7.20711C18.8946 7.39464 19 7.649 19 7.91421V19.5C19 20.0523 18.5523 20.5 18 20.5H6C5.44772 20.5 5 20.0523 5 19.5Z" stroke={props.stroke} stroke-width={props.strokeWidth}/><path d="M12.1001 14.6001C14.5854 14.6001 16.6001 11.6001 16.6001 11.6001C16.6001 11.6001 14.5854 8.6001 12.1001 8.6001C9.6148 8.6001 7.6001 11.6001 7.6001 11.6001C7.6001 11.6001 9.6148 14.6001 12.1001 14.6001Z" stroke={props.stroke} stroke-width={props.strokeWidth} stroke-linejoin="round"/><path d="M12.1001 12.6001C12.6524 12.6001 13.1001 12.1524 13.1001 11.6001C13.1001 11.0478 12.6524 10.6001 12.1001 10.6001C11.5478 10.6001 11.1001 11.0478 11.1001 11.6001C11.1001 12.1524 11.5478 12.6001 12.1001 12.6001Z" fill="black"/>
      </svg>
    )
  }
})

export default ShowFile
