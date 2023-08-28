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

const CollectFile = defineComponent({
  name: 'CollectFile',
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
        <path d="M5 19.5V4.5C5 3.94772 5.44772 3.5 6 3.5H14.5858C14.851 3.5 15.1054 3.60536 15.2929 3.79289L18.7071 7.20711C18.8946 7.39464 19 7.649 19 7.91421V19.5C19 20.0523 18.5523 20.5 18 20.5H6C5.44772 20.5 5 20.0523 5 19.5Z" stroke={props.stroke} stroke-width={props.strokeWidth}/><path d="M10.65 9C9.73873 9 9 9.86083 9 10.9227C9 12.8454 10.95 14.5934 12 15C13.05 14.5934 15 12.8454 15 10.9227C15 9.86083 14.2613 9 13.35 9C12.792 9 12.2986 9.32284 12 9.81694C11.7014 9.32284 11.208 9 10.65 9Z" stroke={props.stroke} stroke-width={props.strokeWidth} stroke-linecap="square" stroke-linejoin="round"/>
      </svg>
    )
  }
})

export default CollectFile
