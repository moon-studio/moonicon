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

const Candy = defineComponent({
  name: 'Candy',
  props,
  render() {
    const $props = this.$props
    
    return h(
      <defs>
        <g id="Candy">
          <path d="M12 16.7417C9.35359 16.7417 7.20829 14.5964 7.20829 11.95C7.20829 9.30363 9.35359 7.15833 12 7.15833C14.6463 7.15833 16.7916 9.30363 16.7916 11.95C16.7916 14.5964 14.6463 16.7417 12 16.7417Z" stroke={$props.stroke} strokeWidth={$props.strokeWidth} stroke-linecap="square" stroke-linejoin="bevel"/><path d="M12.2874 14.1861C13.3459 14.1861 14.204 13.3279 14.204 12.2694" stroke={$props.stroke} strokeWidth={$props.strokeWidth} stroke-linecap="round"/><path d="M15.3138 8.59978L19.6796 7.92332C20.4886 7.79798 20.8125 6.80685 20.2336 6.22801L17.7522 3.74657C17.179 3.17336 16.1978 3.48459 16.0597 4.28339L15.3138 8.59978Z" stroke={$props.stroke} strokeWidth={$props.strokeWidth} stroke-linejoin="bevel"/><path d="M8.6328 15.3277L4.30306 16.0267C3.49778 16.1567 3.17854 17.1442 3.75533 17.721L6.23222 20.1979C6.8084 20.7741 7.79485 20.4562 7.92624 19.652L8.6328 15.3277Z" stroke={$props.stroke} strokeWidth={$props.strokeWidth} stroke-linejoin="bevel"/>
        </g>
      </defs>
    )
  }
})

export { Candy }
