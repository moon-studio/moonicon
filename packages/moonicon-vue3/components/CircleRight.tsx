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

const CircleRight = defineComponent({
  name: 'CircleRight',
  props,
  render() {
    const $props = this.$props
    
    return h(
      <defs>
        <g id="CircleRight">
          <path d="M12.6667 9.33333L15.3333 12M15.3333 12L12.6667 14.6667M15.3333 12H8.66667M4 12C4 16.4183 7.58172 20 12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12Z" stroke={$props.stroke} stroke-width={$props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/>
        </g>
      </defs>
    )
  }
})

export { CircleRight }
