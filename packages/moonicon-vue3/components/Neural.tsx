import { defineComponent, h } from 'vue'
import type { PropType } from 'vue'

const props = {
  // fill color
  fill: {
    type: String as PropType<string>,
    default: '#fff'
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

const Neural = defineComponent({
  name: 'Neural',
  props,
  render() {
    const $props = this.$props
    
    return h(
      <defs>
        <g id="Neural">
          <path d="M15.0962 9.49988C19.4415 4.2449 14.1637 1.17379 10.5877 4.80647C9.62879 5.7806 8.22937 7.85659 6.55154 7.85659C4.8737 7.85659 4.36875 6.2398 4.52775 5.35659C4.63375 4.7678 4.9075 4.33225 5.349 4.05" stroke={$props.stroke} stroke-width={$props.strokeWidth} stroke-linecap="round"/><path d="M13.4583 12.6249C12.5378 12.6249 11.7916 13.3711 11.7916 14.2916C11.7916 15.212 12.5378 15.9583 13.4583 15.9583C14.3788 15.9583 15.125 15.212 15.125 14.2916C15.125 13.3711 14.3788 12.6249 13.4583 12.6249Z" stroke={$props.stroke} stroke-width={$props.strokeWidth} stroke-linecap="round" stroke-linejoin="bevel"/><path fill-rule="evenodd" clip-rule="evenodd" d="M13.4583 8.24994C12.6392 8.24994 12.2957 9.7241 11.5833 10.0195C10.8449 10.3257 9.74275 9.46298 9.18625 10.0195C8.62971 10.576 9.31358 11.8119 9.00738 12.5504C8.712 13.2627 7.41667 13.4724 7.41667 14.2916C7.41667 15.1107 8.89083 15.3086 9.18625 16.0209C9.49246 16.7594 8.62971 18.0072 9.18625 18.5637C9.74275 19.1202 11.056 18.2575 11.7945 18.5637C12.5068 18.8591 12.6392 20.3333 13.4583 20.3333C14.2775 20.3333 14.4983 18.6813 15.2106 18.3859C15.9491 18.0797 17.1739 19.1202 17.7304 18.5637C18.2869 18.0072 17.4242 16.905 17.7304 16.1666C18.0258 15.4543 19.5 15.1107 19.5 14.2916C19.5 13.4724 18.0258 13.2627 17.7304 12.5504C17.4242 11.8119 18.2869 10.576 17.7304 10.0195C17.1739 9.46298 15.9491 10.3257 15.2106 10.0195C14.4983 9.7241 14.2775 8.24994 13.4583 8.24994Z" stroke={$props.stroke} stroke-width={$props.strokeWidth} stroke-linecap="round" stroke-linejoin="bevel"/>
        </g>
      </defs>
    )
  }
})

export { Neural }
  