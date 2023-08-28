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

const CurrencyExchange = defineComponent({
  name: 'CurrencyExchange',
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
        <path d="M18.325 5.875L6.07501 18.125" stroke={props.stroke} stroke-width={props.strokeWidth} stroke-linecap="round"/><path d="M4.32501 4.125L6.95001 7.625L9.57501 4.125" stroke={props.stroke} stroke-width={props.strokeWidth} stroke-linecap="round"/><path d="M3.88751 7.625H10.0125" stroke={props.stroke} stroke-width={props.strokeWidth} stroke-linecap="round"/><path d="M3.88751 10.25H10.0125" stroke={props.stroke} stroke-width={props.strokeWidth} stroke-linecap="round"/><path d="M6.95001 7.625V12.875" stroke={props.stroke} stroke-width={props.strokeWidth} stroke-linecap="round"/><path d="M16.0702 12.875H19.075C19.6273 12.875 20.075 13.3227 20.075 13.875V18.875C20.075 19.4273 19.6273 19.875 19.075 19.875H12.325C11.7727 19.875 11.325 19.4273 11.325 18.875V17.3156" stroke={props.stroke} stroke-width={props.strokeWidth} stroke-linecap="round"/>
      </svg>
    )
  }
})

export default CurrencyExchange
