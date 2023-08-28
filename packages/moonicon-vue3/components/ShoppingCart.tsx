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

const ShoppingCart = defineComponent({
  name: 'ShoppingCart',
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
        <path d="M4.79999 3.70001C5.20654 3.70001 5.53561 3.70001 5.80033 3.70001C6.35261 3.70001 6.79999 4.14772 6.79999 4.7V14.8329V16.7C6.79999 17.2523 7.2477 17.7 7.79999 17.7H19.3445M6.79999 6.70001H18.9112C19.5803 6.70001 20.0606 7.34434 19.8696 7.98556L18.504 12.5687C18.3926 12.9426 18.074 13.2176 17.6879 13.273L8.88915 14.5373" stroke={props.stroke} stroke-width={props.strokeWidth} stroke-linecap="round"/><path d="M7.38428 20H7.39428" stroke={props.stroke} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/><path d="M18.8958 20H18.9058" stroke={props.stroke} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    )
  }
})

export default ShoppingCart
