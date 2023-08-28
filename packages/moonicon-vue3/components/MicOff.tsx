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

const MicOff = defineComponent({
  name: 'MicOff',
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
        <path d="M3.75 3.75L20.25 20.25" stroke={props.stroke} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/><path d="M9.75 9.75001V12C9.75039 12.4447 9.88256 12.8794 10.1298 13.249C10.3771 13.6187 10.7283 13.9067 11.1392 14.0769C11.5501 14.247 12.0022 14.2916 12.4384 14.2049C12.8746 14.1183 13.2753 13.9043 13.59 13.59M14.25 10.005V6.00001C14.2506 5.44203 14.0438 4.90375 13.6698 4.48966C13.2958 4.07557 12.7813 3.81521 12.2261 3.75914C11.671 3.70306 11.1148 3.85526 10.6655 4.1862C10.2163 4.51713 9.90604 5.00319 9.795 5.55001" stroke={props.stroke} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/><path d="M15.5 16C14.7678 16.7473 14.079 16.9713 13.0541 17.1814C12.0292 17.3916 10.9649 17.2907 9.99777 16.8917C9.03062 16.4928 8.20472 15.814 7.62602 14.9424C7.04733 14.0708 6.74224 13.0462 6.7499 12V10.5M17.2499 10.5V12C17.2496 12.3093 17.222 12.618 17.1674 12.9225" stroke={props.stroke} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/><path d="M12 17.5V20.25" stroke={props.stroke} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/><path d="M9 20.25H15" stroke={props.stroke} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    )
  }
})

export default MicOff
