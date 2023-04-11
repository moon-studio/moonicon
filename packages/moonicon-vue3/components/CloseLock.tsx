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

const CloseLock = defineComponent({
  name: 'CloseLock',
  props,
  render() {
    const $props = this.$props
    
    return h(
      <defs>
        <g id="CloseLock">
          <path d="M16.2 10.6923V7.42308C16.2 5.25642 14.3196 3.5 12 3.5C9.6804 3.5 7.8 5.25642 7.8 7.42308V10.6923M7.1 20.5H16.9C18.0598 20.5 19 19.6218 19 18.5385V12.6538C19 11.5705 18.0598 10.6923 16.9 10.6923H7.1C5.9402 10.6923 5 11.5705 5 12.6538V18.5385C5 19.6218 5.9402 20.5 7.1 20.5Z" stroke={$props.stroke} strokeWidth={$props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/>
        </g>
      </defs>
    )
  }
})

export { CloseLock }
