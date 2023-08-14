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

const Previous = defineComponent({
  name: 'Previous',
  props,
  render() {
    const $props = this.$props
    
    return h(
      <defs>
        <g id="Previous">
          <path d="M18.6001 17.9392V6.02746C18.6001 5.63173 18.1622 5.39283 17.8294 5.60705L8.57831 11.5629C8.27252 11.7598 8.27252 12.2069 8.57831 12.4037L17.8294 18.3596C18.1622 18.5738 18.6001 18.3349 18.6001 17.9392Z" stroke={$props.stroke} stroke-width={$props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/><path d="M5.3999 5.64999V18.32" stroke={$props.stroke} stroke-width={$props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/>
        </g>
      </defs>
    )
  }
})

export { Previous }
