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

const MagicHat = defineComponent({
  name: 'MagicHat',
  props,
  render() {
    const $props = this.$props
    
    return h(
      <defs>
        <g id="MagicHat">
          <path d="M17.8334 6.16666C17.625 7.41666 17.4167 8.04166 17.2084 9.49999C17.0417 10.6667 17 12.2361 17 13C17.9028 13.4167 19.9167 14.5 19.9167 16.1667C19.9167 17.8333 17.8334 19.9167 12 19.9167C6.16669 19.9167 4.08335 17.8333 4.08335 16.1667C4.08335 14.5 6.79169 13 6.79169 13C6.79169 13 7.00002 10.9583 6.79169 9.49999C6.58335 8.04166 6.37502 7.41666 6.16669 6.16666" stroke={$props.stroke} strokeWidth={$props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6.84165 13C6.84165 14.6667 7.25832 16.3333 12.05 16.3333" stroke={$props.stroke} strokeWidth={$props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/>
<path d="M11.9999 8.25001C8.77826 8.25001 6.16658 7.31727 6.16658 6.16668C6.16658 5.01608 8.77826 4.08334 11.9999 4.08334C15.2216 4.08334 17.8333 5.01608 17.8333 6.16668C17.8333 7.31727 15.2216 8.25001 11.9999 8.25001Z" stroke={$props.stroke} strokeWidth={$props.strokeWidth}/>

        </g>
      </defs>
    )
  }
})

export { MagicHat }
