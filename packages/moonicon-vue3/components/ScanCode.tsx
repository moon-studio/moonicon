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

const ScanCode = defineComponent({
  name: 'ScanCode',
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
        <path d="M7.73333 4H5C4.44772 4 4 4.44771 4 5V7.73333M16.2667 4H19C19.5523 4 20 4.44772 20 5V7.73333M20 16.2667V19C20 19.5523 19.5523 20 19 20H16.2667M7.73333 20H5C4.44771 20 4 19.5523 4 19V16.2667" stroke={props.stroke} stroke-width={props.strokeWidth} stroke-linecap="round"/><line x1="5.6" y1="12.15" x2="18.4" y2="12.15" stroke={props.stroke} stroke-width={props.strokeWidth} stroke-linecap="round"/>
      </svg>
    )
  }
})

export default ScanCode
