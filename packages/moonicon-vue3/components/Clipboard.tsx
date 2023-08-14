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

const Clipboard = defineComponent({
  name: 'Clipboard',
  props,
  render() {
    const $props = this.$props
    
    return h(
      <defs>
        <g id="Clipboard">
          <path d="M7.5 4.5H6.5C5.94772 4.5 5.5 4.94772 5.5 5.5V19.5C5.5 20.0523 5.94772 20.5 6.5 20.5H17.5C18.0523 20.5 18.5 20.0523 18.5 19.5V5.5C18.5 4.94772 18.0523 4.5 17.5 4.5H16.5M10.5 5.5H13.5C14.0523 5.5 14.5 5.05228 14.5 4.5V4.5C14.5 3.94772 14.0523 3.5 13.5 3.5H10.5C9.94772 3.5 9.5 3.94772 9.5 4.5V4.5C9.5 5.05228 9.94772 5.5 10.5 5.5Z" stroke={$props.stroke} stroke-width={$props.strokeWidth} stroke-linecap="round"/>
        </g>
      </defs>
    )
  }
})

export { Clipboard }
