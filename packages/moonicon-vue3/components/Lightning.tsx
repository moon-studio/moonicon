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

const Lightning = defineComponent({
  name: 'Lightning',
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
        <path d="M15.3443 4.967C15.563 3.94557 14.2663 3.31499 13.598 4.11775L6.34578 12.828C5.80674 13.4754 6.26077 14.4585 7.10316 14.4678L9.78259 14.4976C9.89959 14.4989 9.99049 14.5999 9.97948 14.7164L9.51079 19.6746C9.41737 20.6628 10.6653 21.1687 11.2864 20.3944L17.696 12.4035C18.221 11.7489 17.755 10.7778 16.9159 10.7778H14.3473C14.22 10.7778 14.1251 10.6604 14.1517 10.5359L15.3443 4.967Z" stroke={props.stroke} stroke-width={props.strokeWidth}/>
      </svg>
    )
  }
})

export default Lightning
