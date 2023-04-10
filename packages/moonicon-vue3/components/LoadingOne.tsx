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

const LoadingOne = defineComponent({
  name: 'LoadingOne',
  props,
  render() {
    const $props = this.$props
    
    return h(
      <defs>
        <g id="LoadingOne">
          <path d="M20.3334 12C20.3334 16.6023 16.6024 20.3333 12 20.3333C7.39767 20.3333 3.66671 16.6023 3.66671 12C3.66671 7.39758 7.39767 3.66663 12 3.66663" stroke={$props.stroke} strokeWidth={$props.strokeWidth} stroke-linecap="round" stroke-linejoin="bevel"/>

        </g>
      </defs>
    )
  }
})

export { LoadingOne }
