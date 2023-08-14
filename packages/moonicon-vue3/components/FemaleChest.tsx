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

const FemaleChest = defineComponent({
  name: 'FemaleChest',
  props,
  render() {
    const $props = this.$props
    
    return h(
      <defs>
        <g id="FemaleChest">
          <path d="M6.75181 15.1609C7.54578 16.644 7.33144 19.4862 7.16603 20.4131" stroke={$props.stroke} stroke-width={$props.strokeWidth} stroke-linecap="round"/><path d="M17.1634 15.2756C16.3694 16.7587 16.6423 19.4862 16.8077 20.4131" stroke={$props.stroke} stroke-width={$props.strokeWidth} stroke-linecap="round"/><path d="M10.3197 3.59998C10.3197 6.51856 8.37094 6.57303 6.20713 7.34175C3.99164 8.12883 3.52803 10.2068 3.99578 14.3885C4.28532 16.9769 4.49356 18.9645 4.36099 20.4131" stroke={$props.stroke} stroke-width={$props.strokeWidth} stroke-linecap="round"/><path d="M13.9555 3.59998C13.9555 6.51856 15.9043 6.57303 18.0681 7.34175C20.2836 8.12883 20.7472 10.2068 20.2794 14.3885C19.9899 16.9769 19.7817 18.9645 19.9142 20.4131" stroke={$props.stroke} stroke-width={$props.strokeWidth} stroke-linecap="round"/><path d="M6 13.0921C6 14.0921 6.6 16.0921 9 16.0921C10 16.0921 12 15.4921 12 13.0921C12 12.3461 11.6661 11.0435 10.5 10.43" stroke={$props.stroke} stroke-width={$props.strokeWidth} stroke-linecap="round"/><path d="M18 13.0921C18 14.0921 17.4 16.0921 15 16.0921C14 16.0921 12 15.4921 12 13.0921C12 12.3461 12.3339 11.0435 13.5 10.43" stroke={$props.stroke} stroke-width={$props.strokeWidth} stroke-linecap="round"/>
        </g>
      </defs>
    )
  }
})

export { FemaleChest }
