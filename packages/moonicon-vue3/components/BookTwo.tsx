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

const BookTwo = defineComponent({
  name: 'BookTwo',
  props,
  render() {
    const $props = this.$props
    
    return h(
      <defs>
        <g id="BookTwo">
          <path d="M20 4H5.68421C5.68421 4 4 4.85714 4 7C4 9.14286 5.68421 10 5.68421 10H20C20 10 18.3158 9.14286 18.3158 7C18.3158 4.85714 20 4 20 4Z" stroke={$props.stroke} stroke-width={$props.strokeWidth} stroke-linecap="square" stroke-linejoin="round"/><path d="M4 14H18.3158C18.3158 14 20 14.8571 20 17C20 19.1429 18.3158 20 18.3158 20H4C4 20 5.68421 19.1429 5.68421 17C5.68421 14.8571 4 14 4 14Z" stroke={$props.stroke} stroke-width={$props.strokeWidth} stroke-linecap="square" stroke-linejoin="round"/>
        </g>
      </defs>
    )
  }
})

export { BookTwo }
