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

const Banana = defineComponent({
  name: 'Banana',
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
        <path d="M11.132 19.7696C7.12468 18.8935 2.67067 14.075 4.37255 9.66888L4.98137 8.17268C5.04291 8.02146 5.06648 7.85747 5.05003 7.69504L4.81331 5.35703C4.76077 4.83812 5.11587 4.36597 5.62899 4.27249L6.04627 4.19647C6.62518 4.091 7.1686 4.50621 7.22429 5.09201C7.70988 10.2002 8.44109 13.8978 13.3101 14.7166C15.0373 15.0071 16.8306 14.9125 18.3613 14.4206C19.1095 14.1802 19.9999 14.6918 19.9999 15.4777V15.5556L19.5474 16.7033C18.746 18.8935 15.1393 20.6457 11.132 19.7696Z" stroke={props.stroke} stroke-width={props.strokeWidth} stroke-linecap="square" stroke-linejoin="round"/>
      </svg>
    )
  }
})

export default Banana
