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

const BachelorCap = defineComponent({
  name: 'BachelorCap',
  props,
  render() {
    const $props = this.$props
    
    return h(
      <defs>
        <g id="BachelorCap">
          <path d="M6.49994 12.5833V18.5C6.49994 18.7761 6.7238 19 6.99994 19H16.9999C17.2761 19 17.4999 18.7761 17.4999 18.5V12.5833M19.6999 9.55L12.3031 11.9035C12.1059 11.9663 11.894 11.9663 11.6967 11.9035L3.99485 9.45293C3.06579 9.15732 3.06579 7.84268 3.99485 7.54707L11.6967 5.09647C11.894 5.03371 12.1059 5.03371 12.3031 5.09647L20.005 7.54707C20.9341 7.84268 20.9341 9.15732 20.005 9.45293L19.6999 9.55ZM19.6999 9.55V16.6667" stroke={$props.stroke} strokeWidth={$props.strokeWidth} stroke-linecap="round"/>

        </g>
      </defs>
    )
  }
})

export { BachelorCap }
