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

const Music = defineComponent({
  name: 'Music',
  props,
  render() {
    const $props = this.$props
    
    return h(
      <defs>
        <g id="Music">
          <path d="M9.5 17V6.16667L19.5 4.5V15.3333" stroke={$props.stroke} strokeWidth={$props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/>
<path d="M7 19.5C8.38071 19.5 9.5 18.3807 9.5 17C9.5 15.6193 8.38071 14.5 7 14.5C5.61929 14.5 4.5 15.6193 4.5 17C4.5 18.3807 5.61929 19.5 7 19.5Z" stroke={$props.stroke} strokeWidth={$props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/>
<path d="M17 17.8334C18.3807 17.8334 19.5 16.7141 19.5 15.3334C19.5 13.9527 18.3807 12.8334 17 12.8334C15.6193 12.8334 14.5 13.9527 14.5 15.3334C14.5 16.7141 15.6193 17.8334 17 17.8334Z" stroke={$props.stroke} strokeWidth={$props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/>

        </g>
      </defs>
    )
  }
})

export { Music }
