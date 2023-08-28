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

const Celsius = defineComponent({
  name: 'Celsius',
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
        <path d="M19.2999 7.89981C19.2999 6.93322 18.4999 4.68567 15.2999 4.68567C13.3595 4.68567 11.2999 5.93069 11.2999 8.25051L11.2999 15.6325C11.2999 18.3265 13.9666 19 15.2999 19C18.4999 19 19.2999 16.755 19.2999 15.6325" stroke={props.stroke} stroke-width={props.strokeWidth} stroke-linecap="round"/><circle cx="6.84988" cy="6.57727" r="2.21375" stroke={props.stroke} stroke-width={props.strokeWidth} stroke-linecap="round"/>
      </svg>
    )
  }
})

export default Celsius
