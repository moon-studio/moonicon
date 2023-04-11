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

const View = defineComponent({
  name: 'View',
  props,
  render() {
    const $props = this.$props
    
    return h(
      <defs>
        <g id="View">
          <path d="M2.11343 12.6243C1.94852 12.2245 1.94852 11.7755 2.11343 11.3757C3.65272 7.64448 7.49888 5 12 5C16.5012 5 20.3473 7.64448 21.8866 11.3757C22.0515 11.7755 22.0515 12.2245 21.8866 12.6243C20.3473 16.3555 16.5012 19 12 19C7.49888 19 3.65272 16.3555 2.11343 12.6243Z" stroke={$props.stroke} strokeWidth={$props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/><circle cx="12" cy="12" r="3" stroke={$props.stroke} strokeWidth={$props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/>
        </g>
      </defs>
    )
  }
})

export { View }
