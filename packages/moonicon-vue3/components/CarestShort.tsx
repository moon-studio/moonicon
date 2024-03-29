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

const CarestShort = defineComponent({
  name: 'CarestShort',
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
        <path d="M7.25002 15.7139L11.9902 20.454L16.7303 15.7139" stroke={props.stroke} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/><path d="M7.25 8.34009L11.9902 3.59992L16.7303 8.34009" stroke={props.stroke} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    )
  }
})

export default CarestShort
