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

const Refund = defineComponent({
  name: 'Refund',
  props,
  render() {
    const $props = this.$props
    
    return h(
      <defs>
        <g id="Refund">
          <path d="M17.9652 10.4322L20.0775 11.7693L20.5 12.0368L21.8371 9.92438L22.1046 9.5019" stroke={$props.stroke} stroke-width={$props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/><path d="M20.5 12C20.5 9.33333 18.9 4 12.5 4C9.83333 4 4.5 5.6 4.5 12C4.5 14.6667 6.1 20 12.5 20C14.5336 20 18.1181 19.0695 19.7053 15.7893" stroke={$props.stroke} stroke-width={$props.strokeWidth} stroke-linecap="round"/><path d="M12.45 16.9L12.45 11.21" stroke={$props.stroke} stroke-width={$props.strokeWidth} stroke-linecap="round"/><path d="M9.54999 14.4H15.35" stroke={$props.stroke} stroke-width={$props.strokeWidth} stroke-linecap="round"/><path d="M10.2296 8.48346L12.45 11.1585L14.6704 8.48346" stroke={$props.stroke} stroke-width={$props.strokeWidth} stroke-linecap="round"/><line x1="9.55001" y1="11.1831" x2="15.35" y2="11.1831" stroke={$props.stroke} stroke-width={$props.strokeWidth} stroke-linecap="round"/>
        </g>
      </defs>
    )
  }
})

export { Refund }
