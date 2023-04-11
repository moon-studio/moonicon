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

const RefreshTwo = defineComponent({
  name: 'RefreshTwo',
  props,
  render() {
    const $props = this.$props
    
    return h(
      <defs>
        <g id="RefreshTwo">
          <path d="M16.1666 3.53003L19.5 6.86336L16.1666 10.1967" stroke={$props.stroke} strokeWidth={$props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/><path d="M4.5 11.87V10.2033C4.5 9.31927 4.85119 8.47143 5.47631 7.84631C6.10143 7.22118 6.94928 6.87 7.83333 6.87H19.5" stroke={$props.stroke} strokeWidth={$props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/><path d="M7.83333 20.4667L4.5 17.1334L7.83333 13.8" stroke={$props.stroke} strokeWidth={$props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/><path d="M19.5 12.13V13.7967C19.5 14.6807 19.1488 15.5286 18.5237 16.1537C17.8986 16.7788 17.0507 17.13 16.1667 17.13H4.5" stroke={$props.stroke} strokeWidth={$props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/>
        </g>
      </defs>
    )
  }
})

export { RefreshTwo }
