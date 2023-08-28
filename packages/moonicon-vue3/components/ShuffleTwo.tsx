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

const ShuffleTwo = defineComponent({
  name: 'ShuffleTwo',
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
        <path d="M19.4481 16.2692H17.2336C12.2509 16.2692 11.6972 7.65384 4.5 7.65384M19.4481 16.2692L17.2336 18.4231M19.4481 16.2692L17.2336 14.1154" stroke={props.stroke} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/><path d="M19.4481 7.80461H17.2336C12.2509 7.80461 11.6972 16.42 4.5 16.42M19.4481 7.80461L17.2336 5.65077M19.4481 7.80461L17.2336 9.95846" stroke={props.stroke} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    )
  }
})

export default ShuffleTwo
