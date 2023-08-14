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

const GIFFile = defineComponent({
  name: 'GIFFile',
  props,
  render() {
    const $props = this.$props
    
    return h(
      <defs>
        <g id="GIFFile">
          <path d="M19 20.5H6C5.44772 20.5 5 20.0523 5 19.5V4.5C5 3.94772 5.44772 3.5 6 3.5H14.5858C14.851 3.5 15.1054 3.60536 15.2929 3.79289L18.7071 7.20711C18.8946 7.39464 19 7.649 19 7.91421V11V12.5" stroke={$props.stroke} stroke-width={$props.strokeWidth} stroke-linecap="round"/><path d="M19 14.5H18C17.4477 14.5 17 14.9477 17 15.5V16.5M17 18.5V16.5M19 16.5H17M15 14.5V18.5M12.1234 16.8799H12.8C12.9105 16.8799 13 16.9694 13 17.0799V17.5C13 18.0523 12.5523 18.5 12 18.5H11.5C10.9477 18.5 10.5 18.0523 10.5 17.5V15.5C10.5 14.9477 10.9477 14.5 11.5 14.5H12.1883C12.6366 14.5 13 14.8634 13 15.3117V15.3117" stroke={$props.stroke} stroke-width={$props.strokeWidth} stroke-linecap="round"/>
        </g>
      </defs>
    )
  }
})

export { GIFFile }
