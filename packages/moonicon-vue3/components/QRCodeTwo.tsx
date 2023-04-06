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

const QRCodeTwo = defineComponent({
  name: 'QRCodeTwo',
  props,
  render() {
    const $props = this.$props
    
    return h(
      <defs>
        <g id="QRCodeTwo">
          <path d="M20.25 13.8333V20.25" stroke={$props.stroke} stroke-width={$props.strokeWidth} stroke-linecap="round"/><path d="M17.0417 13.8333V20.25" stroke={$props.stroke} stroke-width={$props.strokeWidth} stroke-linecap="round"/><path d="M13.8334 13.8333V20.25" stroke={$props.stroke} stroke-width={$props.strokeWidth} stroke-linecap="round"/><path d="M20.25 4.75C20.25 4.19771 19.8023 3.75 19.25 3.75H14.8334C14.2811 3.75 13.8334 4.19772 13.8334 4.75V9.16667C13.8334 9.71895 14.2811 10.1667 14.8334 10.1667H19.25C19.8023 10.1667 20.25 9.71895 20.25 9.16667V4.75Z" stroke={$props.stroke} stroke-width={$props.strokeWidth} stroke-linecap="round"/><path d="M10.1667 14.8333C10.1667 14.281 9.71895 13.8333 9.16667 13.8333H4.75C4.19771 13.8333 3.75 14.281 3.75 14.8333V19.25C3.75 19.8023 4.19772 20.25 4.75 20.25H9.16667C9.71895 20.25 10.1667 19.8023 10.1667 19.25V14.8333Z" stroke={$props.stroke} stroke-width={$props.strokeWidth} stroke-linecap="round"/><path d="M10.1667 4.75C10.1667 4.19771 9.71895 3.75 9.16667 3.75H4.75C4.19771 3.75 3.75 4.19772 3.75 4.75V9.16667C3.75 9.71895 4.19772 10.1667 4.75 10.1667H9.16667C9.71895 10.1667 10.1667 9.71895 10.1667 9.16667V4.75Z" stroke={$props.stroke} stroke-width={$props.strokeWidth} stroke-linecap="round"/>
        </g>
      </defs>
    )
  }
})

export { QRCodeTwo }
  