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

const Filter = defineComponent({
  name: 'Filter',
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
        <path d="M15.0019 19.9981V10.9359C15.0019 10.6568 15.1185 10.3904 15.3236 10.2011L19.6225 6.23287C20.2914 5.61542 19.8546 4.49806 18.9442 4.49806H6.05954C5.14923 4.49806 4.71236 5.61542 5.38126 6.23287L9.68017 10.2011C9.88525 10.3904 10.0019 10.6568 10.0019 10.9359V17.9981" stroke={props.stroke} stroke-width={props.strokeWidth} stroke-linecap="round"/>
      </svg>
    )
  }
})

export default Filter
