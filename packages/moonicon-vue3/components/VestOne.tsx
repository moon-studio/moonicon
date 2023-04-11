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

const VestOne = defineComponent({
  name: 'VestOne',
  props,
  render() {
    const $props = this.$props
    
    return h(
      <defs>
        <g id="VestOne">
          <path d="M17.4999 4.96313C17.4999 4.41085 17.0522 3.96313 16.4999 3.96313H15.748C15.3329 3.96313 14.961 4.21953 14.8134 4.60745L12.0653 11.8283C12.0221 11.9419 11.9999 12.0624 11.9999 12.184V19.0028C11.9999 19.5541 12.446 20.0013 12.9972 20.0028L17.9745 20.0165C18.5278 20.018 18.9772 19.5698 18.9772 19.0165V10.259C18.9772 10.0791 18.9287 9.90255 18.8367 9.74791L17.6404 7.73637C17.5485 7.58173 17.4999 7.40514 17.4999 7.22523V4.96313Z" stroke={$props.stroke} strokeWidth={$props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/><path d="M6.49994 4.96313C6.49994 4.41085 6.94765 3.96313 7.49994 3.96313H8.27186C8.68779 3.96313 9.06028 4.22058 9.2073 4.60966L11.9999 12.0001V19.0029C11.9999 19.5541 11.5539 20.0013 11.0027 20.0028L6.04715 20.0165C5.4938 20.018 5.0444 19.5698 5.0444 19.0165V10.2556C5.0444 10.0778 5.09176 9.90334 5.18161 9.75001L6.36273 7.73427C6.45258 7.58093 6.49994 7.40643 6.49994 7.22871V4.96313Z" stroke={$props.stroke} strokeWidth={$props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/>
        </g>
      </defs>
    )
  }
})

export { VestOne }
