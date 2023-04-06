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

const Belt = defineComponent({
  name: 'Belt',
  props,
  render() {
    const $props = this.$props
    
    return h(
      <defs>
        <g id="Belt">
          <path d="M8.13663 14.1331L8.16481 9.86272" stroke={$props.stroke} stroke-width={$props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/><path d="M5.147 14.113L5.17518 9.84271" stroke={$props.stroke} stroke-width={$props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/><path d="M14.96 12.0598L17.8591 12.0598" stroke={$props.stroke} stroke-width={$props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/><path d="M17.9551 14.6259C17.952 15.0976 17.5671 15.4774 17.0955 15.4742L11.9711 15.44C11.4994 15.4368 11.1195 15.0519 11.1226 14.5802L11.1565 9.4558C11.1596 8.98411 11.5445 8.6043 12.0162 8.60746L17.1405 8.64171C17.6122 8.64489 17.9921 9.02982 17.989 9.50151L17.9551 14.6259Z" stroke={$props.stroke} stroke-width={$props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/><path d="M11.1255 14.1531L2.15787 14.0931L2.18604 9.82281L11.1537 9.88277" stroke={$props.stroke} stroke-width={$props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/><path d="M17.9582 14.1988L21.8014 14.2245L21.8296 9.95422L17.9863 9.92851" stroke={$props.stroke} stroke-width={$props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/>
        </g>
      </defs>
    )
  }
})

export { Belt }
  