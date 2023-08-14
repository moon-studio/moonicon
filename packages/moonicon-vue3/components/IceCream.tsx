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

const IceCream = defineComponent({
  name: 'IceCream',
  props,
  render() {
    const $props = this.$props
    
    return h(
      <defs>
        <g id="IceCream">
          <path d="M7.87494 11.6217L11.0423 22.1508C11.3279 23.1 12.672 23.1 12.9575 22.1508L16.1249 11.6217" stroke={$props.stroke} stroke-width={$props.strokeWidth} stroke-linecap="round"/><path d="M9.02439 14.5076H15.1138" stroke={$props.stroke} stroke-width={$props.strokeWidth} stroke-linecap="round"/><path d="M10.0749 17.6584H14.0634" stroke={$props.stroke} stroke-width={$props.strokeWidth} stroke-linecap="round"/><path d="M11.9999 2.45496C9.9613 2.45496 8.93019 3.96622 8.53314 4.74809C8.39063 5.02874 8.15733 5.26223 7.8735 5.3983C7.09079 5.77354 5.58325 6.71653 5.58325 8.41329C5.58325 10.705 7.87492 11.6216 7.87492 11.6216C7.87492 11.6216 9.47909 10.705 11.9999 10.705C14.5208 10.705 16.1249 11.6216 16.1249 11.6216C16.1249 11.6216 18.4166 10.705 18.4166 8.41329C18.4166 6.71653 16.909 5.77355 16.1263 5.3983C15.8425 5.26223 15.6092 5.02874 15.4667 4.74809C15.0696 3.96622 14.0385 2.45496 11.9999 2.45496Z" stroke={$props.stroke} stroke-width={$props.strokeWidth} stroke-linecap="round"/><rect width="24" height="24" fill="white"/>
        </g>
      </defs>
    )
  }
})

export { IceCream }
