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

const PeopleOne = defineComponent({
  name: 'PeopleOne',
  props,
  render() {
    const $props = this.$props
    
    return h(
      <defs>
        <g id="PeopleOne">
          <path d="M9.91667 10.3333C11.5275 10.3333 12.8333 9.0275 12.8333 7.41667C12.8333 5.80584 11.5275 4.5 9.91667 4.5C8.30583 4.5 7 5.80584 7 7.41667C7 9.0275 8.30583 10.3333 9.91667 10.3333Z" stroke={$props.stroke} strokeWidth={$props.strokeWidth} stroke-linecap="round"/><path d="M15.5865 4.91666C16.4335 5.42703 17 6.3557 17 7.41666C17 8.47761 16.4335 9.40628 15.5865 9.91666" stroke={$props.stroke} strokeWidth={$props.strokeWidth} stroke-linecap="round"/><path d="M3.66663 19V19C3.66663 19.2761 3.89048 19.5 4.16663 19.5H15.6666C15.9428 19.5 16.1666 19.2761 16.1666 19V19C16.1666 17.1332 16.1666 16.1997 15.8033 15.4867C15.4838 14.8595 14.9738 14.3495 14.3466 14.0299C13.6335 13.6667 12.7001 13.6667 10.8333 13.6667H8.99996C7.13313 13.6667 6.19971 13.6667 5.48666 14.0299C4.85945 14.3495 4.34951 14.8595 4.02994 15.4867C3.66663 16.1997 3.66663 17.1332 3.66663 19Z" stroke={$props.stroke} strokeWidth={$props.strokeWidth} stroke-linecap="round"/><path d="M20.3332 19.5V19C20.3332 17.1332 20.3332 16.1998 19.9699 15.4867C19.6503 14.8595 19.1404 14.3496 18.5132 14.03" stroke={$props.stroke} strokeWidth={$props.strokeWidth} stroke-linecap="round"/>
        </g>
      </defs>
    )
  }
})

export { PeopleOne }
