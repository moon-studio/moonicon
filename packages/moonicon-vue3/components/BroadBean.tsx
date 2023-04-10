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

const BroadBean = defineComponent({
  name: 'BroadBean',
  props,
  render() {
    const $props = this.$props
    
    return h(
      <defs>
        <g id="BroadBean">
          <path d="M20.2333 15.0167C20.2332 12.3084 18.5665 11.2823 17.3166 10.8578C16.0667 10.4334 15.2332 10.4334 13.9833 9.1834C12.7335 7.9334 12.7331 5.43339 10.2333 4.60006C7.7335 3.76672 4.77871 5.01674 3.98342 7.9334C3.18813 10.8501 5.44138 14.6001 6.48304 15.8501C7.52471 17.1001 9.60883 19.1834 13.1501 19.6001C16.6914 20.0167 20.2334 17.7251 20.2333 15.0167Z" stroke={$props.stroke} strokeWidth={$props.strokeWidth} stroke-linejoin="bevel"/>
<path d="M16.4833 11.2667C13.5666 14.9985 9.39994 10.8681 12.3166 7.10001" stroke={$props.stroke} strokeWidth={$props.strokeWidth} stroke-linecap="square" stroke-linejoin="bevel"/>

        </g>
      </defs>
    )
  }
})

export { BroadBean }
