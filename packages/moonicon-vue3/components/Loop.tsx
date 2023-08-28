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

const Loop = defineComponent({
  name: 'Loop',
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
        <path d="M4.6001 7.88572H14.3144C16.8391 7.88572 18.8858 9.93242 18.8858 12.4571M4.6001 7.88572L6.88581 5.60001M4.6001 7.88572L6.88581 10.1714" stroke={props.stroke} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/><path d="M19.4571 17.0286H9.74282C7.21809 17.0286 5.17139 14.9819 5.17139 12.4572M19.4571 17.0286L17.1714 19.3143M19.4571 17.0286L17.1714 14.7429" stroke={props.stroke} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    )
  }
})

export default Loop
