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

const BookOne = defineComponent({
  name: 'BookOne',
  props,
  render() {
    const $props = this.$props
    
    return h(
      <defs>
        <g id="BookOne">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M7.00016 20.3333H17.6668C18.2191 20.3333 18.6668 19.8856 18.6668 19.3333V17H7.00016C6.07969 17 5.3335 17.7462 5.3335 18.6667C5.3335 19.5871 6.07969 20.3333 7.00016 20.3333Z" stroke={$props.stroke} stroke-width={$props.strokeWidth} stroke-linecap="square" stroke-linejoin="round"/><path d="M5.3335 18.6667C5.3335 17.0001 5.3335 6.16675 5.3335 6.16675C5.3335 4.78604 6.52741 3.66675 8.00016 3.66675H17.6668C18.2191 3.66675 18.6668 4.11446 18.6668 4.66675V17.0001C18.6668 17.0001 10.3258 17.0001 8.00016 17.0001C5.9011 17.0001 5.3335 17.2852 5.3335 18.6667Z" stroke={$props.stroke} stroke-width={$props.strokeWidth} stroke-linejoin="round"/>
        </g>
      </defs>
    )
  }
})

export { BookOne }
  