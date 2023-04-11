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

const WindTwo = defineComponent({
  name: 'WindTwo',
  props,
  render() {
    const $props = this.$props
    
    return h(
      <defs>
        <g id="WindTwo">
          <path d="M16.8106 17.8204C17.275 18.2417 17.8807 18.3774 18.2709 18.3774C19.968 18.3774 20.3922 16.8919 20.3922 16.1492C20.3922 14.3665 18.978 13.9209 18.2709 13.9209H7.66425" stroke={$props.stroke} strokeWidth={$props.strokeWidth} stroke-linecap="round"/><path d="M12.7598 6.17493C13.2242 5.7536 13.8299 5.61786 14.2201 5.61786C15.9172 5.61786 16.3415 7.10338 16.3415 7.84614C16.3415 9.62876 14.9272 10.0744 14.2201 10.0744H3.61346" stroke={$props.stroke} strokeWidth={$props.strokeWidth} stroke-linecap="round"/>
        </g>
      </defs>
    )
  }
})

export { WindTwo }
