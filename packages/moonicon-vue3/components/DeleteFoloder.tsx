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

const DeleteFoloder = defineComponent({
  name: 'DeleteFoloder',
  props,
  render() {
    const $props = this.$props
    
    return h(
      <defs>
        <g id="DeleteFoloder">
          <path d="M4.08337 5.33333C4.08337 4.8731 4.45647 4.5 4.91671 4.5H9.91671L12 7H19.0834C19.5436 7 19.9167 7.37308 19.9167 7.83333V18.6667C19.9167 19.1269 19.5436 19.5 19.0834 19.5H4.91671C4.45647 19.5 4.08337 19.1269 4.08337 18.6667V5.33333Z" stroke={$props.stroke} strokeWidth={$props.strokeWidth} stroke-linejoin="round"/><path d="M9 10.625H9.85714M15 10.625H14.1429M14.1429 10.625V16.75H9.85714V10.625M14.1429 10.625H12M9.85714 10.625H12M12 12.375V15M12 9.75V10.625" stroke={$props.stroke} strokeWidth={$props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/>
        </g>
      </defs>
    )
  }
})

export { DeleteFoloder }
