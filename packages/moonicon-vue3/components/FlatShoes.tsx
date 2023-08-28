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

const FlatShoes = defineComponent({
  name: 'FlatShoes',
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
        <path d="M17.2 12.25H17.9559C18.3975 12.25 18.7869 12.5397 18.9137 12.9627L19.8137 15.9627C20.0062 16.6043 19.5258 17.25 18.8559 17.25H5.19995C4.64767 17.25 4.19995 16.8023 4.19995 16.25V7.75C4.19995 7.19772 4.64767 6.75 5.19995 6.75H8.05604C8.44818 6.75 8.80413 6.9792 8.9664 7.3362L10.9335 11.6638C11.0958 12.0208 11.4517 12.25 11.8439 12.25H13.2M17.2 12.25L16.2 14.25M17.2 12.25H15.2M15.2 12.25L14.2 14.25M15.2 12.25H13.2M13.2 12.25L12.2 14.25" stroke={props.stroke} stroke-width={props.strokeWidth} stroke-linecap="round"/>
      </svg>
    )
  }
})

export default FlatShoes
