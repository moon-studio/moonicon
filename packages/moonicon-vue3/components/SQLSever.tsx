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

const SQLSever = defineComponent({
  name: 'SQLSever',
  props,
  render() {
    const $props = this.$props
    
    return h(
      <defs>
        <g id="SQLSever">
          <path d="M7.589 5.49623C6.98047 4.34781 11.3599 2 12.2727 2C13 3.5 13.5 4.5 14 6.5M7.589 5.49623C7.86641 6.01976 11.0551 5.99163 14 6.5M7.589 5.49623C8.51636 7.24634 12.0321 11.9163 6.55521 15.6486M6.55521 15.6486C2.2954 18.8068 7.52491 21 13.3431 21C14.3573 19.5802 15.2825 16.6216 15.2825 12.2432M6.55521 15.6486C8.421 14.2654 11.7879 13.2162 15.2825 12.2432M15.2825 12.2432C17.1212 11.7568 19.3937 11.0003 21 10.7838C19.0308 8.35394 16.9195 7.00399 14 6.5" stroke={$props.stroke} stroke-width={$props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/>
        </g>
      </defs>
    )
  }
})

export { SQLSever }
  