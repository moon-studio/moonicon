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

const Like = defineComponent({
  name: 'Like',
  props,
  render() {
    const $props = this.$props
    
    return h(
      <defs>
        <g id="Like">
          <path d="M20.5 8.59091C20.5 6.33156 18.5179 4.5 16.0729 4.5C14.2448 4.5 12.6755 5.52389 12 6.98493C11.3245 5.52389 9.75517 4.5 7.92708 4.5C5.48207 4.5 3.5 6.33156 3.5 8.59091C3.5 15.1551 12 19.5 12 19.5C12 19.5 20.5 15.1551 20.5 8.59091Z" stroke={$props.stroke} stroke-width={$props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/>
        </g>
      </defs>
    )
  }
})

export { Like }
