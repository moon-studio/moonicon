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

const Trunk = defineComponent({
  name: 'Trunk',
  props,
  render() {
    const $props = this.$props
    
    return h(
      <defs>
        <g id="Trunk">
          <path d="M9.86346 10.5278V14.5428M14.1574 10.5278V14.5428" stroke={$props.stroke} stroke-width={$props.strokeWidth} stroke-linecap="round"/><path d="M14.6943 18.7249V20.3977" stroke={$props.stroke} stroke-width={$props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/><path d="M9.32684 18.7249V20.3977" stroke={$props.stroke} stroke-width={$props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/><path d="M8.43231 3.66895H15.5888" stroke={$props.stroke} stroke-width={$props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/><path d="M13.7997 7.0146V4.00342" stroke={$props.stroke} stroke-width={$props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/><path d="M10.2214 7.01461V4.00342" stroke={$props.stroke} stroke-width={$props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/><path d="M15.5889 7.01465H8.43238C7.44427 7.01465 6.64325 7.76363 6.64325 8.68754V17.052C6.64325 17.9759 7.44427 18.7249 8.43238 18.7249H15.5889C16.577 18.7249 17.3781 17.9759 17.3781 17.052V8.68754C17.3781 7.76363 16.577 7.01465 15.5889 7.01465Z" stroke={$props.stroke} stroke-width={$props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/>
        </g>
      </defs>
    )
  }
})

export { Trunk }
  