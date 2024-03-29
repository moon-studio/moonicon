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

const Buttocks = defineComponent({
  name: 'Buttocks',
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
        <path d="M6.60008 4.125C7.65008 7.975 6.71403 9.43227 4.85008 11.5625C2.40008 14.3625 3.97917 19.2707 5.00001 20.8748" stroke={props.stroke} stroke-width={props.strokeWidth} stroke-linecap="round"/><path d="M17.3205 4C16.2705 7.85 17.3206 9.4375 19.0705 11.4375C21.5205 14.2375 19.9415 19.2915 18.9206 20.8957" stroke={props.stroke} stroke-width={props.strokeWidth} stroke-linecap="round"/><path d="M20.2956 15.9651C19.8907 18.1679 18.119 19.4907 15.9807 19.4907C14.5006 19.4907 12.2051 18.4015 12.2051 16.0856C12.2051 17.0506 11.1939 19.4907 8.24004 19.4907C6.89534 19.5985 4.22185 18.8299 3.61188 16.0856" stroke={props.stroke} stroke-width={props.strokeWidth} stroke-linecap="round"/><path d="M9.22501 9.76562C10.192 9.48643 11.1139 9.37496 11.85 9.37496C12.9391 9.37496 13.9011 9.51617 14.7492 9.76562" stroke={props.stroke} stroke-width={props.strokeWidth} stroke-linecap="round"/>
      </svg>
    )
  }
})

export default Buttocks
