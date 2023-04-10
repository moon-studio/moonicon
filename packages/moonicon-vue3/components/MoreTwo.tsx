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

const MoreTwo = defineComponent({
  name: 'MoreTwo',
  props,
  render() {
    const $props = this.$props
    
    return h(
      <defs>
        <g id="MoreTwo">
          <ellipse cx="11.9999" cy="5.3241" rx="1" ry="1.00006" transform="rotate(90 11.9999 5.3241)" stroke={$props.stroke} strokeWidth={$props.strokeWidth}/>
<ellipse cx="11.9999" cy="11.9999" rx="1" ry="1.00006" transform="rotate(90 11.9999 11.9999)" stroke={$props.stroke} strokeWidth={$props.strokeWidth}/>
<ellipse cx="11.9999" cy="18.6759" rx="1" ry="1.00006" transform="rotate(90 11.9999 18.6759)" stroke={$props.stroke} strokeWidth={$props.strokeWidth}/>

        </g>
      </defs>
    )
  }
})

export { MoreTwo }
