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

const AudioFoloder = defineComponent({
  name: 'AudioFoloder',
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
        <path d="M14.3106 9.45776L13.4455 9.88358C13.1036 10.0518 12.8871 10.3998 12.8871 10.7808V14.5924" stroke={props.stroke} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/><path d="M10.9299 17.0089C12.0109 17.0089 12.8872 16.1326 12.8872 15.0516C12.8872 13.9706 12.0109 13.0942 10.9299 13.0942C9.84886 13.0942 8.97253 13.9706 8.97253 15.0516C8.97253 16.1326 9.84886 17.0089 10.9299 17.0089Z" stroke={props.stroke} stroke-width={props.strokeWidth} stroke-linecap="square" stroke-linejoin="round"/><path d="M4.0835 5.33333C4.0835 4.8731 4.45659 4.5 4.91683 4.5H9.91683L12.0002 7H19.0835C19.5437 7 19.9168 7.37308 19.9168 7.83333V18.6667C19.9168 19.1269 19.5437 19.5 19.0835 19.5H4.91683C4.45659 19.5 4.0835 19.1269 4.0835 18.6667V5.33333Z" stroke={props.stroke} stroke-width={props.strokeWidth} stroke-linejoin="round"/>
      </svg>
    )
  }
})

export default AudioFoloder
