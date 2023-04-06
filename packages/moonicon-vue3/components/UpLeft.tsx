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

const UpLeft = defineComponent({
  name: 'UpLeft',
  props,
  render() {
    const $props = this.$props
    
    return h(
      <defs>
        <g id="UpLeft">
          <path d="M5 16V5H16" stroke={$props.stroke} stroke-width={$props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/><path d="M19 19L5 5" stroke={$props.stroke} stroke-width={$props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/>
        </g>
      </defs>
    )
  }
})

export { UpLeft }
  