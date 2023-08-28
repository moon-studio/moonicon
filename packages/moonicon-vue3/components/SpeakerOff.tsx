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

const SpeakerOff = defineComponent({
  name: 'SpeakerOff',
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
        <path d="M12.7389 5.99462V18.0025C12.7389 18.4136 12.2705 18.649 11.9406 18.4038L8.03096 15.4979H5.5C4.94772 15.4979 4.5 15.0502 4.5 14.4979V9.49929C4.5 8.94701 4.94772 8.49929 5.5 8.49929H8.03096L11.9406 5.59333C12.2705 5.34814 12.7389 5.5836 12.7389 5.99462Z" stroke={props.stroke} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/><path d="M15.7554 9.75058L18.0048 12M20.2542 14.2494L18.0048 12M18.0048 12L20.2542 9.75058M18.0048 12L15.7554 14.2494" stroke={props.stroke} stroke-width={props.strokeWidth} stroke-linecap="round"/>
      </svg>
    )
  }
})

export default SpeakerOff
