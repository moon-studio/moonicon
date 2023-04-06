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

const DownloadThree = defineComponent({
  name: 'DownloadThree',
  props,
  render() {
    const $props = this.$props
    
    return h(
      <defs>
        <g id="DownloadThree">
          <path d="M20.5 12C20.5 7.58172 16.9183 4 12.5 4C8.08172 4 4.5 7.58172 4.5 12C4.5 16.4183 8.08172 20 12.5 20C15.7588 20 18.5625 18.0515 19.8096 15.256M12.5 8V16M12.5 16L16 12.5M12.5 16L9 12.5" stroke={$props.stroke} stroke-width={$props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/>
        </g>
      </defs>
    )
  }
})

export { DownloadThree }
  