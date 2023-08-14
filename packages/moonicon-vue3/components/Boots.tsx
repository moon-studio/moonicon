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

const Boots = defineComponent({
  name: 'Boots',
  props,
  render() {
    const $props = this.$props
    
    return h(
      <defs>
        <g id="Boots">
          <path d="M13.4666 3.66663H6.79995L8.46661 17L7.95157 17.2575C7.24578 17.6104 6.79995 18.3318 6.79995 19.1209V20.3333H17.2166V18.9724L12.0166 17L13.4666 3.66663Z" stroke={$props.stroke} stroke-width={$props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/><path d="M13.0166 6H7.5166" stroke={$props.stroke} stroke-width={$props.strokeWidth} stroke-linecap="round"/>
        </g>
      </defs>
    )
  }
})

export { Boots }
