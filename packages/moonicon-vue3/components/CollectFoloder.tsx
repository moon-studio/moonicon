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

const CollectFoloder = defineComponent({
  name: 'CollectFoloder',
  props,
  render() {
    const $props = this.$props
    
    return h(
      <defs>
        <g id="CollectFoloder">
          <path d="M4.0835 5.33333C4.0835 4.8731 4.45659 4.5 4.91683 4.5H9.91683L12.0002 7H19.0835C19.5437 7 19.9168 7.37308 19.9168 7.83333V18.6667C19.9168 19.1269 19.5437 19.5 19.0835 19.5H4.91683C4.45659 19.5 4.0835 19.1269 4.0835 18.6667V5.33333Z" stroke={$props.stroke} strokeWidth={$props.strokeWidth} stroke-linejoin="round"/><path d="M10.65 10C9.73873 10 9 10.8608 9 11.9227C9 13.8454 10.95 15.5934 12 16C13.05 15.5934 15 13.8454 15 11.9227C15 10.8608 14.2613 10 13.35 10C12.792 10 12.2986 10.3228 12 10.8169C11.7014 10.3228 11.208 10 10.65 10Z" stroke={$props.stroke} strokeWidth={$props.strokeWidth} stroke-linecap="square" stroke-linejoin="round"/>
        </g>
      </defs>
    )
  }
})

export { CollectFoloder }
