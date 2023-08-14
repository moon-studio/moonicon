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

const Up = defineComponent({
  name: 'Up',
  props,
  render() {
    const $props = this.$props
    
    return h(
      <defs>
        <g id="Up">
          <path d="M12 20L12 4M12 4L19 11M12 4L5 11" stroke={$props.stroke} stroke-width={$props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/>
        </g>
      </defs>
    )
  }
})

export { Up }
