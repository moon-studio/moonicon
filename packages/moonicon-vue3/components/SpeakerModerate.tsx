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

const SpeakerModerate = defineComponent({
  name: 'SpeakerModerate',
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
        <path d="M12.7389 5V18.9972L8.03096 15.4979H5.5C4.94772 15.4979 4.5 15.0502 4.5 14.4979V9.49929C4.5 8.94701 4.94772 8.49929 5.5 8.49929H8.03096L12.7389 5Z" stroke={props.stroke} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/><path d="M16.99 5.22055C20.4507 9.12353 20.4507 14.8722 16.99 18.7752" stroke={props.stroke} stroke-width={props.strokeWidth} stroke-linecap="round"/><rect width="24" height="24" fill="white"/>
      </svg>
    )
  }
})

export default SpeakerModerate
