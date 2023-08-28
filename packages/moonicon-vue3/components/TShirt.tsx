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

const TShirt = defineComponent({
  name: 'TShirt',
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
        <path d="M16.6315 13.2857L19.1999 12.1809C19.6585 11.9836 19.9014 11.4784 19.7689 10.997L18.4312 6.13408C18.3576 5.86636 18.1759 5.64131 17.9298 5.51282L15.0315 4C15.0315 4.43537 14.021 5.5 11.9999 5.5C11.1578 5.5 8.96837 5.04489 8.96837 4L6.07012 5.51282C5.82397 5.64131 5.64232 5.86636 5.56867 6.13408L4.23093 10.997C4.09852 11.4784 4.34138 11.9836 4.79996 12.1809L7.36836 13.2857M16.6315 13.2857V19C16.6315 19.5523 16.1838 20 15.6315 20H8.36836C7.81608 20 7.36836 19.5523 7.36836 19V13.2857M16.6315 13.2857V10.8571M7.36836 13.2857C7.34115 13.2659 7.35702 11.9918 7.36836 10.8571" stroke={props.stroke} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    )
  }
})

export default TShirt
