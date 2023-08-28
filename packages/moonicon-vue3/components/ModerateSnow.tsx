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

const ModerateSnow = defineComponent({
  name: 'ModerateSnow',
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
        <path d="M7.34994 15.9V15.9C7.34994 15.8982 7.34848 15.8967 7.34664 15.8966C5.48477 15.8131 3.99994 14.2169 3.99994 12.26C3.99994 10.2497 5.56694 8.62 7.49994 8.62V8.62C7.91682 8.62 8.32059 8.39141 8.50747 8.01877C9.25816 6.52192 10.7643 5.5 12.4999 5.5C14.8072 5.5 16.7089 7.3059 16.9695 9.63273C16.9712 9.64823 16.9843 9.66007 16.9999 9.66V9.66C18.6568 9.66 19.9999 11.0569 19.9999 12.78C19.9999 14.4495 18.7391 15.8127 17.1538 15.896C17.1516 15.8961 17.1499 15.8979 17.1499 15.9V15.9M8.96977 16.6095L11.4275 15.1905M11.4275 16.6095L8.9698 15.1905M10.1988 14.481L10.1988 17.319M13.1629 16.6095L15.6206 15.1905M15.6206 16.6095L13.1629 15.1905M14.3919 14.481L14.3918 17.319" stroke={props.stroke} stroke-width={props.strokeWidth} stroke-linecap="round"/>
      </svg>
    )
  }
})

export default ModerateSnow
