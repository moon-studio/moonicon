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

const IncomingEmail = defineComponent({
  name: 'IncomingEmail',
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
        <path d="M20.5253 12.0244V6.68161C20.5253 6.12932 20.0776 5.68161 19.5253 5.68161H12.0627H4.6001C4.04781 5.68161 3.6001 6.12933 3.6001 6.68161V12.0244V17.3671C3.6001 17.9194 4.04781 18.3671 4.6001 18.3671H12.0627" stroke={props.stroke} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/><path d="M20.5251 16.2528H14.6013" stroke={props.stroke} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/><path d="M16.717 14.1386L14.6013 16.2528L16.717 18.3671" stroke={props.stroke} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/><path d="M4.02319 6.10446L11.4697 11.5878C11.8224 11.8474 12.303 11.8474 12.6556 11.5878L20.1021 6.10446" stroke={props.stroke} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    )
  }
})

export default IncomingEmail
