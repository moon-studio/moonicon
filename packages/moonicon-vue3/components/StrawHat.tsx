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

const StrawHat = defineComponent({
  name: 'StrawHat',
  props,
  render() {
    const $props = this.$props
    
    return h(
      <defs>
        <g id="StrawHat">
          <path d="M16.1665 11.1667C16.1665 8.8655 14.301 7 11.9999 7C9.69869 7 7.83319 8.8655 7.83319 11.1667" stroke={$props.stroke} strokeWidth={$props.strokeWidth}/><path d="M8.00002 11.5833C5.50918 12.0851 3.66669 13.0232 3.66669 14.0975C3.66669 15.7005 7.39764 17 12 17C16.6024 17 20.3334 15.7005 20.3334 14.0975C20.3334 13.0232 18.4908 12.0851 16 11.5833" stroke={$props.stroke} strokeWidth={$props.strokeWidth}/><path d="M7.83319 11.1667C8.24986 11.5139 9.49986 12.8334 11.9999 12.8334C14.4999 12.8334 15.7499 11.5834 16.1665 11.1667" stroke={$props.stroke} strokeWidth={$props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/><path d="M14.4999 12L13.4999 10.5" stroke={$props.stroke} strokeWidth={$props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/>
        </g>
      </defs>
    )
  }
})

export { StrawHat }
