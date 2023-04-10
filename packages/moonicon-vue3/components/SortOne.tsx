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

const SortOne = defineComponent({
  name: 'SortOne',
  props,
  render() {
    const $props = this.$props
    
    return h(
      <defs>
        <g id="SortOne">
          <path d="M20.5 6.5H12.5M13.5 12H19.5M20.5 17.5H16.5H12.5M7.5 4L4.5 7M7.5 4L10.5 7M7.5 4V20M7.5 20L10.5 17M7.5 20L4.5 17" stroke={$props.stroke} strokeWidth={$props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/>

        </g>
      </defs>
    )
  }
})

export { SortOne }
