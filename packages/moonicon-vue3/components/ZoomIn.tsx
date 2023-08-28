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

const ZoomIn = defineComponent({
  name: 'ZoomIn',
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
        <path d="M7.5 10.5L13.5 10.5M7.5 10.5L13.5 10.5" stroke={props.stroke} stroke-width={props.strokeWidth} stroke-linecap="round"/><path d="M10.5 7.5L10.5 13.5M10.5 7.5L10.5 13.5" stroke={props.stroke} stroke-width={props.strokeWidth} stroke-linecap="round"/><path d="M15.8181 14.979L15.3938 14.5548L14.5453 15.4033L14.9695 15.8276L15.8181 14.979ZM19.9695 20.8276C20.2038 21.0619 20.5837 21.0619 20.8181 20.8276C21.0524 20.5932 21.0524 20.2133 20.8181 19.979L19.9695 20.8276ZM14.9695 15.8276L19.9695 20.8276L20.8181 19.979L15.8181 14.979L14.9695 15.8276Z" fill="black"/><circle cx="10.5" cy="10.5" r="6.5" stroke={props.stroke} stroke-width={props.strokeWidth}/>
      </svg>
    )
  }
})

export default ZoomIn
