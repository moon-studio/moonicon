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

const Order = defineComponent({
  name: 'Order',
  props,
  render() {
    const $props = this.$props
    
    return h(
      <defs>
        <g id="Order">
          <path d="M7.15385 4H5.5C5.22386 4 5 4.22386 5 4.5V19.5C5 19.7761 5.22386 20 5.5 20H18.5C18.7761 20 19 19.7761 19 19.5V4.5C19 4.22386 18.7761 4 18.5 4H16.8462M8.23077 10H15.7692M8.23077 14H13.6154M9.80769 5.5H14.1923C14.4685 5.5 14.6923 5.27614 14.6923 5L14.6923 3.5C14.6923 3.22386 14.4684 3 14.1923 3H9.80769C9.53155 3 9.30769 3.22386 9.30769 3.5L9.30769 5C9.30769 5.27614 9.53155 5.5 9.80769 5.5Z" stroke={$props.stroke} stroke-width={$props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/>
        </g>
      </defs>
    )
  }
})

export { Order }
