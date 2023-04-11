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

const SpeakerLoud = defineComponent({
  name: 'SpeakerLoud',
  props,
  render() {
    const $props = this.$props
    
    return h(
      <defs>
        <g id="SpeakerLoud">
          <path d="M11.7406 5V18.9972L7.03266 15.4979H4.50171C3.94942 15.4979 3.50171 15.0502 3.50171 14.4979V9.49929C3.50171 8.94701 3.94942 8.49929 4.50171 8.49929H7.03266L11.7406 5Z" stroke={$props.stroke} strokeWidth={$props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/><path d="M15.7075 15.869C17.335 13.5314 17.335 10.4649 15.7075 8.12729" stroke={$props.stroke} strokeWidth={$props.strokeWidth} stroke-linecap="round"/><path d="M17.9939 5.22055C21.4546 9.12353 21.4546 14.8722 17.9939 18.7752" stroke={$props.stroke} strokeWidth={$props.strokeWidth} stroke-linecap="round"/><rect width="24" height="24" fill={$props.fill}/>
        </g>
      </defs>
    )
  }
})

export { SpeakerLoud }
