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

const Tag = defineComponent({
  name: 'Tag',
  props,
  render() {
    const $props = this.$props
    
    return h(
      <defs>
        <g id="Tag">
          <path d="M13.8284 4H18C19.1046 4 20 4.89543 20 6V10.1716C20 10.702 19.7893 11.2107 19.4142 11.5858L11.4142 19.5858C10.6332 20.3668 9.36684 20.3668 8.58579 19.5858L4.41421 15.4142C3.63317 14.6332 3.63316 13.3668 4.41421 12.5858L12.4142 4.58579C12.7893 4.21071 13.298 4 13.8284 4Z" stroke={$props.stroke} strokeWidth={$props.strokeWidth}/><circle cx="16.5" cy="7.5" r="1.5" stroke={$props.stroke} strokeWidth={$props.strokeWidth}/>
        </g>
      </defs>
    )
  }
})

export { Tag }
