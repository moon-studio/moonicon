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

const SearchMessageThree = defineComponent({
  name: 'SearchMessageThree',
  props,
  render() {
    const $props = this.$props
    
    return h(
      <defs>
        <g id="SearchMessageThree">
          <path d="M20.25 14.75C20.25 15.2362 20.0568 15.7025 19.713 16.0464C19.3692 16.3902 18.9029 16.5833 18.4167 16.5833H7.83088C7.56566 16.5833 7.31131 16.6887 7.12377 16.8762L3.75 20.25V5.58333C3.75 5.0971 3.94315 4.63079 4.28697 4.28697C4.63079 3.94315 5.0971 3.75 5.58333 3.75H18.4167C18.9029 3.75 19.3692 3.94315 19.713 4.28697C20.0568 4.63079 20.25 5.0971 20.25 5.58333V14.75Z" stroke={$props.stroke} stroke-width={$props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/><path d="M12.5 10.5827C12.7924 10.2759 13 9.83135 13 9.19995C13 8.53328 12.6 7.19995 11 7.19995C10.3333 7.19995 9 7.59995 9 9.19995C9 9.86662 9.4 11.2 11 11.2C11.4036 11.2 12.0515 11.0534 12.5 10.5827ZM12.5 10.5827L15 12.7" stroke={$props.stroke} stroke-width={$props.strokeWidth} stroke-linecap="round"/>
        </g>
      </defs>
    )
  }
})

export { SearchMessageThree }
