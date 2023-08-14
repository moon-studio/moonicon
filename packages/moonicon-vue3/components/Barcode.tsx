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

const Barcode = defineComponent({
  name: 'Barcode',
  props,
  render() {
    const $props = this.$props
    
    return h(
      <defs>
        <g id="Barcode">
          <path d="M3.66663 10.3334H20.3333" stroke={$props.stroke} stroke-width={$props.strokeWidth} stroke-linecap="round" stroke-linejoin="bevel"/><path d="M4.5 4.5V7.83333" stroke={$props.stroke} stroke-width={$props.strokeWidth} stroke-linecap="round" stroke-linejoin="bevel"/><path d="M4.5 12.8315V17.833" stroke={$props.stroke} stroke-width={$props.strokeWidth} stroke-linecap="round" stroke-linejoin="bevel"/><path d="M10.5 4.5V7.83333" stroke={$props.stroke} stroke-width={$props.strokeWidth} stroke-linecap="round" stroke-linejoin="bevel"/><path d="M10.5 12.8334V19.5" stroke={$props.stroke} stroke-width={$props.strokeWidth} stroke-linecap="round" stroke-linejoin="bevel"/><path d="M16.5 4.5V7.83333" stroke={$props.stroke} stroke-width={$props.strokeWidth} stroke-linecap="round" stroke-linejoin="bevel"/><path d="M19.5 4.5V7.83333" stroke={$props.stroke} stroke-width={$props.strokeWidth} stroke-linecap="round" stroke-linejoin="bevel"/><path d="M16.5 12.8334V16.1667" stroke={$props.stroke} stroke-width={$props.strokeWidth} stroke-linecap="round" stroke-linejoin="bevel"/><path d="M7.5 4.5V7.83333" stroke={$props.stroke} stroke-width={$props.strokeWidth} stroke-linecap="round" stroke-linejoin="bevel"/><path d="M7.5 12.8334V16.1667" stroke={$props.stroke} stroke-width={$props.strokeWidth} stroke-linecap="round" stroke-linejoin="bevel"/><path d="M13.5 4.5V7.83333" stroke={$props.stroke} stroke-width={$props.strokeWidth} stroke-linecap="round" stroke-linejoin="bevel"/><path d="M13.5 12.8334V16.1667" stroke={$props.stroke} stroke-width={$props.strokeWidth} stroke-linecap="round" stroke-linejoin="bevel"/><path d="M19.5 12.8334V17.8334" stroke={$props.stroke} stroke-width={$props.strokeWidth} stroke-linecap="round" stroke-linejoin="bevel"/>
        </g>
      </defs>
    )
  }
})

export { Barcode }
