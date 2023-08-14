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

const Menu = defineComponent({
  name: 'Menu',
  props,
  render() {
    const $props = this.$props
    
    return h(
      <defs>
        <g id="Menu">
          <path d="M3.5 6H20.5" stroke={$props.stroke} stroke-width={$props.strokeWidth} stroke-linecap="round" stroke-linejoin="bevel"/><path d="M3.5 12H20.5" stroke={$props.stroke} stroke-width={$props.strokeWidth} stroke-linecap="round" stroke-linejoin="bevel"/><path d="M3.5 18H20.5" stroke={$props.stroke} stroke-width={$props.strokeWidth} stroke-linecap="round" stroke-linejoin="bevel"/>
        </g>
      </defs>
    )
  }
})

export { Menu }
