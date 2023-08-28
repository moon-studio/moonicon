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

const Bone = defineComponent({
  name: 'Bone',
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
        <path fill-rule="evenodd" clip-rule="evenodd" d="M12.144 19.2824C11.8845 19.1799 11.594 19.1905 11.3427 19.3116L9.26622 20.3118C8.60228 20.6316 7.83226 20.1478 7.83226 19.4108V12.808C7.83226 12.4345 7.62115 12.0945 7.29791 11.9073C4.22385 10.1274 3.50467 7.92751 4.30847 6.1858C5.58109 3.4281 7.64151 3.60992 9.08051 4.28405C9.47878 4.47063 9.83155 4.79611 10.1388 5.26051C10.6686 6.06107 12.1452 6.2593 12.8188 5.57542C13.8475 4.53115 15.0745 4.00901 16.4999 4.00901C19.9342 4.00901 20.2108 8.06033 19.7188 9.05249C19.2582 9.98121 18.821 10.5097 16.9806 11.9019C16.7311 12.0907 16.5813 12.3838 16.5784 12.6966L16.5137 19.5473C16.507 20.2489 15.799 20.7257 15.1464 20.468L12.144 19.2824Z" stroke={props.stroke} stroke-width={props.strokeWidth} stroke-linecap="round"/><path d="M10.75 12.6167L10.75 15.964" stroke={props.stroke} stroke-width={props.strokeWidth} stroke-linecap="round"/>
      </svg>
    )
  }
})

export default Bone
