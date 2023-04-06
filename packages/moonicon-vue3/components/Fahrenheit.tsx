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

const Fahrenheit = defineComponent({
  name: 'Fahrenheit',
  props,
  render() {
    const $props = this.$props
    
    return h(
      <defs>
        <g id="Fahrenheit">
          <path d="M19.3 4.5H12.3C11.7477 4.5 11.3 4.94772 11.3 5.5V10.5M11.3 19.5V10.5M11.3 10.5H17.3" stroke={$props.stroke} stroke-width={$props.strokeWidth} stroke-linecap="round"/><path d="M8.70013 6.5C8.70013 5.83333 8.30013 4.5 6.70013 4.5C6.03347 4.5 4.70013 4.9 4.70013 6.5C4.70013 7.16667 5.10013 8.5 6.70013 8.5C7.3668 8.5 8.70013 8.1 8.70013 6.5Z" stroke={$props.stroke} stroke-width={$props.strokeWidth}/>
        </g>
      </defs>
    )
  }
})

export { Fahrenheit }
  