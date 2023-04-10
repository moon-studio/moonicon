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

const MinimizeOne = defineComponent({
  name: 'MinimizeOne',
  props,
  render() {
    const $props = this.$props
    
    return h(
      <defs>
        <g id="MinimizeOne">
          <path d="M4.66663 13.8334H10.1666V19.3334" stroke={$props.stroke} strokeWidth={$props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/>
<path d="M19.3334 10.1666H13.8334V4.66663" stroke={$props.stroke} strokeWidth={$props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/>
<path d="M13.8334 10.1667L20.25 3.75" stroke={$props.stroke} strokeWidth={$props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3.75 20.25L10.1667 13.8334" stroke={$props.stroke} strokeWidth={$props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/>

        </g>
      </defs>
    )
  }
})

export { MinimizeOne }
