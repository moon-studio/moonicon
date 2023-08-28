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

const Snowflake = defineComponent({
  name: 'Snowflake',
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
        <path d="M12.005 3.25903V20.759M14.2596 5.13403C13.5792 5.54417 12.7995 5.7603 12.005 5.75903C11.2104 5.7603 10.4307 5.54417 9.75026 5.13403M9.75026 18.884C10.4312 18.4751 11.2106 18.259 12.005 18.259C12.7993 18.259 13.5787 18.4751 14.2596 18.884M19.5827 7.63403L4.42722 16.384M19.0858 10.5247C18.391 10.1393 17.8141 9.57223 17.417 8.88411C17.0199 8.19598 16.8175 7.41278 16.8315 6.61841M4.92409 13.4934C5.61889 13.8787 6.19575 14.4458 6.59287 15.134C6.98998 15.8221 7.19239 16.6053 7.17839 17.3997M4.42722 7.63403L19.5827 16.384M4.92409 10.5247C5.61889 10.1393 6.19575 9.57223 6.59287 8.88411C6.98998 8.19598 7.19239 7.41278 7.17839 6.61841M19.0858 13.4934C18.391 13.8787 17.8141 14.4458 17.417 15.134C17.0199 15.8221 16.8175 16.6053 16.8315 17.3997" stroke={props.stroke} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    )
  }
})

export default Snowflake
