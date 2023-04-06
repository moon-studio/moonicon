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

const MinusUser = defineComponent({
  name: 'MinusUser',
  props,
  render() {
    const $props = this.$props
    
    return h(
      <defs>
        <g id="MinusUser">
          <path d="M20.0435 11.25H15" stroke={$props.stroke} stroke-width={$props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/><path d="M9.375 11.25C11.0319 11.25 12.375 9.90685 12.375 8.25C12.375 6.59315 11.0319 5.25 9.375 5.25C7.71815 5.25 6.375 6.59315 6.375 8.25C6.375 9.90685 7.71815 11.25 9.375 11.25Z" stroke={$props.stroke} stroke-width={$props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/><path d="M15 18.75V17.25C15 16.4544 14.6839 15.6913 14.1213 15.1287C13.5587 14.5661 12.7956 14.25 12 14.25H6.75C5.95435 14.25 5.19129 14.5661 4.62868 15.1287C4.06607 15.6913 3.75 16.4544 3.75 17.25V18.75" stroke={$props.stroke} stroke-width={$props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/>
        </g>
      </defs>
    )
  }
})

export { MinusUser }
  