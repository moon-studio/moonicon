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

const Windbreaker = defineComponent({
  name: 'Windbreaker',
  props,
  render() {
    const $props = this.$props
    
    return h(
      <defs>
        <g id="Windbreaker">
          <path d="M17.4167 12.4167V17.4167M17.4167 17.4167V19.3334C17.4167 19.8857 16.969 20.3334 16.4167 20.3334H7.58335C7.03107 20.3334 6.58335 19.8857 6.58335 19.3334V17.4167M17.4167 17.4167H19.3334C19.8856 17.4167 20.3334 16.969 20.3334 16.4167V10.0352C20.3334 9.70087 20.1663 9.38864 19.8881 9.20317L17.8334 7.83337M6.58335 17.4167H4.66669C4.1144 17.4167 3.66669 16.969 3.66669 16.4167V10.0352C3.66669 9.70087 3.83379 9.38864 4.11199 9.20317L6.16669 7.83337M6.58335 17.4167V12.4167" stroke={$props.stroke} strokeWidth={$props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/><path d="M9.91661 6.99996H11.9999M11.9999 6.99996H14.0833M11.9999 6.99996L9.33446 9.33225C8.95342 9.66566 8.38332 9.66167 8.00699 9.32297L5.06595 6.67604C4.73157 6.37509 4.6393 5.8879 4.84049 5.48553L5.47355 4.21941C5.64294 3.88063 5.9892 3.66663 6.36797 3.66663H17.7916C18.1953 3.66663 18.5594 3.90936 18.7147 4.28201L19.2275 5.51266C19.3907 5.90446 19.2888 6.35662 18.9733 6.64057L15.9929 9.32297C15.6166 9.66167 15.0465 9.66566 14.6654 9.33225L11.9999 6.99996Z" stroke={$props.stroke} strokeWidth={$props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/>
        </g>
      </defs>
    )
  }
})

export { Windbreaker }
