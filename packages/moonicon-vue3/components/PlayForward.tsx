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

const PlayForward = defineComponent({
  name: 'PlayForward',
  props,
  render() {
    const $props = this.$props
    
    return h(
      <defs>
        <g id="PlayForward">
          <path d="M4 16.5517V7.45269C4 7.04967 4.45237 6.81226 4.78404 7.0412L11.4015 11.6091C11.6901 11.8083 11.6893 12.235 11.3999 12.4331L4.78249 16.9642C4.45066 17.1914 4 16.9538 4 16.5517Z" stroke={$props.stroke} stroke-width={$props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/><path d="M12 16.5517V7.45269C12 7.04967 12.4524 6.81226 12.784 7.0412L19.4015 11.6091C19.6901 11.8083 19.6893 12.235 19.3999 12.4331L12.7825 16.9642C12.4507 17.1914 12 16.9538 12 16.5517Z" stroke={$props.stroke} stroke-width={$props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/>
        </g>
      </defs>
    )
  }
})

export { PlayForward }
  