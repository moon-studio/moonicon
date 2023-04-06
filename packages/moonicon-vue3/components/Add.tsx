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

const Add = defineComponent({
  name: 'Add',
  props,
  render() {
    const $props = this.$props
    
    return h(
      <defs>
        <g id="Add">
          <path d="M12 4L12 20" stroke={$props.stroke} stroke-width={$props.strokeWidth} stroke-linecap="round"/><path d="M4 12L20 12" stroke={$props.stroke} stroke-width={$props.strokeWidth} stroke-linecap="round"/>
        </g>
      </defs>
    )
  }
})

export { Add }
  