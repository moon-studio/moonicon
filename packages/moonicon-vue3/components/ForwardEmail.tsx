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

const ForwardEmail = defineComponent({
  name: 'ForwardEmail',
  props,
  render() {
    const $props = this.$props
    
    return h(
      <defs>
        <g id="ForwardEmail">
          <path d="M17.4344 12L20.5253 15.0117L17.4344 17.856V16.0156C15.0303 16.0156 14 18.5253 14 18.5253C14 15.6809 14.8586 13.8405 17.4344 13.8405V12Z" stroke={$props.stroke} stroke-width={$props.strokeWidth} stroke-linecap="square" stroke-linejoin="round"/><path d="M4.02319 5.72287L11.4697 11.2062C11.8224 11.4658 12.303 11.4658 12.6556 11.2062L20.1021 5.72287" stroke={$props.stroke} stroke-width={$props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/><path d="M20.5253 11.6428V6.30002C20.5253 5.74773 20.0776 5.30002 19.5253 5.30002H12.0627H4.6001C4.04781 5.30002 3.6001 5.74773 3.6001 6.30002V11.6428V16.9856C3.6001 17.5378 4.04781 17.9856 4.6001 17.9856H12.0627" stroke={$props.stroke} stroke-width={$props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/>
        </g>
      </defs>
    )
  }
})

export { ForwardEmail }
  