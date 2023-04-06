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

const DownloadTwo = defineComponent({
  name: 'DownloadTwo',
  props,
  render() {
    const $props = this.$props
    
    return h(
      <defs>
        <g id="DownloadTwo">
          <path d="M12.5 4.19995V16.2M12.5 16.2L17.5 11.4999M12.5 16.2L7.5 11.4999" stroke={$props.stroke} stroke-width={$props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/><path d="M20 17V18.7C20 19.2523 19.5523 19.7 19 19.7H6C5.44772 19.7 5 19.2523 5 18.7V17" stroke={$props.stroke} stroke-width={$props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/>
        </g>
      </defs>
    )
  }
})

export { DownloadTwo }
  