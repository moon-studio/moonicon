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

const LogInOne = defineComponent({
  name: 'LogInOne',
  props,
  render() {
    const $props = this.$props
    
    return h(
      <defs>
        <g id="LogInOne">
          <path d="M14.75 12H3.75" stroke={$props.stroke} stroke-width={$props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/><path d="M10.1666 16.5834L14.75 12.0001L10.1666 7.41675" stroke={$props.stroke} stroke-width={$props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/><path d="M14.75 3.75H18.4167C18.9029 3.75 19.3692 3.94315 19.713 4.28697C20.0568 4.63079 20.25 5.0971 20.25 5.58333V18.4167C20.25 18.9029 20.0568 19.3692 19.713 19.713C19.3692 20.0568 18.9029 20.25 18.4167 20.25H14.75" stroke={$props.stroke} stroke-width={$props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/>
        </g>
      </defs>
    )
  }
})

export { LogInOne }
  