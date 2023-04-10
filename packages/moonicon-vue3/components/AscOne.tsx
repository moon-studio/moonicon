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

const AscOne = defineComponent({
  name: 'AscOne',
  props,
  render() {
    const $props = this.$props
    
    return h(
      <defs>
        <g id="AscOne">
          <path d="M16.5 6.5H12.5M12.5 12H18.5M20.5 17.5H16.5H12.5M7.5 4L4.5 7M7.5 4L10.5 7M7.5 4V20" stroke={$props.stroke} strokeWidth={$props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/>

        </g>
      </defs>
    )
  }
})

export { AscOne }
