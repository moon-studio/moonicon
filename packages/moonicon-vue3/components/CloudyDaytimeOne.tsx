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

const CloudyDaytimeOne = defineComponent({
  name: 'CloudyDaytimeOne',
  props,
  render() {
    const $props = this.$props
    
    return h(
      <defs>
        <g id="CloudyDaytimeOne">
          <path d="M5.99994 16H17.9999M3.99994 13.5H12.4999M19.9999 11H11.4999M7.99994 17.917C9.00195 18.5748 10.3096 19 11.9999 19C13.0403 19 14.5444 18.7217 15.892 17.917M18.3685 9C17.51 6.97647 15.6444 5 11.9999 5C9.73766 5 5.282 6.31603 5.01272 11.5" stroke={$props.stroke} strokeWidth={$props.strokeWidth} stroke-linecap="round"/>
        </g>
      </defs>
    )
  }
})

export { CloudyDaytimeOne }
