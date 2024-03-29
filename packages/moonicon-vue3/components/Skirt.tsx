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

const Skirt = defineComponent({
  name: 'Skirt',
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
        <path d="M17 5.74996L14.9167 3.66663H9.08335L7.00002 5.74996L4.08335 16.5833C4.08335 16.5833 5.33348 20.3333 12 20.3333C18.6666 20.3333 19.9167 16.5833 19.9167 16.5833L17 5.74996Z" stroke={props.stroke} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/><path d="M16.5834 19.5C15.7636 17.6388 15.4139 16.5453 15.0001 14.5" stroke={props.stroke} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    )
  }
})

export default Skirt
