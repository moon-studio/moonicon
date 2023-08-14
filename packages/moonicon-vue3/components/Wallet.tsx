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

const Wallet = defineComponent({
  name: 'Wallet',
  props,
  render() {
    const $props = this.$props
    
    return h(
      <defs>
        <g id="Wallet">
          <path d="M11.5 8.5H5M19.5 11.2184H17H14C13.4477 11.2184 13 11.6661 13 12.2184C13 13.0701 13 13.9218 13 14.7735C13 15.3258 13.4477 15.7735 14 15.7735C15.1667 15.7735 16.3333 15.7735 17.5 15.7735M14.5 19.5H5.5C4.94772 19.5 4.5 19.0523 4.5 18.5V5.5C4.5 4.94772 4.94772 4.5 5.5 4.5H18.5C19.0523 4.5 19.5 4.94772 19.5 5.5V18.5C19.5 19.0523 19.0523 19.5 18.5 19.5H14.5Z" stroke={$props.stroke} stroke-width={$props.strokeWidth} stroke-linecap="round"/><path d="M16.4122 13.4575H16.4222" stroke={$props.stroke} stroke-width={$props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/>
        </g>
      </defs>
    )
  }
})

export { Wallet }
