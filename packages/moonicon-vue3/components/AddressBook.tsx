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

const AddressBook = defineComponent({
  name: 'AddressBook',
  props,
  render() {
    const $props = this.$props
    
    return h(
      <defs>
        <g id="AddressBook">
          <path d="M5.40173 17V19.3333C5.40173 19.8856 5.84945 20.3333 6.40173 20.3333H18.3714C18.9237 20.3333 19.3714 19.8856 19.3714 19.3333V4.66666C19.3714 4.11437 18.9237 3.66666 18.3714 3.66666H6.40173C5.84945 3.66666 5.40173 4.11437 5.40173 4.66666V6.99999" stroke={$props.stroke} stroke-width={$props.strokeWidth} stroke-linecap="round"/><path d="M4.52869 14.5H6.27489" stroke={$props.stroke} stroke-width={$props.strokeWidth} stroke-linecap="round"/><path d="M4.52869 12H6.27489" stroke={$props.stroke} stroke-width={$props.strokeWidth} stroke-linecap="round"/><path d="M4.52869 9.5H6.27489" stroke={$props.stroke} stroke-width={$props.strokeWidth} stroke-linecap="round"/><path d="M12.3866 10.75C13.351 10.75 14.1328 10.0038 14.1328 9.08332C14.1328 8.16285 13.351 7.41666 12.3866 7.41666C11.4222 7.41666 10.6404 8.16285 10.6404 9.08332C10.6404 10.0038 11.4222 10.75 12.3866 10.75Z" stroke={$props.stroke} stroke-width={$props.strokeWidth} stroke-linecap="round"/><path d="M15.879 16.5833C15.879 14.7424 14.3154 13.25 12.3866 13.25C10.4578 13.25 8.89417 14.7424 8.89417 16.5833" stroke={$props.stroke} stroke-width={$props.strokeWidth} stroke-linecap="round"/>
        </g>
      </defs>
    )
  }
})

export { AddressBook }
