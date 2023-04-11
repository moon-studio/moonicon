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

const Copy = defineComponent({
  name: 'Copy',
  props,
  render() {
    const $props = this.$props
    
    return h(
      <defs>
        <g id="Copy">
          <path d="M18.4054 17.8884H8.20825C7.65597 17.8884 7.20825 17.4407 7.20825 16.8884V4.58789C7.20825 4.03561 7.65597 3.58789 8.20825 3.58789H14.1841C14.4584 3.58789 14.7206 3.7005 14.9094 3.89938L19.1306 8.34571C19.307 8.53154 19.4054 8.77799 19.4054 9.03422V16.8884C19.4054 17.4407 18.9577 17.8884 18.4054 17.8884Z" stroke={$props.stroke} strokeWidth={$props.strokeWidth} stroke-linecap="square" stroke-linejoin="round"/><path d="M4.59473 10.3176V19.4121C4.59473 19.9644 5.04244 20.4121 5.59473 20.4121H13.7426" stroke={$props.stroke} strokeWidth={$props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/><path d="M9.82202 10.3176H12.0001" stroke={$props.stroke} strokeWidth={$props.strokeWidth} stroke-linecap="round"/><path d="M9.82202 13.6824H15.0494" stroke={$props.stroke} strokeWidth={$props.strokeWidth} stroke-linecap="round"/>
        </g>
      </defs>
    )
  }
})

export { Copy }
