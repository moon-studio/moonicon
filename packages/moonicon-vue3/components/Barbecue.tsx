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

const Barbecue = defineComponent({
  name: 'Barbecue',
  props,
  render() {
    const $props = this.$props
    
    return h(
      <defs>
        <g id="Barbecue">
          <path d="M15.3333 7.83333V10.3333" stroke={$props.stroke} stroke-width={$props.strokeWidth} stroke-linecap="square"/><path d="M8.66663 7.83333V10.3333" stroke={$props.stroke} stroke-width={$props.strokeWidth} stroke-linecap="square"/><path d="M13.6666 16.5247H17" stroke={$props.stroke} stroke-width={$props.strokeWidth} stroke-miterlimit="2" stroke-linecap="round" stroke-linejoin="bevel"/><path d="M7 16.5247H10.3333" stroke={$props.stroke} stroke-width={$props.strokeWidth} stroke-miterlimit="2" stroke-linecap="round" stroke-linejoin="bevel"/><path d="M13.6665 9.08331H16.9999" stroke={$props.stroke} stroke-width={$props.strokeWidth} stroke-miterlimit="2" stroke-linecap="round" stroke-linejoin="bevel"/><path d="M7 9.08331H10.3333" stroke={$props.stroke} stroke-width={$props.strokeWidth} stroke-miterlimit="2" stroke-linecap="round" stroke-linejoin="bevel"/><path d="M15.3333 14.9167V20.3334" stroke={$props.stroke} stroke-width={$props.strokeWidth} stroke-linecap="round"/><path d="M17 12.8334C17 11.9129 16.2538 11.1667 15.3333 11.1667C14.4128 11.1667 13.6666 11.9129 13.6666 12.8334C13.6666 13.7538 14.4128 14.5 15.3333 14.5C16.2538 14.5 17 13.7538 17 12.8334Z" stroke={$props.stroke} stroke-width={$props.strokeWidth} stroke-linecap="square" stroke-linejoin="bevel"/><path d="M17 5.33334C17 4.41286 16.2538 3.66667 15.3333 3.66667C14.4128 3.66667 13.6666 4.41286 13.6666 5.33334C13.6666 6.25381 14.4128 7.00001 15.3333 7.00001C16.2538 7.00001 17 6.25381 17 5.33334Z" stroke={$props.stroke} stroke-width={$props.strokeWidth} stroke-linecap="square" stroke-linejoin="bevel"/><path d="M8.66663 14.9167V20.3334" stroke={$props.stroke} stroke-width={$props.strokeWidth} stroke-linecap="round"/><path d="M10.3333 12.8334C10.3333 11.9129 9.58708 11.1667 8.66661 11.1667C7.74613 11.1667 6.99994 11.9129 6.99994 12.8334C6.99994 13.7538 7.74613 14.5 8.66661 14.5C9.58708 14.5 10.3333 13.7538 10.3333 12.8334Z" stroke={$props.stroke} stroke-width={$props.strokeWidth} stroke-linecap="square" stroke-linejoin="bevel"/><path d="M10.3333 5.33334C10.3333 4.41286 9.58708 3.66667 8.66661 3.66667C7.74613 3.66667 6.99994 4.41286 6.99994 5.33334C6.99994 6.25381 7.74613 7.00001 8.66661 7.00001C9.58708 7.00001 10.3333 6.25381 10.3333 5.33334Z" stroke={$props.stroke} stroke-width={$props.strokeWidth} stroke-linecap="square" stroke-linejoin="bevel"/>
        </g>
      </defs>
    )
  }
})

export { Barbecue }
  