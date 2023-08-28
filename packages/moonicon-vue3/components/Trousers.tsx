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

const Trousers = defineComponent({
  name: 'Trousers',
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
        <path d="M14.9999 20.3334H19.4999L17.8333 3.66669H6.16661L4.49994 20.3334H8.99994L11.9999 9.91669L14.9999 20.3334Z" stroke={props.stroke} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/><path d="M11.9999 3.66669V7.50002" stroke={props.stroke} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/><path d="M9.08344 3.66669C9.08344 3.66669 9.08344 6.16669 8.25011 7.00002C7.41677 7.83335 5.99994 9.00002 5.99994 9.00002" stroke={props.stroke} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/><path d="M14.9166 3.66669C14.9166 3.66669 14.9166 6.16669 15.75 7.00002C16.5833 7.83335 18 9.00002 18 9.00002" stroke={props.stroke} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    )
  }
})

export default Trousers
