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

const DeleteMessageThree = defineComponent({
  name: 'DeleteMessageThree',
  props,
  render() {
    const $props = this.$props
    
    return h(
      <defs>
        <g id="DeleteMessageThree">
          <path d="M9.5 7.55491H14.5M12 6.83813V7.55491M12 9.29633H13.9336C14.2344 9.29633 14.4671 9.55992 14.4297 9.85835L14.0547 12.8583C14.0235 13.1086 13.8108 13.2963 13.5586 13.2963H10.4414C10.1892 13.2963 9.97653 13.1086 9.94525 12.8583L9.57025 9.85835C9.53295 9.55992 9.76564 9.29633 10.0664 9.29633H12Z" stroke={$props.stroke} stroke-width={$props.strokeWidth} stroke-linecap="round"/><path d="M20.25 14.75C20.25 15.2362 20.0568 15.7025 19.713 16.0464C19.3692 16.3902 18.9029 16.5833 18.4167 16.5833H7.83088C7.56566 16.5833 7.31131 16.6887 7.12377 16.8762L3.75 20.25V5.58333C3.75 5.0971 3.94315 4.63079 4.28697 4.28697C4.63079 3.94315 5.0971 3.75 5.58333 3.75H18.4167C18.9029 3.75 19.3692 3.94315 19.713 4.28697C20.0568 4.63079 20.25 5.0971 20.25 5.58333V14.75Z" stroke={$props.stroke} stroke-width={$props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/>
        </g>
      </defs>
    )
  }
})

export { DeleteMessageThree }
  