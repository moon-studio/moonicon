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

const UserOne = defineComponent({
  name: 'UserOne',
  props,
  render() {
    const $props = this.$props
    
    return h(
      <defs>
        <g id="UserOne">
          <path d="M8.73469 6.73764C8.73469 5.0764 9.952 4 12 4C14.048 4 15.2653 5.0764 15.2653 6.73764C15.2653 8.39888 14.048 9.47529 12 9.47529C9.952 9.47529 8.73469 8.39888 8.73469 6.73764Z" stroke={$props.stroke} stroke-width={$props.strokeWidth}/><path d="M4 18.1923C4 14.6139 7.58857 13.1863 12 13.1863C16.4114 13.1863 20 14.6139 20 18.1923C20 19.2148 18.9749 20 17.7143 20H6.28571C5.02514 20 4 19.2148 4 18.1923Z" stroke={$props.stroke} stroke-width={$props.strokeWidth}/>
        </g>
      </defs>
    )
  }
})

export { UserOne }
  