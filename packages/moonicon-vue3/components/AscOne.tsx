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

const AscOne = defineComponent({
  name: 'AscOne',
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
        <path d="M16.5 6.5H12.5M12.5 12H18.5M20.5 17.5H16.5H12.5M7.5 4L4.5 7M7.5 4L10.5 7M7.5 4V20" stroke={props.stroke} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    )
  }
})

export default AscOne
