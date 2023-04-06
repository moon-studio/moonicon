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

const PeopleFour = defineComponent({
  name: 'PeopleFour',
  props,
  render() {
    const $props = this.$props
    
    return h(
      <defs>
        <g id="PeopleFour">
          <path d="M3.66675 19.5V19C3.66675 17.1332 3.66675 16.1998 4.03006 15.4867C4.34964 14.8595 4.85957 14.3496 5.48678 14.03" stroke={$props.stroke} stroke-width={$props.strokeWidth} stroke-linecap="round"/><path d="M20.3332 19.5V19C20.3332 17.1332 20.3332 16.1998 19.9699 15.4867C19.6503 14.8595 19.1404 14.3496 18.5132 14.03" stroke={$props.stroke} stroke-width={$props.strokeWidth} stroke-linecap="round"/><path d="M7 18.6667V18.6667C7 19.1269 7.3731 19.5 7.83333 19.5H16.1667C16.6269 19.5 17 19.1269 17 18.6667V18.6667C17 17.1135 17 16.3369 16.7462 15.7244C16.408 14.9076 15.759 14.2587 14.9423 13.9204C14.3297 13.6667 13.5531 13.6667 12 13.6667C10.4469 13.6667 9.67029 13.6667 9.05771 13.9204C8.24096 14.2587 7.59204 14.9076 7.25375 15.7244C7 16.3369 7 17.1135 7 18.6667Z" stroke={$props.stroke} stroke-width={$props.strokeWidth} stroke-linecap="round"/><path d="M17 5.02286C17.7556 5.54992 18.25 6.42557 18.25 7.41674C18.25 8.40787 17.7556 9.28357 17 9.81062" stroke={$props.stroke} stroke-width={$props.strokeWidth} stroke-linecap="round"/><path d="M7 5.02286C6.24438 5.54992 5.75 6.42557 5.75 7.41674C5.75 8.4777 6.3165 9.40637 7.1635 9.91674" stroke={$props.stroke} stroke-width={$props.strokeWidth} stroke-linecap="round"/><path d="M12 10.3333C13.6109 10.3333 14.9167 9.0275 14.9167 7.41667C14.9167 5.80584 13.6109 4.5 12 4.5C10.3892 4.5 9.08337 5.80584 9.08337 7.41667C9.08337 9.0275 10.3892 10.3333 12 10.3333Z" stroke={$props.stroke} stroke-width={$props.strokeWidth} stroke-linecap="round"/>
        </g>
      </defs>
    )
  }
})

export { PeopleFour }
  