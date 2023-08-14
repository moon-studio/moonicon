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

const ThickLeft = defineComponent({
  name: 'ThickLeft',
  props,
  render() {
    const $props = this.$props
    
    return h(
      <defs>
        <g id="ThickLeft">
          <path d="M4.1112 12.7886L12.385 19.2406C13.0417 19.7527 14 19.2848 14 18.4521L14 15.4L19.1 15.4C19.6523 15.4 20.1 14.9523 20.1 14.4L20.1 9.6C20.1 9.04771 19.6523 8.6 19.1 8.6L14 8.6L14 5.54793C14 4.71519 13.0417 4.24727 12.385 4.75936L4.1112 11.2114C3.59779 11.6118 3.59779 12.3882 4.1112 12.7886Z" stroke={$props.stroke} stroke-width={$props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/>
        </g>
      </defs>
    )
  }
})

export { ThickLeft }
