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

const PlayOne = defineComponent({
  name: 'PlayOne',
  props,
  render() {
    const $props = this.$props
    
    return h(
      <defs>
        <g id="PlayOne">
          <path d="M6 18.1295V5.87052C6 5.48462 6.41861 5.24419 6.75193 5.43863L17.2596 11.5681C17.5904 11.761 17.5904 12.2389 17.2596 12.4319L6.75194 18.5614C6.41861 18.7558 6 18.5154 6 18.1295Z" stroke={$props.stroke} stroke-width={$props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/>
        </g>
      </defs>
    )
  }
})

export { PlayOne }
