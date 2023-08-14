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

const Egg = defineComponent({
  name: 'Egg',
  props,
  render() {
    const $props = this.$props
    
    return h(
      <defs>
        <g id="Egg">
          <path d="M17.9999 13.0667C17.9999 17.485 15.3136 20 11.9999 20C8.68624 20 5.99994 17.485 5.99994 13.0667C5.99994 7.5817 9.18624 4 11.9999 4C14.8136 4 17.9999 7.5817 17.9999 13.0667Z" stroke={$props.stroke} stroke-width={$props.strokeWidth}/><path d="M11.9999 18.0001C9.79081 18.0001 7.99994 16.1138 7.99994 12.8" stroke={$props.stroke} stroke-width={$props.strokeWidth} stroke-linecap="round"/>
        </g>
      </defs>
    )
  }
})

export { Egg }
