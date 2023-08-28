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

const AudioFile = defineComponent({
  name: 'AudioFile',
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
        <path d="M5 19.5V4.5C5 3.94772 5.44772 3.5 6 3.5H14.5858C14.851 3.5 15.1054 3.60536 15.2929 3.79289L18.7071 7.20711C18.8946 7.39464 19 7.649 19 7.91421V19.5C19 20.0523 18.5523 20.5 18 20.5H6C5.44772 20.5 5 20.0523 5 19.5Z" stroke={props.stroke} stroke-width={props.strokeWidth}/><path d="M15.3583 8.13842C15.6556 7.99209 15.778 7.63244 15.6317 7.33513C15.4854 7.03782 15.1257 6.91544 14.8284 7.06177L15.3583 8.13842ZM12.7618 14.0934V14.6934H13.9618V14.0934H12.7618ZM14.8284 7.06177L13.6552 7.6392L14.1852 8.71586L15.3583 8.13842L14.8284 7.06177ZM12.7618 9.07474V14.0934H13.9618V9.07474H12.7618ZM13.6552 7.6392C13.1083 7.90843 12.7618 8.46509 12.7618 9.07474H13.9618C13.9618 8.92233 14.0484 8.78316 14.1852 8.71586L13.6552 7.6392Z" fill="black"/><path d="M10.981 17.1236C12.2959 17.1236 13.3619 16.0576 13.3619 14.7427C13.3619 13.4278 12.2959 12.3618 10.981 12.3618C9.66606 12.3618 8.6001 13.4278 8.6001 14.7427C8.6001 16.0576 9.66606 17.1236 10.981 17.1236Z" stroke={props.stroke} stroke-width={props.strokeWidth} stroke-linecap="square" stroke-linejoin="round"/>
      </svg>
    )
  }
})

export default AudioFile
