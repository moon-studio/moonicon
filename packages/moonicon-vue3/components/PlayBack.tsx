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

const PlayBack = defineComponent({
  name: 'PlayBack',
  props,
  render() {
    const $props = this.$props
    
    return h(
      <defs>
        <g id="PlayBack">
          <path d="M12 16.5517V7.45269C12 7.04967 11.5476 6.81226 11.216 7.0412L4.59853 11.6091C4.30992 11.8083 4.31073 12.235 4.60008 12.4331L11.2175 16.9642C11.5493 17.1914 12 16.9538 12 16.5517Z" stroke={$props.stroke} stroke-width={$props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/><path d="M20 16.5517V7.45269C20 7.04967 19.5476 6.81226 19.216 7.0412L12.5985 11.6091C12.3099 11.8083 12.3107 12.235 12.6001 12.4331L19.2175 16.9642C19.5493 17.1914 20 16.9538 20 16.5517Z" stroke={$props.stroke} stroke-width={$props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/>
        </g>
      </defs>
    )
  }
})

export { PlayBack }
