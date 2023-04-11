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

const Home = defineComponent({
  name: 'Home',
  props,
  render() {
    const $props = this.$props
    
    return h(
      <defs>
        <g id="Home">
          <path d="M12.5 4L3.5 9M5 10.5V18.5C5 19.0523 5.44772 19.5 6 19.5H9.5C10.0523 19.5 10.5 19.0523 10.5 18.5V15C10.5 14.4477 10.9477 14 11.5 14H13.5C14.0523 14 14.5 14.4477 14.5 15V18.5C14.5 19.0523 14.9477 19.5 15.5 19.5H19C19.5523 19.5 20 19.0523 20 18.5V10.5" stroke={$props.stroke} strokeWidth={$props.strokeWidth} stroke-linecap="round"/><path d="M12.5 4L21.5 9" stroke={$props.stroke} strokeWidth={$props.strokeWidth} stroke-linecap="round"/><line x1="9.1" y1="9.9" x2="15.9" y2="9.9" stroke={$props.stroke} strokeWidth={$props.strokeWidth} stroke-linecap="round"/>
        </g>
      </defs>
    )
  }
})

export { Home }
