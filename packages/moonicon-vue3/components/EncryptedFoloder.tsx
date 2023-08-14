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

const EncryptedFoloder = defineComponent({
  name: 'EncryptedFoloder',
  props,
  render() {
    const $props = this.$props
    
    return h(
      <defs>
        <g id="EncryptedFoloder">
          <path d="M4.0835 5.33333C4.0835 4.8731 4.45659 4.5 4.91683 4.5H9.91683L12.0002 7H19.0835C19.5437 7 19.9168 7.37308 19.9168 7.83333V18.6667C19.9168 19.1269 19.5437 19.5 19.0835 19.5H4.91683C4.45659 19.5 4.0835 19.1269 4.0835 18.6667V5.33333Z" stroke={$props.stroke} stroke-width={$props.strokeWidth} stroke-linejoin="round"/><path d="M10.2857 12H9V16H15V12H13.7143M10.2857 12H13.7143M10.2857 12C10.2857 10.4 11.4286 10 12 10C13.3714 10 13.7143 11.3333 13.7143 12" stroke={$props.stroke} stroke-width={$props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/>
        </g>
      </defs>
    )
  }
})

export { EncryptedFoloder }
