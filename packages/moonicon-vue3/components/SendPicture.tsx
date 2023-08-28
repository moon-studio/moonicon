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

const SendPicture = defineComponent({
  name: 'SendPicture',
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
        <path d="M3.55422 16.2593L3.12804 16.6816L3.97272 17.534L4.3989 17.1116L3.55422 16.2593ZM8.46784 12.2347L8.89018 12.6609L8.8902 12.6608L8.46784 12.2347ZM9.58215 12.2146L9.17432 12.6547L9.17433 12.6547L9.58215 12.2146ZM14.4892 17.5796C14.7322 17.8049 15.1119 17.7904 15.3371 17.5473C15.5623 17.3043 15.5479 16.9247 15.3048 16.6994L14.4892 17.5796ZM4.3989 17.1116L8.89018 12.6609L8.0455 11.8085L3.55422 16.2593L4.3989 17.1116ZM8.8902 12.6608C8.97611 12.5757 9.08845 12.5751 9.17432 12.6547L9.98997 11.7745C9.43052 11.2561 8.58607 11.2728 8.04549 11.8085L8.8902 12.6608ZM9.17433 12.6547L14.4892 17.5796L15.3048 16.6994L9.98996 11.7745L9.17433 12.6547Z" fill="black"/><path d="M13.7769 15.3229L15.7818 13.1554C16.0774 12.8358 16.5454 12.7999 16.8798 13.071L20.0135 15.5697" stroke={props.stroke} stroke-width={props.strokeWidth} stroke-linecap="square" stroke-linejoin="round"/><path d="M13 3.5957H4.59473C4.04244 3.5957 3.59473 4.04342 3.59473 4.5957V19.3962C3.59473 19.9485 4.04244 20.3962 4.59473 20.3962H19.3954C19.9477 20.3962 20.3954 19.9485 20.3954 19.3962V10" stroke={props.stroke} stroke-width={props.strokeWidth} stroke-linecap="round"/><path d="M14.376 6.08533L20.2998 6.08533" stroke={props.stroke} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/><path d="M18.1842 4L20.2998 6.11426L18.1842 8.22851" stroke={props.stroke} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    )
  }
})

export default SendPicture
