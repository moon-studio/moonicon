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

const RainFreezing = defineComponent({
  name: 'RainFreezing',
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
        <path d="M13.2999 13.3L12.2999 15.9M11.2999 18.5L11.5499 17.85M15.3341 13.3L14.3341 15.9M13.3341 18.5L13.5841 17.85M8.41178 15.9H7.35161C7.35069 15.9 7.34994 15.8992 7.34994 15.8983V15.8983C7.34994 15.8974 7.34922 15.8967 7.34833 15.8966C5.48567 15.8141 3.99994 14.2175 3.99994 12.26C3.99994 10.2497 5.56694 8.62 7.49994 8.62V8.62C7.91682 8.62 8.32059 8.39141 8.50747 8.01877C9.25816 6.52192 10.7643 5.5 12.4999 5.5C14.8072 5.5 16.7089 7.3059 16.9695 9.63273C16.9712 9.64823 16.9843 9.66007 16.9999 9.66V9.66C18.6568 9.66 19.9999 11.0569 19.9999 12.78C19.9999 14.4502 18.7381 15.8138 17.1518 15.8961C17.1508 15.8961 17.1499 15.897 17.1499 15.898V15.898C17.1499 15.8991 17.1491 15.9 17.148 15.9H16.0509M11.2658 13.3L10.2658 15.9M9.26581 18.5L9.51581 17.85" stroke={props.stroke} stroke-width={props.strokeWidth} stroke-linecap="round"/>
      </svg>
    )
  }
})

export default RainFreezing
