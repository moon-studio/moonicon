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

const MoreOne = defineComponent({
  name: 'MoreOne',
  props,
  render() {
    const $props = this.$props
    
    return h(
      <defs>
        <g id="MoreOne">
          <ellipse cx="5.3241" cy="12" rx="1" ry="1.00006" stroke={$props.stroke} stroke-width={$props.strokeWidth}/><ellipse cx="11.9999" cy="12" rx="1" ry="1.00006" stroke={$props.stroke} stroke-width={$props.strokeWidth}/><ellipse cx="18.6759" cy="12" rx="1" ry="1.00006" stroke={$props.stroke} stroke-width={$props.strokeWidth}/>
        </g>
      </defs>
    )
  }
})

export { MoreOne }
