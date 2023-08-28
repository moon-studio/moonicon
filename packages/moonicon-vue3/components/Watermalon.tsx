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

const Watermalon = defineComponent({
  name: 'Watermalon',
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
        <path d="M12.033 10.5785V11.8261" stroke={props.stroke} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="bevel"/><path d="M9.00011 9.69595L8.1416 10.5782" stroke={props.stroke} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="bevel"/><path d="M15.0657 9.69612L15.9242 10.5783" stroke={props.stroke} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="bevel"/><path d="M11.9999 17.979C17.6647 17.979 22.2568 13.3869 22.2568 7.72214H1.74304C1.74304 13.3869 6.33521 17.979 11.9999 17.979Z" stroke={props.stroke} stroke-width={props.strokeWidth} stroke-linejoin="round"/><path d="M20.2354 7.72214C20.2354 12.2704 16.5483 15.9576 12 15.9576C7.45166 15.9576 3.76453 12.2704 3.76453 7.72214" stroke={props.stroke} stroke-width={props.strokeWidth} stroke-linejoin="round"/>
      </svg>
    )
  }
})

export default Watermalon
