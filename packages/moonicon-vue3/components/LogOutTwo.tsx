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

const LogOutTwo = defineComponent({
  name: 'LogOutTwo',
  props,
  render() {
    const $props = this.$props
    
    return h(
      <defs>
        <g id="LogOutTwo">
          <path d="M17.75 15.75L21.5 12L17.75 8.25M8 12H20.75" stroke={$props.stroke} stroke-width={$props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/><path d="M14.75 8V6C14.75 5.46957 14.5568 4.96086 14.213 4.58579C13.8692 4.21071 13.4029 4 12.9167 4H5.58333C5.0971 4 4.63079 4.21071 4.28697 4.58579C3.94315 4.96086 3.75 5.46957 3.75 6V18C3.75 18.5304 3.94315 19.0391 4.28697 19.4142C4.63079 19.7893 5.0971 20 5.58333 20H12.55C13.5625 20 14.75 19.1045 14.75 18V16" stroke={$props.stroke} stroke-width={$props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/>
        </g>
      </defs>
    )
  }
})

export { LogOutTwo }
  