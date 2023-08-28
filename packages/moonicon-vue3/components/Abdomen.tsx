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

const Abdomen = defineComponent({
  name: 'Abdomen',
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
        <path d="M5.49135 4.08334C6.67378 5.34139 7.26499 6.97534 7.26499 8.98522C7.26499 12.9217 3.06165 13.4743 3.86645 19.9167" stroke={props.stroke} stroke-width={props.strokeWidth} stroke-linecap="round"/><path d="M18.6447 4.08334C17.4623 5.34139 16.8711 6.97534 16.8711 8.98522C16.8711 12.9217 21.0744 13.4743 20.2696 19.9167" stroke={props.stroke} stroke-width={props.strokeWidth} stroke-linecap="round"/><path d="M12.063 12.6644H12.073" stroke={props.stroke} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/><path d="M4.80173 14.8487C7.52054 16.2532 9.98954 16.9554 12.2088 16.9554C14.428 16.9554 16.775 16.2532 19.2497 14.8487" stroke={props.stroke} stroke-width={props.strokeWidth} stroke-linecap="round"/>
      </svg>
    )
  }
})

export default Abdomen
