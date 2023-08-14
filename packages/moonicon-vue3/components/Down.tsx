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

const Down = defineComponent({
  name: 'Down',
  props,
  render() {
    const $props = this.$props
    
    return h(
      <defs>
        <g id="Down">
          <path d="M12 4L12 20M12 20L5 13M12 20L19 13" stroke={$props.stroke} stroke-width={$props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/>
        </g>
      </defs>
    )
  }
})

export { Down }
