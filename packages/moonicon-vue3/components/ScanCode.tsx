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

const ScanCode = defineComponent({
  name: 'ScanCode',
  props,
  render() {
    const $props = this.$props
    
    return h(
      <defs>
        <g id="ScanCode">
          <path d="M7.73333 4H5C4.44772 4 4 4.44771 4 5V7.73333M16.2667 4H19C19.5523 4 20 4.44772 20 5V7.73333M20 16.2667V19C20 19.5523 19.5523 20 19 20H16.2667M7.73333 20H5C4.44771 20 4 19.5523 4 19V16.2667" stroke={$props.stroke} stroke-width={$props.strokeWidth} stroke-linecap="round"/><line x1="5.6" y1="12.15" x2="18.4" y2="12.15" stroke={$props.stroke} stroke-width={$props.strokeWidth} stroke-linecap="round"/>
        </g>
      </defs>
    )
  }
})

export { ScanCode }
  