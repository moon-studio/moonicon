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

const ShareOne = defineComponent({
  name: 'ShareOne',
  props,
  render() {
    const $props = this.$props
    
    return h(
      <defs>
        <g id="ShareOne">
          <path d="M6.5 14.0625C7.63909 14.0625 8.5625 13.1391 8.5625 12C8.5625 10.8609 7.63909 9.9375 6.5 9.9375C5.36091 9.9375 4.4375 10.8609 4.4375 12C4.4375 13.1391 5.36091 14.0625 6.5 14.0625Z" stroke={$props.stroke} stroke-width={$props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/><path d="M17.5 7.875C18.6391 7.875 19.5625 6.95159 19.5625 5.8125C19.5625 4.67341 18.6391 3.75 17.5 3.75C16.3609 3.75 15.4375 4.67341 15.4375 5.8125C15.4375 6.95159 16.3609 7.875 17.5 7.875Z" stroke={$props.stroke} stroke-width={$props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/><path d="M17.5 20.25C18.6391 20.25 19.5625 19.3266 19.5625 18.1875C19.5625 17.0484 18.6391 16.125 17.5 16.125C16.3609 16.125 15.4375 17.0484 15.4375 18.1875C15.4375 19.3266 16.3609 20.25 17.5 20.25Z" stroke={$props.stroke} stroke-width={$props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/><path d="M8.29736 13.011L15.7026 17.1764M15.7026 6.82349L8.29736 10.9889" stroke={$props.stroke} stroke-width={$props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/>
        </g>
      </defs>
    )
  }
})

export { ShareOne }
