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

const AscTwo = defineComponent({
  name: 'AscTwo',
  props,
  render() {
    const $props = this.$props
    
    return h(
      <defs>
        <g id="AscTwo">
          <path d="M14.5 20L14.5 4L10.5 8.5" stroke={$props.stroke} stroke-width={$props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/>
        </g>
      </defs>
    )
  }
})

export { AscTwo }
