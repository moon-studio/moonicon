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

const CodeFoloder = defineComponent({
  name: 'CodeFoloder',
  props,
  render() {
    const $props = this.$props
    
    return h(
      <defs>
        <g id="CodeFoloder">
          <path d="M10.5 10.5L8.42186 12.2318C7.94211 12.6316 7.94211 13.3684 8.42187 13.7682L10.5 15.5M13.5 10.5L15.5781 12.2318C16.0579 12.6316 16.0579 13.3684 15.5781 13.7682L13.5 15.5" stroke={$props.stroke} stroke-width={$props.strokeWidth} stroke-linecap="round"/><path d="M4.08337 5.33333C4.08337 4.8731 4.45647 4.5 4.91671 4.5H9.91671L12 7H19.0834C19.5436 7 19.9167 7.37308 19.9167 7.83333V18.6667C19.9167 19.1269 19.5436 19.5 19.0834 19.5H4.91671C4.45647 19.5 4.08337 19.1269 4.08337 18.6667V5.33333Z" stroke={$props.stroke} stroke-width={$props.strokeWidth} stroke-linejoin="round"/>
        </g>
      </defs>
    )
  }
})

export { CodeFoloder }
  