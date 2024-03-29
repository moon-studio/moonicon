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

const OperatingRoom = defineComponent({
  name: 'OperatingRoom',
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
        <path d="M9 16.5V21M17 16.5V21" stroke={props.stroke} stroke-width={props.strokeWidth} stroke-linecap="round"/><path d="M7.86469 6.91421C7.58854 6.43592 7.75242 5.82433 8.23071 5.54819L10.8913 4.01211C11.3696 3.73596 11.9812 3.89984 12.2573 4.37813L12.7573 5.24416L8.36468 7.78024L7.86469 6.91421Z" stroke={props.stroke} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/><path d="M4.65887 3.00001L7.96295 3C8.26599 3 8.54869 3.15251 8.7151 3.40576L9.59332 4.74227" stroke={props.stroke} stroke-width={props.strokeWidth} stroke-linecap="round"/><path d="M19.6589 14.5C20.2112 14.5 20.6589 14.9477 20.6589 15.5V15.5C20.6589 16.0523 20.2112 16.5 19.6589 16.5H8.58436C8.30386 16.5 8.02649 16.441 7.77028 16.3268L4.3237 14.7909C3.79301 14.5545 3.57488 13.917 3.84942 13.405L3.88254 13.3432C4.12978 12.8821 4.69065 12.6895 5.16899 12.9015L8.38928 14.3285C8.64444 14.4416 8.92045 14.5 9.19955 14.5H19.6589Z" stroke={props.stroke} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/><path d="M18.7994 13V11.6385L16 11.2323L13.2006 11.6385L13.2006 13" stroke={props.stroke} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/><circle cx="16" cy="8.19806" r="1.5" stroke={props.stroke} stroke-width={props.strokeWidth} stroke-linecap="round"/>
      </svg>
    )
  }
})

export default OperatingRoom
