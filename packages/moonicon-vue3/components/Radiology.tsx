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

const Radiology = defineComponent({
  name: 'Radiology',
  props,
  render() {
    const $props = this.$props
    
    return h(
      <defs>
        <g id="Radiology">
          <path d="M8 19.099C4.89047 17.4629 4 13.9894 4 12C4 5.6 9.33333 4 12 4C18.4 4 20 9.33333 20 12C20 15.8206 18.0994 17.9306 16 19.0108M10.5 15V19.1C10.5 19.5971 10.9029 20 11.4 20H12.6C13.0971 20 13.5 19.5971 13.5 19.1V15M10.5 15H13.5M10.5 15H8.9C8.40294 15 8 14.5971 8 14.1V13.4C8 12.9029 8.40294 12.5 8.9 12.5H15.1C15.5971 12.5 16 12.9029 16 13.4V14.1C16 14.5971 15.5971 15 15.1 15H13.5M16 9C16 8 15.2 6.5 12 6.5C8.8 6.5 8 8 8 9" stroke={$props.stroke} strokeWidth={$props.strokeWidth} stroke-linecap="round"/>
        </g>
      </defs>
    )
  }
})

export { Radiology }
