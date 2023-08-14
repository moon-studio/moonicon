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

const Lemon = defineComponent({
  name: 'Lemon',
  props,
  render() {
    const $props = this.$props
    
    return h(
      <defs>
        <g id="Lemon">
          <path d="M6.93608 14.9371C5.37298 12.2297 5.66297 8.45566 7.20816 6.62734L7.30967 5.46264C7.37137 4.75471 8.13107 4.33521 8.76307 4.6601L9.74302 5.16384C12.099 4.73983 15.5124 6.37573 17.0755 9.08309C18.6386 11.7904 18.3486 15.5645 16.8034 17.3928C16.4843 17.7705 16.8357 19.361 16.3963 19.6147C15.9569 19.8683 14.7552 18.7688 14.2686 18.8563C11.9126 19.2804 8.49917 17.6445 6.93608 14.9371Z" stroke={$props.stroke} stroke-width={$props.strokeWidth} stroke-linecap="square" stroke-linejoin="bevel"/>
        </g>
      </defs>
    )
  }
})

export { Lemon }
