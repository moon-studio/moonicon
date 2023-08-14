import { defineComponent, h } from 'vue'
import type { PropType } from 'vue'
  
const props = {
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

const Pineapple = defineComponent({
  name: 'Pineapple',
  props,
  render() {
    const $props = this.$props
    
    return h(
      <defs>
        <g id="Pineapple">
          <path d="M10.6921 7.93543C10.499 7.56541 10.3673 6.98169 10.3673 6.04141C10.3673 5.03689 10.9328 4.14534 11.3921 3.58688C11.7006 3.21176 12.2444 3.20661 12.5604 3.57545C13.0382 4.13312 13.6325 5.03001 13.6325 6.04141C13.6325 6.88246 13.485 7.58536 13.2923 7.93543" stroke={$props.stroke} stroke-width={$props.strokeWidth} stroke-linecap="round" stroke-linejoin="bevel"/><path d="M7.96344 9.57292C7.66604 8.89552 7.16182 8.17375 6.61398 7.54527C6.03433 6.88031 6.32292 5.71268 7.18844 5.8831C8.64038 6.16897 9.84529 7.06829 10.6162 7.94729" stroke={$props.stroke} stroke-width={$props.strokeWidth} stroke-linecap="round" stroke-linejoin="bevel"/><path d="M15.9984 9.57292C16.2958 8.89552 16.8 8.17375 17.3479 7.54527C17.9275 6.88031 17.6389 5.71268 16.7734 5.8831C15.3215 6.16897 14.1166 7.06829 13.3457 7.94729" stroke={$props.stroke} stroke-width={$props.strokeWidth} stroke-linecap="round" stroke-linejoin="bevel"/><path d="M8.06264 9.56248C6.22925 11.3958 5.91967 14.753 5.87614 16.2477C5.83406 17.6955 6.45842 18.7498 7.62527 19.625C9.37518 20.9375 14.6252 20.9375 16.3751 19.625C17.5452 18.7474 18.1663 17.6916 18.1236 16.2401C18.0793 14.7417 17.7679 11.3927 15.9377 9.56248C13.5932 7.2184 10.4965 7.12863 8.06264 9.56248Z" stroke={$props.stroke} stroke-width={$props.strokeWidth} stroke-linecap="square" stroke-linejoin="bevel"/><path d="M14.936 8.76323L5.95282 16.5082" stroke={$props.stroke} stroke-width={$props.strokeWidth} stroke-linecap="round" stroke-linejoin="bevel"/><path d="M8.9864 8.83147L18.0121 16.508" stroke={$props.stroke} stroke-width={$props.strokeWidth} stroke-linecap="round" stroke-linejoin="bevel"/><path d="M8.38495 19.9769L17.4479 12.346" stroke={$props.stroke} stroke-width={$props.strokeWidth} stroke-linecap="round" stroke-linejoin="bevel"/><path d="M15.6024 19.9856L6.49974 12.3374" stroke={$props.stroke} stroke-width={$props.strokeWidth} stroke-linecap="round" stroke-linejoin="bevel"/>
        </g>
      </defs>
    )
  }
})

export { Pineapple }
