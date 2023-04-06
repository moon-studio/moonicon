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

const MessageTen = defineComponent({
  name: 'MessageTen',
  props,
  render() {
    const $props = this.$props
    
    return h(
      <defs>
        <g id="MessageTen">
          <path d="M16.2649 11.6028H16.2749" stroke={$props.stroke} stroke-width={$props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/><path d="M12.5 11.6028H12.51" stroke={$props.stroke} stroke-width={$props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/><path d="M8.73511 11.6028H8.74511" stroke={$props.stroke} stroke-width={$props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/><path d="M20.25 11.5417C20.2532 12.7515 19.9705 13.9451 19.425 15.025C18.7782 16.3191 17.7839 17.4076 16.5535 18.1685C15.3231 18.9294 13.9051 19.3328 12.4583 19.3333C11.2485 19.3365 10.0549 19.0538 8.975 18.5083L3.75 20.25L5.49167 15.025C4.94619 13.9451 4.66351 12.7515 4.66667 11.5417C4.66723 10.0949 5.07056 8.67694 5.83149 7.4465C6.59242 6.21606 7.6809 5.22177 8.975 4.575C10.0549 4.02952 11.2485 3.74684 12.4583 3.75H12.9167C14.8273 3.8554 16.632 4.66186 17.985 6.01495C19.3381 7.36804 20.1446 9.17268 20.25 11.0833V11.5417Z" stroke={$props.stroke} stroke-width={$props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/>
        </g>
      </defs>
    )
  }
})

export { MessageTen }
  