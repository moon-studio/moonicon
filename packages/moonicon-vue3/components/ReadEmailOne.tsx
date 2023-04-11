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

const ReadEmailOne = defineComponent({
  name: 'ReadEmailOne',
  props,
  render() {
    const $props = this.$props
    
    return h(
      <defs>
        <g id="ReadEmailOne">
          <path d="M7.0001 11.1001V7.34431M7.0001 7.34431L4.11896 8.92558C3.79898 9.1012 3.6001 9.43722 3.6001 9.80223V14.594V18.9783C3.6001 19.5303 4.04737 19.9779 4.59937 19.9783L20.3856 19.9899L20.4092 9.80415C20.4101 9.43812 20.2109 9.10087 19.8899 8.92493L17.0063 7.34431M7.0001 7.34431V5C7.0001 4.44771 7.44781 4 8.0001 4H16.002C16.5535 4 17.0009 4.44658 17.002 4.99813L17.0063 7.34431M17.0063 7.34431V11.1001M9.0001 6.5H14.0001M9.0001 9H13.0001" stroke={$props.stroke} strokeWidth={$props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/><path d="M4.02002 9.56921L11.4724 14.2588C11.7979 14.4636 12.2121 14.4636 12.5376 14.2588L19.99 9.56921" stroke={$props.stroke} strokeWidth={$props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/>
        </g>
      </defs>
    )
  }
})

export { ReadEmailOne }
