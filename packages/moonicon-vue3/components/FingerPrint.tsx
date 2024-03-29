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

const FingerPrint = defineComponent({
  name: 'FingerPrint',
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
        <path d="M8.67343 4.67463C9.78282 3.9323 11.1132 3.5 12.5435 3.5C16.4192 3.5 19.5611 6.67421 19.5611 10.5898C19.5611 13.3495 19.0411 15.9865 18.0943 18.406M6.68856 6.67993C5.95379 7.80073 5.52589 9.14477 5.52589 10.5898C5.52589 11.9772 5.13173 13.2715 4.44995 14.3645M6.31082 17.7287C8.00367 15.8415 9.03468 13.3373 9.03468 10.5898C9.03468 8.632 10.6056 7.04489 12.5435 7.04489C14.4813 7.04489 16.0523 8.632 16.0523 10.5898C16.0523 11.0879 16.0322 11.5812 15.9923 12.0688M12.5438 10.5898C12.5438 14.1088 11.2749 17.3284 9.17425 19.8071M15.3814 15.4622C14.8688 17.2772 14.0771 18.9733 13.0561 20.5" stroke={props.stroke} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    )
  }
})

export default FingerPrint
