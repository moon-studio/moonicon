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

const ShareTwo = defineComponent({
  name: 'ShareTwo',
  props,
  render() {
    const $props = this.$props
    
    return h(
      <defs>
        <g id="ShareTwo">
          <path d="M12 12.5L19.5 5" stroke={$props.stroke} stroke-width={$props.strokeWidth} stroke-linecap="round"/><path d="M12.7424 5.45455H5.5C4.94771 5.45455 4.5 5.90226 4.5 6.45455V19C4.5 19.5523 4.94772 20 5.5 20H18.0455C18.5977 20 19.0455 19.5523 19.0455 19V11.7576M20.5 9.81818V8.84848V5C20.5 4.44772 20.0523 4 19.5 4H15.6515H14.6818" stroke={$props.stroke} stroke-width={$props.strokeWidth} stroke-linecap="round"/>
        </g>
      </defs>
    )
  }
})

export { ShareTwo }
  