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

const TXTFile = defineComponent({
  name: 'TXTFile',
  props,
  render() {
    const $props = this.$props
    
    return h(
      <defs>
        <g id="TXTFile">
          <path d="M19 20.5H6C5.44772 20.5 5 20.0523 5 19.5V4.5C5 3.94772 5.44772 3.5 6 3.5H14.5858C14.851 3.5 15.1054 3.60536 15.2929 3.79289L18.7071 7.20711C18.8946 7.39464 19 7.649 19 7.91421V11V12.5" stroke={$props.stroke} stroke-width={$props.strokeWidth} stroke-linecap="round"/><path d="M12.5803 14.6001L14.7514 18.6001" stroke={$props.stroke} stroke-width={$props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/><path d="M14.7514 14.6001L12.5803 18.6001" stroke={$props.stroke} stroke-width={$props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/><path d="M9.68555 14.6001V18.6001" stroke={$props.stroke} stroke-width={$props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/><path d="M8.6001 14.6001H9.68562H10.7712" stroke={$props.stroke} stroke-width={$props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/><path d="M17.646 14.6001V18.6001" stroke={$props.stroke} stroke-width={$props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/><path d="M16.5605 14.6001H17.6461H18.7316" stroke={$props.stroke} stroke-width={$props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/>
        </g>
      </defs>
    )
  }
})

export { TXTFile }
