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

const Shorts = defineComponent({
  name: 'Shorts',
  props,
  render() {
    const $props = this.$props
    
    return h(
      <defs>
        <g id="Shorts">
          <path d="M4.49994 17L5.33328 7H18.6666L19.4999 17H13.1841L11.9999 12.4167L10.8157 17H7.65783H6.07889H4.49994Z" stroke={$props.stroke} strokeWidth={$props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/><path d="M9.49994 7H14.4999" stroke={$props.stroke} strokeWidth={$props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/><path d="M8.08344 7C8.08344 7 8.08344 9.5 7.25011 10.3333C6.41677 11.1667 4.99994 12.3333 4.99994 12.3333" stroke={$props.stroke} strokeWidth={$props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/><path d="M15.9999 7C15.9999 7 15.9999 9.5 16.8333 10.3333C17.6666 11.1667 19.0833 12.3333 19.0833 12.3333" stroke={$props.stroke} strokeWidth={$props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/><circle cx="11.9999" cy="9" r="0.75" fill={$props.fill}/>
        </g>
      </defs>
    )
  }
})

export { Shorts }
