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

const SpeakerQuite = defineComponent({
  name: 'SpeakerQuite',
  props,
  render() {
    const $props = this.$props
    
    return h(
      <defs>
        <g id="SpeakerQuite">
          <path d="M12.7389 5V18.9972L8.03096 15.4979H5.5C4.94772 15.4979 4.5 15.0502 4.5 14.4979V9.49929C4.5 8.94701 4.94772 8.49929 5.5 8.49929H8.03096L12.7389 5Z" stroke={$props.stroke} strokeWidth={$props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/>
<path d="M18.21 15.869C19.8374 13.5314 19.8374 10.4649 18.21 8.12729" stroke={$props.stroke} strokeWidth={$props.strokeWidth} stroke-linecap="round"/>

        </g>
      </defs>
    )
  }
})

export { SpeakerQuite }
