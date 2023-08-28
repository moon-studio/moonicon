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

const DownloadFive = defineComponent({
  name: 'DownloadFive',
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
        <path d="M6.5 16.7439C4.75221 16.1262 3.5 14.4593 3.5 12.5C3.5 10.1141 5.35688 8.16181 7.70434 8.00956C8.35411 5.69617 10.479 4 13 4C15.9108 4 18.2934 6.26115 18.4873 9.12276C20.219 9.56236 21.5 11.1316 21.5 13C21.5 14.8215 20.2825 16.3586 18.6169 16.842" stroke={props.stroke} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/><path d="M12.5 11.5V20M12.5 20L16 17M12.5 20L9 17" stroke={props.stroke} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    )
  }
})

export default DownloadFive
