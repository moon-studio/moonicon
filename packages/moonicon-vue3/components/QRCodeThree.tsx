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

const QRCodeThree = defineComponent({
  name: 'QRCodeThree',
  props,
  render() {
    const $props = this.$props
    
    return h(
      <defs>
        <g id="QRCodeThree">
          <path d="M9.25 4.75C9.25 4.19772 8.80228 3.75 8.25 3.75H4.75C4.19772 3.75 3.75 4.19772 3.75 4.75V8.25C3.75 8.80228 4.19772 9.25 4.75 9.25H8.25C8.80228 9.25 9.25 8.80228 9.25 8.25V4.75Z" stroke={$props.stroke} stroke-width={$props.strokeWidth} stroke-linecap="round"/><path d="M9.25 15.75C9.25 15.1977 8.80228 14.75 8.25 14.75H4.75C4.19772 14.75 3.75 15.1977 3.75 15.75V19.25C3.75 19.8023 4.19772 20.25 4.75 20.25H8.25C8.80228 20.25 9.25 19.8023 9.25 19.25V15.75Z" stroke={$props.stroke} stroke-width={$props.strokeWidth} stroke-linecap="round"/><path d="M20.25 4.75C20.25 4.19772 19.8023 3.75 19.25 3.75H15.75C15.1977 3.75 14.75 4.19772 14.75 4.75V8.25C14.75 8.80228 15.1977 9.25 15.75 9.25H19.25C19.8023 9.25 20.25 8.80228 20.25 8.25V4.75Z" stroke={$props.stroke} stroke-width={$props.strokeWidth} stroke-linecap="round"/><path d="M12 3.75V9.25" stroke={$props.stroke} stroke-width={$props.strokeWidth} stroke-linecap="round"/><path d="M20.25 12H3.75" stroke={$props.stroke} stroke-width={$props.strokeWidth} stroke-linecap="round"/><path d="M14.75 14.75V20.25" stroke={$props.stroke} stroke-width={$props.strokeWidth} stroke-linecap="round"/><path d="M17.5 14.75V20.25" stroke={$props.stroke} stroke-width={$props.strokeWidth} stroke-linecap="round"/><path d="M20.25 14.75V20.25" stroke={$props.stroke} stroke-width={$props.strokeWidth} stroke-linecap="round"/><path d="M12 14.75V20.25" stroke={$props.stroke} stroke-width={$props.strokeWidth} stroke-linecap="round"/>
        </g>
      </defs>
    )
  }
})

export { QRCodeThree }
