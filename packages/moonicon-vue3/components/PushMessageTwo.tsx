import { defineComponent, h } from 'vue'
import type { PropType } from 'vue'
  
const props = {
  size: {
    type: [Number, String] as PropType<number | string>,
    default: '24'
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

const PushMessageTwo = defineComponent({
  name: 'PushMessageTwo',
  props,
  setup(props) {
    return () => (
      <svg
        width={props.size}
        height={props.size}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path d="M20.25 11.5417C20.2532 12.7516 19.9705 13.9451 19.425 15.025C18.7782 16.3191 17.7839 17.4076 16.5535 18.1685C15.3231 18.9295 13.9051 19.3328 12.4583 19.3334C11.2485 19.3365 10.0549 19.0538 8.975 18.5084L3.75 20.25L5.49167 15.025C4.94619 13.9451 4.66351 12.7516 4.66667 11.5417C4.66723 10.095 5.07056 8.67697 5.83149 7.44653C6.59242 6.21609 7.6809 5.2218 8.975 4.57503C10.0549 4.02955 11.2485 3.74687 12.4583 3.75003H12.9167C14.8273 3.85544 16.632 4.66189 17.985 6.01498C19.3381 7.36807 20.1446 9.17271 20.25 11.0834V11.5417Z" stroke={props.stroke} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/><path d="M12.49 14.52L12.49 8.59619" stroke={props.stroke} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/><path d="M10.3999 10.6117L12.5142 8.49609L14.6284 10.6117" stroke={props.stroke} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    )
  }
})

export default PushMessageTwo
