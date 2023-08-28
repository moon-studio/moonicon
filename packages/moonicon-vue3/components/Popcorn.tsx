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

const Popcorn = defineComponent({
  name: 'Popcorn',
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
        <path d="M7.33291 19.0996L5.28288 9.8744C5.1441 9.24989 5.61932 8.65747 6.25907 8.65747H17.7658C18.4056 8.65747 18.8808 9.24989 18.742 9.8744L16.692 19.0996C16.546 19.7566 16.473 20.0851 16.2331 20.2775C15.9931 20.47 15.6567 20.47 14.9836 20.47H9.04126C8.36825 20.47 8.03177 20.47 7.79185 20.2775C7.55192 20.0851 7.4789 19.7566 7.33291 19.0996Z" stroke={props.stroke} stroke-width={props.strokeWidth} stroke-linecap="square" stroke-linejoin="bevel"/><path d="M10.2625 20.47L9.82495 8.65747" stroke={props.stroke} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="bevel"/><path d="M13.7625 20.47L14.2 8.65747" stroke={props.stroke} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="bevel"/><path d="M17.2624 8.22C17.2624 8.22 17.6997 7.34497 17.0435 6.68872C16.8265 6.47176 16.5378 6.35044 16.2486 6.28523C15.6457 6.14934 15.0851 5.66053 14.7972 5.11377C14.6678 4.86799 14.478 4.64036 14.1997 4.50122C13.7987 4.30069 13.3057 4.32994 12.8893 4.42046C12.3775 4.53172 11.8048 4.35919 11.4016 4.0249C11.0192 3.70787 10.4758 3.44019 9.82472 3.62623C9.23027 3.79608 8.90505 4.21593 8.72713 4.62448C8.50662 5.13083 8.04703 5.59702 7.54835 5.83436C7.27654 5.96373 6.99245 6.163 6.76222 6.46997C6.10597 7.34497 6.76248 8.22 6.76248 8.22" stroke={props.stroke} stroke-width={props.strokeWidth} stroke-linecap="square" stroke-linejoin="bevel"/>
      </svg>
    )
  }
})

export default Popcorn
