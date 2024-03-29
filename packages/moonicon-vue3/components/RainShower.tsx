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

const RainShower = defineComponent({
  name: 'RainShower',
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
        <path d="M13.4999 13.5L11.4999 18.5M17.4999 13.5L15.4999 18.5" stroke={props.stroke} stroke-width={props.strokeWidth} stroke-linecap="round"/><path d="M19.9999 11.5C19.458 10.6901 18.0206 9.66 16.9999 9.66V9.66C16.9843 9.66007 16.9712 9.64823 16.9695 9.63273C16.7089 7.3059 14.8072 5.5 12.4999 5.5C10.7643 5.5 9.25816 6.52192 8.50747 8.01877C8.32059 8.39141 7.91682 8.62 7.49994 8.62V8.62C5.56694 8.62 3.99994 10.2497 3.99994 12.26C3.99994 14.2175 5.48567 15.8141 7.34833 15.8966C7.34922 15.8967 7.34994 15.8974 7.34994 15.8983V15.8983C7.34994 15.8992 7.35069 15.9 7.35161 15.9H8.67494" stroke={props.stroke} stroke-width={props.strokeWidth} stroke-linecap="round"/>
      </svg>
    )
  }
})

export default RainShower
