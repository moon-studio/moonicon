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

const XLSFile = defineComponent({
  name: 'XLSFile',
  props,
  render() {
    const $props = this.$props
    
    return h(
      <defs>
        <g id="XLSFile">
          <path d="M19 20.5H6C5.44772 20.5 5 20.0523 5 19.5V4.5C5 3.94772 5.44772 3.5 6 3.5H14.5858C14.851 3.5 15.1054 3.60536 15.2929 3.79289L18.7071 7.20711C18.8946 7.39464 19 7.649 19 7.91421V11V12.5" stroke={$props.stroke} strokeWidth={$props.strokeWidth} stroke-linecap="round"/><path d="M9 14.5L10 16.5M11 18.5L10 16.5M10 16.5L11 14.5M10 16.5L9 18.5M13 14.5V18.5H15M19 14.5H18C17.4477 14.5 17 14.9477 17 15.5V15.5C17 16.0523 17.4477 16.5 18 16.5V16.5C18.5523 16.5 19 16.9477 19 17.5V17.5C19 18.0523 18.5523 18.5 18 18.5H17" stroke={$props.stroke} strokeWidth={$props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/>
        </g>
      </defs>
    )
  }
})

export { XLSFile }
