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

const ThickRight = defineComponent({
  name: 'ThickRight',
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
        <path d="M19.7608 12.8137L10.5813 19.3705C9.91939 19.8433 9.00002 19.3702 9.00002 18.5568L9.00002 15.4L4.90002 15.4C4.34774 15.4 3.90002 14.9523 3.90002 14.4L3.90002 9.6C3.90002 9.04771 4.34774 8.6 4.90002 8.6L9.00002 8.6L9.00002 5.44319C9.00002 4.62982 9.91939 4.15669 10.5813 4.62945L19.7608 11.1863C20.3191 11.5851 20.3191 12.4149 19.7608 12.8137Z" stroke={props.stroke} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    )
  }
})

export default ThickRight
