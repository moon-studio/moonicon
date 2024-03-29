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

const Subscription = defineComponent({
  name: 'Subscription',
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
        <path d="M17.4999 3.55002H6.49988C5.94759 3.55002 5.49988 3.99773 5.49988 4.55002V19.4458C5.49988 20.2884 6.47808 20.7533 7.13139 20.2212L11.3684 16.7703C11.7361 16.4707 12.2637 16.4707 12.6314 16.7703L16.8684 20.2212C17.5217 20.7533 18.4999 20.2884 18.4999 19.4458V4.55002C18.4999 3.99773 18.0522 3.55002 17.4999 3.55002Z" stroke={props.stroke} stroke-width={props.strokeWidth}/><path d="M8.49988 7L15.4033 7" stroke={props.stroke} stroke-width={props.strokeWidth} stroke-linecap="round"/>
      </svg>
    )
  }
})

export default Subscription
