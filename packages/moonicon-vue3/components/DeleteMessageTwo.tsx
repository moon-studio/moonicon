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

const DeleteMessageTwo = defineComponent({
  name: 'DeleteMessageTwo',
  props,
  render() {
    const $props = this.$props
    
    return h(
      <defs>
        <g id="DeleteMessageTwo">
          <path d="M10 8.80003H15M12.5 8.08325V8.80003M12.5 10.5414H14.4336C14.7344 10.5414 14.9671 10.805 14.9297 11.1035L14.5547 14.1035C14.5235 14.3537 14.3108 14.5414 14.0586 14.5414H10.9414C10.6892 14.5414 10.4765 14.3537 10.4453 14.1035L10.0703 11.1035C10.0329 10.805 10.2656 10.5414 10.5664 10.5414H12.5Z" stroke={$props.stroke} stroke-width={$props.strokeWidth} stroke-linecap="round"/><path d="M20.25 11.5417C20.2532 12.7516 19.9705 13.9451 19.425 15.025C18.7782 16.3191 17.7839 17.4076 16.5535 18.1685C15.3231 18.9295 13.9051 19.3328 12.4583 19.3334C11.2485 19.3365 10.0549 19.0538 8.975 18.5084L3.75 20.25L5.49167 15.025C4.94619 13.9451 4.66351 12.7516 4.66667 11.5417C4.66723 10.095 5.07056 8.67697 5.83149 7.44653C6.59242 6.21609 7.6809 5.2218 8.975 4.57503C10.0549 4.02955 11.2485 3.74687 12.4583 3.75003H12.9167C14.8273 3.85544 16.632 4.66189 17.985 6.01498C19.3381 7.36807 20.1446 9.17271 20.25 11.0834V11.5417Z" stroke={$props.stroke} stroke-width={$props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/>
        </g>
      </defs>
    )
  }
})

export { DeleteMessageTwo }
  