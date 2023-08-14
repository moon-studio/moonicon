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

const ChefHat = defineComponent({
  name: 'ChefHat',
  props,
  render() {
    const $props = this.$props
    
    return h(
      <defs>
        <g id="ChefHat">
          <path d="M5.99994 16.5H17.9999V20.5H5.99994V16.5Z" stroke={$props.stroke} stroke-width={$props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/><path d="M10.4999 16.1666L10.4999 10.9178" stroke={$props.stroke} stroke-width={$props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/><path d="M13.4999 16.1666V12.8333" stroke={$props.stroke} stroke-width={$props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/><path d="M16.9999 12.4167V16.1667H6.99986V12.4167C6.99986 12.4167 4.91652 11.1667 4.91652 9.08332C4.91652 6.99999 6.58319 6.16666 8.66652 6.16666C8.66652 5.33332 9.91652 3.66666 11.9999 3.66666C14.0832 3.66666 15.3332 5.33332 15.3332 6.16666C16.9999 6.16666 19.0832 6.99999 19.0832 9.08332C19.0832 11.1667 16.9999 12.4167 16.9999 12.4167Z" stroke={$props.stroke} stroke-width={$props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/>
        </g>
      </defs>
    )
  }
})

export { ChefHat }
