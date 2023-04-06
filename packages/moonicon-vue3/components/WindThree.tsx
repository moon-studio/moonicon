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

const WindThree = defineComponent({
  name: 'WindThree',
  props,
  render() {
    const $props = this.$props
    
    return h(
      <defs>
        <g id="WindThree">
          <path d="M12.6232 4.5C13.061 4.12184 13.632 4 13.9999 4C15.5999 4 15.9999 5.33333 15.9999 6C15.9999 7.6 14.6666 8 13.9999 8H3.99994" stroke={$props.stroke} stroke-width={$props.strokeWidth} stroke-linecap="round"/><path d="M14.6232 19.5C15.061 19.8782 15.632 20 15.9999 20C17.5999 20 17.9999 18.6667 17.9999 18C17.9999 16.4 16.6666 16 15.9999 16H5.99994" stroke={$props.stroke} stroke-width={$props.strokeWidth} stroke-linecap="round"/><path d="M16.6232 9.5C17.061 9.12184 17.632 9 17.9999 9C19.5999 9 19.9999 10.3333 19.9999 11C19.9999 12.6 18.6666 13 17.9999 13H7.99994" stroke={$props.stroke} stroke-width={$props.strokeWidth} stroke-linecap="round"/>
        </g>
      </defs>
    )
  }
})

export { WindThree }
  