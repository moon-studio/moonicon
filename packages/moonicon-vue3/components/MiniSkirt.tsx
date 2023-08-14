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

const MiniSkirt = defineComponent({
  name: 'MiniSkirt',
  props,
  render() {
    const $props = this.$props
    
    return h(
      <defs>
        <g id="MiniSkirt">
          <path d="M7.99994 8L8.49994 6H15.4999L15.9999 8" stroke={$props.stroke} stroke-width={$props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/><path d="M19.9999 15C19.5333 15.8 18.9999 17 16.7999 17C15.6474 17 14.0816 16.7897 11.9999 16" stroke={$props.stroke} stroke-width={$props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/><path d="M3.99994 14.75C3.99994 14.75 6.39994 10.7 7.19994 8H16.7999C17.5999 10.7 19.9999 14.75 19.9999 14.75C17.5999 12.95 9.99994 17 7.19994 17C4.99994 17 4.46661 15.35 3.99994 14.75Z" stroke={$props.stroke} stroke-width={$props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/>
        </g>
      </defs>
    )
  }
})

export { MiniSkirt }
