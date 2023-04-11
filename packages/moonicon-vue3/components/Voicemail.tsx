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

const Voicemail = defineComponent({
  name: 'Voicemail',
  props,
  render() {
    const $props = this.$props
    
    return h(
      <defs>
        <g id="Voicemail">
          <path d="M7.125 15.3999C8.98896 15.3999 10.5 13.8889 10.5 12.0249C10.5 10.1609 8.98896 8.6499 7.125 8.6499C5.26104 8.6499 3.75 10.1609 3.75 12.0249C3.75 13.8889 5.26104 15.3999 7.125 15.3999Z" stroke={$props.stroke} strokeWidth={$props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/><path d="M16.875 15.3999C18.739 15.3999 20.25 13.8889 20.25 12.0249C20.25 10.1609 18.739 8.6499 16.875 8.6499C15.011 8.6499 13.5 10.1609 13.5 12.0249C13.5 13.8889 15.011 15.3999 16.875 15.3999Z" stroke={$props.stroke} strokeWidth={$props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/><path d="M7.125 15.3999H16.875" stroke={$props.stroke} strokeWidth={$props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/>
        </g>
      </defs>
    )
  }
})

export { Voicemail }
