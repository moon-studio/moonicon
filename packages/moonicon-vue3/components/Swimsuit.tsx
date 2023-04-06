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

const Swimsuit = defineComponent({
  name: 'Swimsuit',
  props,
  render() {
    const $props = this.$props
    
    return h(
      <defs>
        <g id="Swimsuit">
          <path d="M7.21161 7.47565L9.86678 4.48116C10.5748 3.81571 12.4157 2.88409 14.1151 4.48116L16.7702 7.47565" stroke={$props.stroke} stroke-width={$props.strokeWidth} stroke-linecap="round"/><path d="M8.27356 11.979C6.80715 11.979 5.61839 10.7983 5.61839 9.34179C5.61839 8.92563 5.7155 8.53191 5.88838 8.18184C6.02713 7.9009 6.3334 7.75442 6.64549 7.78234C8.13723 7.91581 10.3977 8.66232 10.3979 10.9241C9.91348 11.5647 9.14223 11.979 8.27356 11.979Z" stroke={$props.stroke} stroke-width={$props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/><path d="M15.7083 11.9787C17.1747 11.9787 18.3634 10.798 18.3634 9.34155C18.3634 8.92539 18.2663 8.53167 18.0934 8.1816C17.9547 7.90065 17.6484 7.75417 17.3363 7.7821C15.8446 7.91557 13.5841 8.66207 13.5839 10.9239C14.0683 11.5644 14.8396 11.9787 15.7083 11.9787Z" stroke={$props.stroke} stroke-width={$props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/><path d="M9.86688 11.4513H14.1152" stroke={$props.stroke} stroke-width={$props.strokeWidth} stroke-linecap="round"/><path d="M5.61859 15.1434H18.3634L17.8324 17.2531C16.2393 17.2531 13.0531 18.3891 13.0531 20.4178H10.9289C10.9289 18.3891 7.74273 17.2531 6.14963 17.2531L5.61859 15.1434Z" stroke={$props.stroke} stroke-width={$props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/>
        </g>
      </defs>
    )
  }
})

export { Swimsuit }
  