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

const WindOne = defineComponent({
  name: 'WindOne',
  props,
  render() {
    const $props = this.$props
    
    return h(
      <defs>
        <g id="WindOne">
          <path d="M16.853 10.1821C17.3127 9.74181 17.9122 9.59998 18.2985 9.59998C19.9783 9.59998 20.3983 11.1522 20.3983 11.9283C20.3983 13.791 18.9984 14.2566 18.2985 14.2566H3.60004" stroke={$props.stroke} strokeWidth={$props.strokeWidth} stroke-linecap="round"/>
        </g>
      </defs>
    )
  }
})

export { WindOne }
