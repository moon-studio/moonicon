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

const CottonShoes = defineComponent({
  name: 'CottonShoes',
  props,
  render() {
    const $props = this.$props
    
    return h(
      <defs>
        <g id="CottonShoes">
          <path d="M20.3859 17.4214H4.15765V19.9813H20.3859V17.4214Z" stroke={$props.stroke} stroke-width={$props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/><path d="M5.21014 17.4214V7.60852H12.5786V11.7897C18.7191 11.7897 19.5085 15.7148 19.5085 17.4214H5.21014Z" stroke={$props.stroke} stroke-width={$props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/><path d="M3.63129 4.10999H14.684V7.60848H3.63129V4.10999Z" stroke={$props.stroke} stroke-width={$props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/>
        </g>
      </defs>
    )
  }
})

export { CottonShoes }
  