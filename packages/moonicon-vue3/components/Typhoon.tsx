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

const Typhoon = defineComponent({
  name: 'Typhoon',
  props,
  render() {
    const $props = this.$props
    
    return h(
      <defs>
        <g id="Typhoon">
          <path d="M11.9999 7.68708C15.4503 7.68708 16.3129 10.5624 16.3129 12M11.9999 7.68708C10.5623 7.68708 7.68702 8.54967 7.68702 12M11.9999 7.68708C18.038 7.68708 19.5475 12.7188 19.5475 15.2347M16.3129 12C16.3129 15.4503 13.4376 16.3129 11.9999 16.3129M16.3129 12C16.3129 18.0381 11.2811 19.5476 8.76525 19.5476M11.9999 16.3129C8.5496 16.3129 7.68702 13.4376 7.68702 12M11.9999 16.3129C5.96185 16.3129 4.45233 11.2812 4.45233 8.76531M7.68702 12C7.68702 5.96191 12.7188 4.45239 15.2346 4.45239M11.9999 10.3827C13.2938 10.3827 13.6173 11.4609 13.6173 12M11.9999 13.6173C10.7061 13.6173 10.3826 12.5391 10.3826 12" stroke={$props.stroke} strokeWidth={$props.strokeWidth} stroke-linecap="round"/>

        </g>
      </defs>
    )
  }
})

export { Typhoon }
