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

const Laboratory = defineComponent({
  name: 'Laboratory',
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
        <path d="M8.5 4.5V9.32668C8.5 9.44117 8.47815 9.55462 8.43563 9.66093L4.9937 18.2657C4.75723 18.8569 5.19261 19.5 5.82933 19.5H18.1707C18.8074 19.5 19.2428 18.8569 19.0063 18.2657L15.5644 9.66093C15.5218 9.55462 15.5 9.44117 15.5 9.32668V4.5M5.5 4.5H18.5M10 13H14M8.5 16.5H15.5" stroke={props.stroke} stroke-width={props.strokeWidth} stroke-linecap="round"/>
      </svg>
    )
  }
})

export default Laboratory
