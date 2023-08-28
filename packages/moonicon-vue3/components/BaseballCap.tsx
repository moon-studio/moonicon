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

const BaseballCap = defineComponent({
  name: 'BaseballCap',
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
        <path d="M5.40912 12.7582C5.40912 9.22523 8.44672 6.36125 12.1938 6.36125C15.941 6.36125 18.9786 9.22523 18.9786 12.7582V15.157H5.40912V12.7582Z" stroke={props.stroke} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/><path d="M9.64939 15.157C9.22535 13.7577 9.22535 6.36125 12.1937 6.36125C15.162 6.36125 14.95 13.5578 14.7379 15.157" stroke={props.stroke} stroke-width={props.strokeWidth}/><path d="M19.3511 15.157H4.64883C3.63385 15.157 3.20972 15.7126 3.20972 16.3979C3.20972 17.0832 3.63385 17.6387 4.64883 17.6387H19.3511C20.366 17.6387 20.8764 17.0832 20.8764 16.3979C20.8764 15.7126 20.366 15.157 19.3511 15.157Z" stroke={props.stroke} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    )
  }
})

export default BaseballCap
