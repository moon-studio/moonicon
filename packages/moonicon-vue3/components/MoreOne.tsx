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

const MoreOne = defineComponent({
  name: 'MoreOne',
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
        <ellipse cx="5.3241" cy="12" rx="1" ry="1.00006" stroke={props.stroke} stroke-width={props.strokeWidth}/><ellipse cx="11.9999" cy="12" rx="1" ry="1.00006" stroke={props.stroke} stroke-width={props.strokeWidth}/><ellipse cx="18.6759" cy="12" rx="1" ry="1.00006" stroke={props.stroke} stroke-width={props.strokeWidth}/>
      </svg>
    )
  }
})

export default MoreOne
