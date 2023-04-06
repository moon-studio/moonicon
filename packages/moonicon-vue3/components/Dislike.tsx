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

const Dislike = defineComponent({
  name: 'Dislike',
  props,
  render() {
    const $props = this.$props
    
    return h(
      <defs>
        <g id="Dislike">
          <path d="M7.92708 4.5C9.75517 4.5 11.3245 5.52389 12 6.98493C12.6755 5.52389 14.2448 4.5 16.0729 4.5C18.5179 4.5 20.5 6.33156 20.5 8.59091C20.5 10.506 19.7765 12.2321 18.7517 13.7166M3.5 4.55723L4.61859 5.52241M18.5 17.5L16.8447 16.0717M4.61859 5.52241C3.90414 6.0957 3.5 7.14405 3.5 8.59091C3.5 15.1551 12 19.5 12 19.5C12 19.5 13.174 18.8999 14.6494 17.8088C15.5475 17.1637 16.519 16.3475 16.8447 16.0717M4.61859 5.52241L16.8447 16.0717" stroke={$props.stroke} stroke-width={$props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/>
        </g>
      </defs>
    )
  }
})

export { Dislike }
  