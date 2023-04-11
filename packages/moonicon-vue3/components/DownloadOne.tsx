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

const DownloadOne = defineComponent({
  name: 'DownloadOne',
  props,
  render() {
    const $props = this.$props
    
    return h(
      <defs>
        <g id="DownloadOne">
          <path d="M4.75 19.5H20.25" stroke={$props.stroke} strokeWidth={$props.strokeWidth} stroke-linecap="round"/><path d="M12.5 4.3999V16.3999M12.5 16.3999L18.5 10.9999M12.5 16.3999L6.5 10.9999" stroke={$props.stroke} strokeWidth={$props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/>
        </g>
      </defs>
    )
  }
})

export { DownloadOne }
