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

const LogInTwo = defineComponent({
  name: 'LogInTwo',
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
        <path d="M9.25 8V6C9.25 5.46957 9.44315 4.96086 9.78697 4.58579C10.1308 4.21071 10.5971 4 11.0833 4H18.4167C18.9029 4 19.3692 4.21071 19.713 4.58579C20.0568 4.96086 20.25 5.46957 20.25 6V18C20.25 18.5304 20.0568 19.0391 19.713 19.4142C19.3692 19.7893 18.9029 20 18.4167 20H11.45C10.4375 20 9.25 19.1045 9.25 18V16" stroke={props.stroke} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/><path d="M13.5 15.75L17.25 12L13.5 8.25M3.75 12H16.5" stroke={props.stroke} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    )
  }
})

export default LogInTwo
