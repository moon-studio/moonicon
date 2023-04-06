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

const Inbox = defineComponent({
  name: 'Inbox',
  props,
  render() {
    const $props = this.$props
    
    return h(
      <defs>
        <g id="Inbox">
          <path d="M19.5 16.5V19.5C19.5 20.0523 19.0523 20.5 18.5 20.5H5.5C4.94772 20.5 4.5 20.0523 4.5 19.5V16.5M19.5 16.5H16.9142C16.649 16.5 16.3946 16.6054 16.2071 16.7929L15.2929 17.7071C15.1054 17.8946 14.851 18 14.5858 18H9.41421C9.149 18 8.89464 17.8946 8.70711 17.7071L7.79289 16.7929C7.60536 16.6054 7.351 16.5 7.08579 16.5H4.5M19.5 16.5L17.6305 4.34794C17.5554 3.86011 17.1357 3.5 16.6421 3.5H7.35792C6.86435 3.5 6.4446 3.86011 6.36955 4.34794L4.5 16.5M8 14H16M9 10H15M10 6H14" stroke={$props.stroke} stroke-width={$props.strokeWidth} stroke-linecap="round"/>
        </g>
      </defs>
    )
  }
})

export { Inbox }
  