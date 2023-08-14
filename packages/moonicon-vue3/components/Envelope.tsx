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

const Envelope = defineComponent({
  name: 'Envelope',
  props,
  render() {
    const $props = this.$props
    
    return h(
      <defs>
        <g id="Envelope">
          <path d="M18.441 4.6001C18.441 4.04781 17.9933 3.6001 17.441 3.6001H6.52222C5.96993 3.6001 5.52222 4.04781 5.52222 4.6001V19.3441C5.52222 19.8963 5.96993 20.3441 6.52222 20.3441H17.441C17.9933 20.3441 18.441 19.8963 18.441 19.3441V4.6001Z" stroke={$props.stroke} stroke-width={$props.strokeWidth} stroke-linecap="square" stroke-linejoin="round"/><path d="M11.9814 7.2561V16.9952" stroke={$props.stroke} stroke-width={$props.strokeWidth} stroke-linecap="square" stroke-linejoin="round"/><path d="M18.441 16.9951H11.9816H5.52222" stroke={$props.stroke} stroke-width={$props.strokeWidth} stroke-linecap="square" stroke-linejoin="round"/><path d="M6.10718 4.2561L8.03663 6.85259C8.2253 7.10648 8.52297 7.25613 8.83928 7.25613H14.9676C15.2839 7.25613 15.5816 7.10648 15.7703 6.85259L17.6997 4.25613" stroke={$props.stroke} stroke-width={$props.strokeWidth} stroke-linecap="square" stroke-linejoin="round"/>
        </g>
      </defs>
    )
  }
})

export { Envelope }
