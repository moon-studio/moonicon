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

const SuccessMessageOne = defineComponent({
  name: 'SuccessMessageOne',
  props,
  render() {
    const $props = this.$props
    
    return h(
      <defs>
        <g id="SuccessMessageOne">
          <path d="M9.80005 11.5L11.0442 12.7442C11.4533 13.1532 12.123 13.1309 12.5039 12.6956L15.3 9.5" stroke={$props.stroke} stroke-width={$props.strokeWidth} stroke-linecap="round"/><path d="M13.3889 17.9535C16.1973 17.6714 20.5 16.0299 20.5 11C20.5 8.66667 18.9 4 12.5 4C9.83333 4 4.5 5.4 4.5 11C4.5 12.7077 5.35706 15.6654 8.32571 17.1285C8.43076 17.1803 8.50088 17.287 8.49597 17.404C8.46041 18.251 8.19523 18.943 7.92513 19.4162C7.79262 19.6483 7.95763 19.992 8.22374 19.9671C10.3126 19.7721 11.344 18.7564 11.6111 18.2222" stroke={$props.stroke} stroke-width={$props.strokeWidth} stroke-linecap="round"/>
        </g>
      </defs>
    )
  }
})

export { SuccessMessageOne }
  