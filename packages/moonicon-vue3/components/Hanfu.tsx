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

const Hanfu = defineComponent({
  name: 'Hanfu',
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
        <path d="M5.64487 6.17087C5.712 5.90236 5.88742 5.67367 6.12937 5.53925L9.27358 3.79247C9.42214 3.70994 9.58928 3.66663 9.75923 3.66663H14.241C14.4109 3.66663 14.5781 3.70994 14.7266 3.79247L17.8708 5.53925C18.1128 5.67367 18.2882 5.90236 18.3553 6.17087L19.7222 11.6384C19.8359 12.0931 19.6185 12.5658 19.1993 12.7754L17.1362 13.8069C16.7974 13.9763 16.5834 14.3226 16.5834 14.7013V19.3333C16.5834 19.8856 16.1357 20.3333 15.5834 20.3333H8.41677C7.86448 20.3333 7.41677 19.8856 7.41677 19.3333V14.7013C7.41677 14.3226 7.20277 13.9763 6.86398 13.8069L4.80092 12.7754C4.3817 12.5658 4.16431 12.0931 4.27799 11.6384L5.64487 6.17087Z" stroke={props.stroke} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/><path d="M8.99994 4L11.9999 8.04167" stroke={props.stroke} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/><path d="M15 4L12 8.04167L7.41669 14.0833" stroke={props.stroke} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    )
  }
})

export default Hanfu
