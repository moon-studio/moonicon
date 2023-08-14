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

const ForwardMessageThree = defineComponent({
  name: 'ForwardMessageThree',
  props,
  render() {
    const $props = this.$props
    
    return h(
      <defs>
        <g id="ForwardMessageThree">
          <path d="M20.25 14.75C20.25 15.2362 20.0568 15.7025 19.713 16.0464C19.3692 16.3902 18.9029 16.5833 18.4167 16.5833H7.83088C7.56566 16.5833 7.31131 16.6887 7.12377 16.8762L3.75 20.25V5.58333C3.75 5.0971 3.94315 4.63079 4.28697 4.28697C4.63079 3.94315 5.0971 3.75 5.58333 3.75H18.4167C18.9029 3.75 19.3692 3.94315 19.713 4.28697C20.0568 4.63079 20.25 5.0971 20.25 5.58333V14.75Z" stroke={$props.stroke} stroke-width={$props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/><path d="M12.1975 6.21985L15.7538 9.68494L12.1975 12.9575V10.84C9.43152 10.84 8.24609 13.7275 8.24609 13.7275C8.24609 10.455 9.23395 8.3374 12.1975 8.3374V6.21985Z" stroke={$props.stroke} stroke-width={$props.strokeWidth} stroke-linecap="square" stroke-linejoin="round"/>
        </g>
      </defs>
    )
  }
})

export { ForwardMessageThree }
