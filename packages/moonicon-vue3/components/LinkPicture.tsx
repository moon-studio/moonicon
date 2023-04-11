import { defineComponent, h } from 'vue'
import type { PropType } from 'vue'

const props = {
  // fill color
  fill: {
    type: String as PropType<string>,
    default: '#fff'
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

const LinkPicture = defineComponent({
  name: 'LinkPicture',
  props,
  render() {
    const $props = this.$props
    
    return h(
      <defs>
        <g id="LinkPicture">
          <path d="M3.55422 16.2593L3.12804 16.6816L3.97272 17.534L4.3989 17.1116L3.55422 16.2593ZM8.46784 12.2347L8.89018 12.6609L8.8902 12.6608L8.46784 12.2347ZM9.58215 12.2146L9.17432 12.6547L9.17433 12.6547L9.58215 12.2146ZM14.4892 17.5796C14.7322 17.8049 15.1119 17.7904 15.3371 17.5473C15.5623 17.3043 15.5479 16.9247 15.3048 16.6994L14.4892 17.5796ZM4.3989 17.1116L8.89018 12.6609L8.0455 11.8085L3.55422 16.2593L4.3989 17.1116ZM8.8902 12.6608C8.97611 12.5757 9.08845 12.5751 9.17432 12.6547L9.98997 11.7745C9.43052 11.2561 8.58607 11.2728 8.04549 11.8085L8.8902 12.6608ZM9.17433 12.6547L14.4892 17.5796L15.3048 16.6994L9.98996 11.7745L9.17433 12.6547Z" fill={$props.fill}/><path d="M13.7769 15.3229L15.7818 13.1554C16.0774 12.8358 16.5454 12.7999 16.8798 13.071L20.0135 15.5697" stroke={$props.stroke} strokeWidth={$props.strokeWidth} stroke-linecap="square" stroke-linejoin="round"/><path d="M13 3.5957H4.59473C4.04244 3.5957 3.59473 4.04342 3.59473 4.5957V19.3962C3.59473 19.9485 4.04244 20.3962 4.59473 20.3962H19.3954C19.9477 20.3962 20.3954 19.9485 20.3954 19.3962V10" stroke={$props.stroke} strokeWidth={$props.strokeWidth} stroke-linecap="round"/><path d="M15.3451 6.04606L15.1325 6.25865C14.428 6.9631 14.4214 8.09865 15.1177 8.79495C15.814 9.49125 16.9496 9.48464 17.654 8.78019L17.8666 8.5676" stroke={$props.stroke} strokeWidth={$props.strokeWidth} stroke-linecap="square" stroke-linejoin="round"/><path d="M17.0459 4.34534L17.2585 4.13275C17.9629 3.42829 19.0985 3.42168 19.7948 4.11799C20.4911 4.81429 20.4845 5.94983 19.78 6.65429L19.5674 6.86688" stroke={$props.stroke} strokeWidth={$props.strokeWidth} stroke-linecap="square" stroke-linejoin="round"/><path d="M16.606 7.30676L18.3067 5.60605" stroke={$props.stroke} strokeWidth={$props.strokeWidth} stroke-linecap="square" stroke-linejoin="round"/>
        </g>
      </defs>
    )
  }
})

export { LinkPicture }
