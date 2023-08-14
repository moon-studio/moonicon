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

const HDR = defineComponent({
  name: 'HDR',
  props,
  render() {
    const $props = this.$props
    
    return h(
      <defs>
        <g id="HDR">
          <path d="M3.5 8.5V12M3.5 15.5V12M3.5 12H7.14954M7.14954 12V8.5M7.14954 12V15.5M17 12V8.5H18.75C19.7165 8.5 20.5 9.2835 20.5 10.25V10.25C20.5 11.2165 19.7165 12 18.75 12H18.5M17 12V15.5M17 12H18.5M18.5 12L20.5 15.5M10.2968 8.5H11.928C13.0326 8.5 13.928 9.39543 13.928 10.5V13.5C13.928 14.6046 13.0326 15.5 11.928 15.5H10.2968V12V8.5Z" stroke={$props.stroke} stroke-width={$props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/>
        </g>
      </defs>
    )
  }
})

export { HDR }
