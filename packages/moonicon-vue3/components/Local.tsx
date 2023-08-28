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

const Local = defineComponent({
  name: 'Local',
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
        <path d="M11.3896 20.1556C11.7403 20.4794 12.2663 20.4794 12.617 20.1556C14.2171 18.6785 18.3933 14.3972 18.3933 9.94992C18.3933 6.44431 15.5324 3.60248 12.0033 3.60248C8.47426 3.60248 5.6134 6.44431 5.6134 9.94992C5.6134 14.3971 9.78954 18.6785 11.3896 20.1556Z" stroke={props.stroke} stroke-width={props.strokeWidth} stroke-linejoin="bevel"/><path d="M12.0032 12.4889C13.4149 12.4889 14.5592 11.3521 14.5592 9.9499C14.5592 8.54766 13.4149 7.41092 12.0032 7.41092C10.5916 7.41092 9.44727 8.54766 9.44727 9.9499C9.44727 11.3521 10.5916 12.4889 12.0032 12.4889Z" stroke={props.stroke} stroke-width={props.strokeWidth} stroke-linejoin="bevel"/>
      </svg>
    )
  }
})

export default Local
