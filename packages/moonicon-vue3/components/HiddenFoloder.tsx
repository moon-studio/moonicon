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

const HiddenFoloder = defineComponent({
  name: 'HiddenFoloder',
  props,
  render() {
    const $props = this.$props
    
    return h(
      <defs>
        <g id="HiddenFoloder">
          <path d="M4.0835 5.33333C4.0835 4.8731 4.45659 4.5 4.91683 4.5H9.91683L12.0002 7H19.0835C19.5437 7 19.9168 7.37308 19.9168 7.83333V18.6667C19.9168 19.1269 19.5437 19.5 19.0835 19.5H4.91683C4.45659 19.5 4.0835 19.1269 4.0835 18.6667V5.33333Z" stroke={$props.stroke} stroke-width={$props.strokeWidth} stroke-linejoin="round"/><path d="M8.08594 10.8501C8.22303 11.3003 8.43073 11.718 8.69564 12.0891C9.43825 13.1297 10.63 13.8042 11.9737 13.8042C13.3174 13.8042 14.5091 13.1297 15.2518 12.0891C15.5167 11.718 15.7244 11.3003 15.8614 10.8501" stroke={$props.stroke} stroke-width={$props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/><path d="M10.7692 13.8379L10.2661 15.7402" stroke={$props.stroke} stroke-width={$props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/><path d="M13.1821 13.8379L13.6853 15.7402" stroke={$props.stroke} stroke-width={$props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/><path d="M15.0613 12.9937L16.4358 14.3862" stroke={$props.stroke} stroke-width={$props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/><path d="M7.6001 14.3017L8.97466 12.9092" stroke={$props.stroke} stroke-width={$props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/>
        </g>
      </defs>
    )
  }
})

export { HiddenFoloder }
