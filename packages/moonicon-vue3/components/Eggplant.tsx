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

const Eggplant = defineComponent({
  name: 'Eggplant',
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
        <path d="M6.75821 9.38005C7.44166 13.8696 8.88264 18.3122 13.1746 19.9217C16.8412 21.2967 20.8001 19.838 20.7998 16.2065C20.7995 12.5751 16.8415 12.5884 15.0082 11.2134C13.1749 9.83838 11.3415 7.08838 11.3415 7.08838" stroke={props.stroke} stroke-width={props.strokeWidth}/><path d="M6.58017 9.23502C5.96234 10.3224 4.37824 10.0423 4.43956 8.79312C4.44516 8.67896 4.45388 8.56863 4.46616 8.46342C4.69762 6.47998 5.61199 5.02593 6.75819 4.33843C7.90435 3.65094 10.3089 3.19259 12.2581 4.33844C12.5965 4.53737 12.9007 4.74797 13.1725 4.9602C14.1136 5.69525 13.4405 6.8694 12.2515 6.75816L11.2617 6.66556C11.042 6.64498 10.8389 6.78385 10.7783 6.99597C9.96548 9.84956 10.0349 9.85808 7.1046 9.02075C6.90128 8.96263 6.68463 9.05118 6.58017 9.23502V9.23502Z" stroke={props.stroke} stroke-width={props.strokeWidth} stroke-linecap="square" stroke-linejoin="bevel"/><path d="M6.60535 4.40298C5.7981 3.48975 5.10662 3.09174 3.85723 3.09174" stroke={props.stroke} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="bevel"/>
      </svg>
    )
  }
})

export default Eggplant
