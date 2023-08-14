import { defineComponent, h } from 'vue'
import type { PropType } from 'vue'
  
const props = {
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

const Passport = defineComponent({
  name: 'Passport',
  props,
  render() {
    const $props = this.$props
    
    return h(
      <defs>
        <g id="Passport">
          <path d="M6.16663 7.16666C6.16663 6.61437 6.61434 6.16666 7.16663 6.16666H15.3333H16.8333C17.3856 6.16666 17.8333 6.61437 17.8333 7.16666V19.3333C17.8333 19.8856 17.3856 20.3333 16.8333 20.3333H7.16663C6.61434 20.3333 6.16663 19.8856 6.16663 19.3333V7.16666Z" stroke={$props.stroke} stroke-width={$props.strokeWidth} stroke-linecap="round"/><path d="M7 6.16681L14.2643 3.12584C14.9232 2.85001 15.6504 3.33398 15.6504 4.04827V6.16668" stroke={$props.stroke} stroke-width={$props.strokeWidth} stroke-linecap="round"/><path d="M12 13.6667C12.9205 13.6667 13.6667 12.9205 13.6667 12C13.6667 11.0795 12.9205 10.3333 12 10.3333C11.0796 10.3333 10.3334 11.0795 10.3334 12C10.3334 12.9205 11.0796 13.6667 12 13.6667Z" stroke={$props.stroke} stroke-width={$props.strokeWidth} stroke-linecap="round"/><path d="M10.3334 16.1667H13.6667" stroke={$props.stroke} stroke-width={$props.strokeWidth} stroke-linecap="round"/>
        </g>
      </defs>
    )
  }
})

export { Passport }
