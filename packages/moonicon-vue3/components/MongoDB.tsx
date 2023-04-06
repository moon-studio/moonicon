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

const MongoDB = defineComponent({
  name: 'MongoDB',
  props,
  render() {
    const $props = this.$props
    
    return h(
      <defs>
        <g id="MongoDB">
          <path d="M12 2V21.5M12 2C8.18182 4.8463 5 7.12334 5 11.1082C5 16.2315 9.45455 17.9393 12 19.6471C14.5455 17.9393 19 16.2315 19 11.1082C19 7.12334 15.8182 4.8463 12 2Z" stroke={$props.stroke} stroke-width={$props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/>
        </g>
      </defs>
    )
  }
})

export { MongoDB }
  