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

const WindDirection = defineComponent({
  name: 'WindDirection',
  props,
  render() {
    const $props = this.$props
    
    return h(
      <defs>
        <g id="WindDirection">
          <path d="M4.49994 19.5H6.49994M8.49994 19.5H6.49994M6.49994 19.5V9M6.49994 4.5H4.99994M6.49994 4.5H7.99994M6.49994 4.5V9M6.49994 9H8.99994M8.99994 9L10.6148 6.57776C10.8464 6.23035 11.2694 6.06341 11.6759 6.15904L18.729 7.8186C19.1807 7.92488 19.4999 8.32796 19.4999 8.79201V9.20799C19.4999 9.67204 19.1807 10.0751 18.729 10.1814L11.6759 11.841C11.2694 11.9366 10.8464 11.7696 10.6148 11.4222L8.99994 9ZM11.9999 8V10M13.9999 8.5V9.5" stroke={$props.stroke} stroke-width={$props.strokeWidth} stroke-linecap="round"/>
        </g>
      </defs>
    )
  }
})

export { WindDirection }
  