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

const QRCodeOne = defineComponent({
  name: 'QRCodeOne',
  props,
  render() {
    const $props = this.$props
    
    return h(
      <defs>
        <g id="QRCodeOne">
          <path d="M3.5 4.65909C3.5 4.01894 4.01894 3.5 4.65909 3.5H9.29545C9.9356 3.5 10.4545 4.01894 10.4545 4.65909V9.29545C10.4545 9.9356 9.9356 10.4545 9.29545 10.4545H4.65909C4.01894 10.4545 3.5 9.9356 3.5 9.29545V4.65909Z" stroke={$props.stroke} stroke-width={$props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/><path d="M3.5 14.7045C3.5 14.0644 4.01894 13.5455 4.65909 13.5455H9.29545C9.9356 13.5455 10.4545 14.0644 10.4545 14.7045V19.3409C10.4545 19.9811 9.9356 20.5 9.29545 20.5H4.65909C4.01894 20.5 3.5 19.9811 3.5 19.3409V14.7045Z" stroke={$props.stroke} stroke-width={$props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/><path d="M13.5455 4.65909C13.5455 4.01894 14.0644 3.5 14.7045 3.5H19.3409C19.9811 3.5 20.5 4.01894 20.5 4.65909V9.29545C20.5 9.9356 19.9811 10.4545 19.3409 10.4545H14.7045C14.0644 10.4545 13.5455 9.9356 13.5455 9.29545V4.65909Z" stroke={$props.stroke} stroke-width={$props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/><path d="M6.59091 6.59091H7.36364V7.36364H6.59091V6.59091Z" stroke={$props.stroke} stroke-width={$props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/><path d="M6.59091 16.6364H7.36364V17.4091H6.59091V16.6364Z" stroke={$props.stroke} stroke-width={$props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/><path d="M16.6364 6.59091H17.4091V7.36364H16.6364V6.59091Z" stroke={$props.stroke} stroke-width={$props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/><path d="M13.5455 13.5455H14.3182V14.3182H13.5455V13.5455Z" stroke={$props.stroke} stroke-width={$props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/><path d="M13.5455 19.7273H14.3182V20.5H13.5455V19.7273Z" stroke={$props.stroke} stroke-width={$props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/><path d="M19.7273 13.5455H20.5V14.3182H19.7273V13.5455Z" stroke={$props.stroke} stroke-width={$props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/><path d="M19.7273 19.7273H20.5V20.5H19.7273V19.7273Z" stroke={$props.stroke} stroke-width={$props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/><path d="M16.6364 16.6364H17.4091V17.4091H16.6364V16.6364Z" stroke={$props.stroke} stroke-width={$props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/>
        </g>
      </defs>
    )
  }
})

export { QRCodeOne }
