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

const ShoppingBag = defineComponent({
  name: 'ShoppingBag',
  props,
  render() {
    const $props = this.$props
    
    return h(
      <defs>
        <g id="ShoppingBag">
          <path d="M15.3333 10.3333C15.3333 11.2174 14.9821 12.0652 14.357 12.6904C13.7319 13.3155 12.884 13.6667 12 13.6667C11.1159 13.6667 10.2681 13.3155 9.64294 12.6904C9.01782 12.0652 8.66663 11.2174 8.66663 10.3333" stroke={$props.stroke} stroke-width={$props.strokeWidth} stroke-linecap="round"/><path d="M4.91663 7H19.0833" stroke={$props.stroke} stroke-width={$props.strokeWidth} stroke-linecap="round"/><path d="M7.5 3.66666C7.18524 3.66666 6.88885 3.81485 6.7 4.06666L4.7 6.73332C4.57018 6.90642 4.5 7.11695 4.5 7.33332V18.6667C4.5 19.1087 4.67559 19.5326 4.98816 19.8452C5.30072 20.1577 5.72464 20.3333 6.16667 20.3333H17.8333C18.2754 20.3333 18.6993 20.1577 19.0118 19.8452C19.3244 19.5326 19.5 19.1087 19.5 18.6667V7.33332C19.5 7.11695 19.4298 6.90642 19.3 6.73332L17.3 4.06666C17.1111 3.81485 16.8148 3.66666 16.5 3.66666H7.5Z" stroke={$props.stroke} stroke-width={$props.strokeWidth} stroke-linecap="round"/>
        </g>
      </defs>
    )
  }
})

export { ShoppingBag }
  