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

const SlippersTwo = defineComponent({
  name: 'SlippersTwo',
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
        <path d="M20.3718 13.1332H3.61398V16.376H20.3718V13.1332Z" stroke={props.stroke} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/><path d="M19.0423 9.91583C20.3718 11.7543 20.3718 13.1331 20.3718 13.1331H8.85079C8.85079 13.1331 8.85097 10.6053 8.85097 9.45622C8.85097 8.30718 9.51571 6.92833 11.0666 6.69852C12.6174 6.46871 16.8818 6.92833 19.0423 9.91583Z" stroke={props.stroke} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    )
  }
})

export default SlippersTwo
