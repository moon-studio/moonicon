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

const ErrorFile = defineComponent({
  name: 'ErrorFile',
  props,
  render() {
    const $props = this.$props
    
    return h(
      <defs>
        <g id="ErrorFile">
          <path d="M9.47487 14.4246L11.9497 11.9497M14.4246 9.47483L11.9497 11.9497M11.9497 11.9497L9.47487 9.47483M11.9497 11.9497L14.4246 14.4246" stroke={$props.stroke} stroke-width={$props.strokeWidth} stroke-linecap="round"/><path d="M5 19.5V4.5C5 3.94772 5.44772 3.5 6 3.5H14.5858C14.851 3.5 15.1054 3.60536 15.2929 3.79289L18.7071 7.20711C18.8946 7.39464 19 7.649 19 7.91421V19.5C19 20.0523 18.5523 20.5 18 20.5H6C5.44772 20.5 5 20.0523 5 19.5Z" stroke={$props.stroke} stroke-width={$props.strokeWidth}/>
        </g>
      </defs>
    )
  }
})

export { ErrorFile }
  