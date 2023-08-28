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

const Donut = defineComponent({
  name: 'Donut',
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
        <path d="M11.9999 3.6875C7.40907 3.6875 3.68744 7.40913 3.68744 12C3.68744 16.5909 7.40907 20.3125 11.9999 20.3125C16.5908 20.3125 20.3124 16.5909 20.3124 12C20.3124 7.40913 16.5908 3.6875 11.9999 3.6875Z" stroke={props.stroke} stroke-width={props.strokeWidth} stroke-linecap="round"/><path d="M14.8859 7.29958L14.4473 6.55029" stroke={props.stroke} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/><path d="M9.02612 6.94883L8.26324 7.3634" stroke={props.stroke} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/><path d="M6.9364 10.3607L6.34363 9.72632" stroke={props.stroke} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/><path d="M18.1728 12.1404L17.4611 12.6377" stroke={props.stroke} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/><path d="M17.5868 10.2217L17.2651 9.41528" stroke={props.stroke} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/><path d="M8.42608 16.9468L7.63763 16.5833" stroke={props.stroke} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/><path d="M7.26184 14.7857L7.32281 13.9196" stroke={props.stroke} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/><path d="M12.5279 17.9601L13.1148 17.3203" stroke={props.stroke} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/><path d="M16.4582 16.5218L15.919 15.8413" stroke={props.stroke} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/><path d="M11.9999 9.21436C10.4615 9.21436 9.21429 10.4615 9.21429 12C9.21429 13.5385 10.4615 14.7856 11.9999 14.7856C13.5384 14.7856 14.7856 13.5385 14.7856 12C14.7856 10.4615 13.5384 9.21436 11.9999 9.21436Z" stroke={props.stroke} stroke-width={props.strokeWidth} stroke-linecap="round"/>
      </svg>
    )
  }
})

export default Donut
