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

const CameraOff = defineComponent({
  name: 'CameraOff',
  props,
  render() {
    const $props = this.$props
    
    return h(
      <defs>
        <g id="CameraOff">
          <path d="M3.75 3.75L20.25 20.25" stroke={$props.stroke} stroke-width={$props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/><path d="M18.75 18.75H5.25C4.85218 18.75 4.47064 18.592 4.18934 18.3107C3.90804 18.0294 3.75 17.6478 3.75 17.25V9C3.75 8.60218 3.90804 8.22064 4.18934 7.93934C4.47064 7.65804 4.85218 7.5 5.25 7.5H7.5M9.75 5.25H14.25L15.75 7.5H18.75C19.1478 7.5 19.5294 7.65804 19.8107 7.93934C20.092 8.22064 20.25 8.60218 20.25 9V16.005M14.46 14.46C14.2111 14.8238 13.885 15.1282 13.5051 15.3517C13.1251 15.5752 12.7006 15.7122 12.2617 15.753C11.8228 15.7938 11.3803 15.7373 10.9657 15.5877C10.5511 15.4381 10.1745 15.1989 9.86282 14.8872C9.55112 14.5755 9.31195 14.1989 9.1623 13.7843C9.01266 13.3697 8.95622 12.9272 8.997 12.4883C9.03779 12.0494 9.17479 11.6249 9.39827 11.2449C9.62175 10.865 9.92621 10.5389 10.29 10.29" stroke={$props.stroke} stroke-width={$props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/>
        </g>
      </defs>
    )
  }
})

export { CameraOff }
