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

const LongTShirt = defineComponent({
  name: 'LongTShirt',
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
        <path d="M17.4167 9.08329V18.4166M17.4167 18.4166V19.3333C17.4167 19.8856 16.969 20.3333 16.4167 20.3333H7.58335C7.03107 20.3333 6.58335 19.8856 6.58335 19.3333V18.4166M17.4167 18.4166H19.3334C19.8856 18.4166 20.3334 17.9689 20.3334 17.4166V9.08329C20.3334 7.83329 19.5 6.37496 18.25 5.33329C17.1623 4.4269 15.1283 3.83598 14.6183 3.69779C14.5394 3.67641 14.4587 3.66663 14.3769 3.66663H9.62313C9.54136 3.66663 9.46067 3.67641 9.38175 3.69779C8.87179 3.83598 6.83769 4.4269 5.75002 5.33329C4.50002 6.37496 3.66669 7.83329 3.66669 9.08329V17.4166C3.66669 17.9689 4.1144 18.4166 4.66669 18.4166H6.58335M6.58335 18.4166V9.08329" stroke={props.stroke} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/><path d="M15.4999 4C15.4999 5.38071 13.3806 7 11.9999 7C10.6192 7 8.49994 5.38071 8.49994 4" stroke={props.stroke} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    )
  }
})

export default LongTShirt
