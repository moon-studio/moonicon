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

const ReadEmailTwo = defineComponent({
  name: 'ReadEmailTwo',
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
        <path d="M20.4093 9.76871L20.3856 19.9899L4.59937 19.9783C4.04737 19.9779 3.6001 19.5303 3.6001 18.9783V14.594V9.76683C3.6001 9.42083 3.77896 9.09941 4.07299 8.91703L11.4733 4.32675C11.796 4.12659 12.2042 4.12647 12.5271 4.32646L19.9359 8.9163C20.2309 9.09906 20.4101 9.42169 20.4093 9.76871Z" stroke={props.stroke} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/><path d="M4.02026 9.56921L11.4727 14.2588C11.7982 14.4636 12.2123 14.4636 12.5378 14.2588L19.9902 9.56921" stroke={props.stroke} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    )
  }
})

export default ReadEmailTwo
