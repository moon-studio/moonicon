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

const Camera = defineComponent({
  name: 'Camera',
  props,
  render() {
    const $props = this.$props
    
    return h(
      <defs>
        <g id="Camera">
          <path d="M12 15.75C13.6569 15.75 15 14.4069 15 12.75C15 11.0931 13.6569 9.75 12 9.75C10.3431 9.75 9 11.0931 9 12.75C9 14.4069 10.3431 15.75 12 15.75Z" stroke={$props.stroke} stroke-width={$props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/><path d="M20.25 17.25C20.25 17.6478 20.092 18.0294 19.8107 18.3107C19.5294 18.592 19.1478 18.75 18.75 18.75H5.25C4.85218 18.75 4.47064 18.592 4.18934 18.3107C3.90804 18.0294 3.75 17.6478 3.75 17.25V9C3.75 8.60218 3.90804 8.22064 4.18934 7.93934C4.47064 7.65804 4.85218 7.5 5.25 7.5H8.25L9.75 5.25H14.25L15.75 7.5H18.75C19.1478 7.5 19.5294 7.65804 19.8107 7.93934C20.092 8.22064 20.25 8.60218 20.25 9V17.25Z" stroke={$props.stroke} stroke-width={$props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/>
        </g>
      </defs>
    )
  }
})

export { Camera }
  