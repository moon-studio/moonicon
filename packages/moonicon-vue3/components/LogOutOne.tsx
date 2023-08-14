import { defineComponent, h } from 'vue'
import type { PropType } from 'vue'
  
const props = {
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

const LogOutOne = defineComponent({
  name: 'LogOutOne',
  props,
  render() {
    const $props = this.$props
    
    return h(
      <defs>
        <g id="LogOutOne">
          <path d="M9.25 20.25H5.58333C5.0971 20.25 4.63079 20.0568 4.28697 19.713C3.94315 19.3692 3.75 18.9029 3.75 18.4167V5.58333C3.75 5.0971 3.94315 4.63079 4.28697 4.28697C4.63079 3.94315 5.0971 3.75 5.58333 3.75H9.25" stroke={$props.stroke} stroke-width={$props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/><path d="M15.6666 16.5834L20.25 12.0001L15.6666 7.41675" stroke={$props.stroke} stroke-width={$props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/><path d="M20.25 12H9.25" stroke={$props.stroke} stroke-width={$props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/>
        </g>
      </defs>
    )
  }
})

export { LogOutOne }
