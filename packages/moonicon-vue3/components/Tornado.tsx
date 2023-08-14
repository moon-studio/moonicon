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

const Tornado = defineComponent({
  name: 'Tornado',
  props,
  render() {
    const $props = this.$props
    
    return h(
      <defs>
        <g id="Tornado">
          <line x1="4.59994" y1="4.4" x2="15.3999" y2="4.4" stroke={$props.stroke} stroke-width={$props.strokeWidth} stroke-linecap="round"/><line x1="5.59994" y1="10.4" x2="15.3999" y2="10.4" stroke={$props.stroke} stroke-width={$props.strokeWidth} stroke-linecap="round"/><line x1="9.59994" y1="13.4" x2="18.3999" y2="13.4" stroke={$props.stroke} stroke-width={$props.strokeWidth} stroke-linecap="round"/><line x1="7.59994" y1="16.4" x2="14.3999" y2="16.4" stroke={$props.stroke} stroke-width={$props.strokeWidth} stroke-linecap="round"/><line x1="10.5999" y1="19.4" x2="16.3999" y2="19.4" stroke={$props.stroke} stroke-width={$props.strokeWidth} stroke-linecap="round"/><line x1="8.59994" y1="7.4" x2="19.3999" y2="7.4" stroke={$props.stroke} stroke-width={$props.strokeWidth} stroke-linecap="round"/>
        </g>
      </defs>
    )
  }
})

export { Tornado }
