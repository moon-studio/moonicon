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

const Shuffle = defineComponent({
  name: 'Shuffle',
  props,
  render() {
    const $props = this.$props
    
    return h(
      <defs>
        <g id="Shuffle">
          <path d="M19.4481 7.80461H17.2336C12.2509 7.80461 11.6972 16.42 4.5 16.42M19.4481 7.80461L17.2336 5.65077M19.4481 7.80461L17.2336 9.95846" stroke={$props.stroke} stroke-width={$props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/><path d="M19.4481 16.2692H17.2336C12.2509 16.2692 11.6972 7.65384 4.5 7.65384M19.4481 16.2692L17.2336 18.4231M19.4481 16.2692L17.2336 14.1154" stroke={$props.stroke} stroke-width={$props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/>
        </g>
      </defs>
    )
  }
})

export { Shuffle }
  nd"/><path d="M14.75 3.75H20.25V9.25" stroke={$props.stroke} stroke-width={$props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/>
        </g>
      </defs>
    )
  }
})

export { Shuffle }
  