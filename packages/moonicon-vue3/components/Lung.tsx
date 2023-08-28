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

const Lung = defineComponent({
  name: 'Lung',
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
        <path d="M9.27598 11.5262C9.14498 9.4271 8.61899 8.72579 7.69794 8.65111C6.21073 8.53051 3.93107 10.8298 3.25522 14.0611C2.57938 17.2924 2.91312 19.6071 3.79747 19.7633C4.68182 19.9196 5.96681 19.0091 6.57646 19.0091C7.18611 19.0091 9.29909 19.4499 9.29909 18.6515C9.29909 18.2581 9.29909 17.3035 9.29909 15.219" stroke={props.stroke} stroke-width={props.strokeWidth} stroke-linecap="round"/><path d="M14.7942 11.7323C14.9208 9.60325 15.4495 8.7263 16.3803 8.65111C17.8725 8.53051 20.1597 10.8298 20.8378 14.0611C21.5159 17.2924 21.181 19.6071 20.2938 19.7633C19.4065 19.9196 18.1172 19.0091 17.5055 19.0091C16.8939 19.0091 14.7738 19.4499 14.7738 18.6515C14.7738 18.2591 14.7738 17.2947 14.7738 15.219" stroke={props.stroke} stroke-width={props.strokeWidth} stroke-linecap="round"/><path d="M11.0424 4.57306V12.0661C11.0242 13.0209 10.5536 13.4516 8.97827 13.4516" stroke={props.stroke} stroke-width={props.strokeWidth} stroke-linecap="round"/><path d="M13 4.57V12.0631C13.0182 13.0179 13.4888 13.4486 15.0641 13.4486" stroke={props.stroke} stroke-width={props.strokeWidth} stroke-linecap="round"/>
      </svg>
    )
  }
})

export default Lung
