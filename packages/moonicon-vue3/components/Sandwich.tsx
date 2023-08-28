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

const Sandwich = defineComponent({
  name: 'Sandwich',
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
        <path d="M3.74994 12.0833V13.5833C3.74994 13.8595 3.96562 14.0833 4.24177 14.0833H19.755C20.0311 14.0833 20.2499 13.8595 20.2499 13.5833V12.0833C20.2499 11.8072 20.0261 11.5833 19.7499 11.5833H4.24994C3.9738 11.5833 3.74994 11.8072 3.74994 12.0833Z" stroke={props.stroke} stroke-width={props.strokeWidth} stroke-linecap="square" stroke-linejoin="round"/><path d="M3.74994 19.0231V20.5231C3.74994 20.7993 3.96562 21.0231 4.24177 21.0231H19.755C20.0311 21.0231 20.2499 20.7993 20.2499 20.5231V19.0231C20.2499 18.747 20.0261 18.5231 19.7499 18.5231H4.24994C3.9738 18.5231 3.74994 18.747 3.74994 19.0231Z" stroke={props.stroke} stroke-width={props.strokeWidth} stroke-linecap="square" stroke-linejoin="round"/><path d="M20.2537 11.9531C20.2537 11.0293 20.4273 9.6957 18.8157 7.71834C15.5612 3.72503 14.8939 3.40361 12.0705 5.25118C9.24719 7.09875 3.75138 10.5902 3.75138 11.7827" stroke={props.stroke} stroke-width={props.strokeWidth} stroke-linecap="square" stroke-linejoin="bevel"/><path d="M3.75134 16.8821L5.62832 15.9262C5.88029 15.7979 6.1748 15.7823 6.43895 15.8832L8.69757 16.7459C8.92735 16.8336 9.18142 16.8336 9.4112 16.7459L11.7279 15.861C11.9576 15.7732 12.2117 15.7732 12.4415 15.861L14.7582 16.7459C14.9879 16.8336 15.242 16.8336 15.4718 16.7459L17.7304 15.8832C17.9946 15.7823 18.2891 15.7979 18.5411 15.9262L20.418 16.8821" stroke={props.stroke} stroke-width={props.strokeWidth} stroke-linecap="round"/>
      </svg>
    )
  }
})

export default Sandwich
