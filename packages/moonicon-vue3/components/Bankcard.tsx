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

const Bankcard = defineComponent({
  name: 'Bankcard',
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
        <path d="M20.3334 6.16665C20.3334 5.70641 19.9603 5.33331 19.5 5.33331H4.50004C4.03979 5.33331 3.66671 5.70641 3.66671 6.16665V17.8333C3.66671 18.2936 4.03979 18.6666 4.50004 18.6666H19.5C19.9603 18.6666 20.3334 18.2936 20.3334 17.8333V6.16665Z" stroke={props.stroke} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="bevel"/><path d="M20.3334 8.66669H3.66671" stroke={props.stroke} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="bevel"/><path d="M11.1666 15.3333H6.99996" stroke={props.stroke} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="bevel"/>
      </svg>
    )
  }
})

export default Bankcard
