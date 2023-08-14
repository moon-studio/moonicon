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

const SearchMessageTwo = defineComponent({
  name: 'SearchMessageTwo',
  props,
  render() {
    const $props = this.$props
    
    return h(
      <defs>
        <g id="SearchMessageTwo">
          <path d="M20.25 11.5417C20.2532 12.7516 19.9705 13.9451 19.425 15.025C18.7782 16.3191 17.7839 17.4076 16.5535 18.1685C15.3231 18.9295 13.9051 19.3328 12.4583 19.3334C11.2485 19.3365 10.0549 19.0538 8.975 18.5084L3.75 20.25L5.49167 15.025C4.94619 13.9451 4.66351 12.7516 4.66667 11.5417C4.66723 10.095 5.07056 8.67697 5.83149 7.44653C6.59242 6.21609 7.6809 5.2218 8.975 4.57503C10.0549 4.02955 11.2485 3.74687 12.4583 3.75003H12.9167C14.8273 3.85544 16.632 4.66189 17.985 6.01498C19.3381 7.36807 20.1446 9.17271 20.25 11.0834V11.5417Z" stroke={$props.stroke} stroke-width={$props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/><path d="M13 12.1828C13.2924 11.876 13.5 11.4314 13.5 10.8C13.5 10.1334 13.1 8.80005 11.5 8.80005C10.8333 8.80005 9.5 9.20005 9.5 10.8C9.5 11.4667 9.9 12.8 11.5 12.8C11.9036 12.8 12.5515 12.6535 13 12.1828ZM13 12.1828L15.5 14.3" stroke={$props.stroke} stroke-width={$props.strokeWidth} stroke-linecap="round"/>
        </g>
      </defs>
    )
  }
})

export { SearchMessageTwo }
