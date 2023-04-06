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

const MaleChest = defineComponent({
  name: 'MaleChest',
  props,
  render() {
    const $props = this.$props
    
    return h(
      <defs>
        <g id="MaleChest">
          <path d="M14.8157 15C17.6256 15 17.6256 13.7493 17.6256 11.8815" stroke={$props.stroke} stroke-width={$props.strokeWidth} stroke-linecap="round"/><path d="M9.18433 15C6.37439 15 6.37439 13.7493 6.37439 11.8815" stroke={$props.stroke} stroke-width={$props.strokeWidth} stroke-linecap="round"/><path d="M17.0599 14.5C16.5939 16.5665 16.4284 19.4175 16.5939 20.4065" stroke={$props.stroke} stroke-width={$props.strokeWidth} stroke-linecap="round"/><path d="M6.94006 14.5C7.40614 16.5665 7.57155 19.4175 7.40614 20.4065" stroke={$props.stroke} stroke-width={$props.strokeWidth} stroke-linecap="round"/><path d="M14.1426 3.5C14.1426 4.83333 15.5175 7.12048 17.0175 7.13351C21.0594 7.41186 20.9051 9.12134 20.511 11.6993C20.117 14.2773 20.8597 16.7856 20.5111 20.2694" stroke={$props.stroke} stroke-width={$props.strokeWidth} stroke-linecap="round"/><path d="M9.85743 3.5C9.85743 4.83333 8.48249 7.12048 6.98249 7.13351C2.94058 7.41186 3.09493 9.12134 3.48899 11.6993C3.88305 14.2773 3.14031 16.7856 3.48893 20.2694" stroke={$props.stroke} stroke-width={$props.strokeWidth} stroke-linecap="round"/>
        </g>
      </defs>
    )
  }
})

export { MaleChest }
  