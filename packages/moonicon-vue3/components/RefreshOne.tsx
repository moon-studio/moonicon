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

const RefreshOne = defineComponent({
  name: 'RefreshOne',
  props,
  render() {
    const $props = this.$props
    
    return h(
      <defs>
        <g id="RefreshOne">
          <path d="M15.0413 7.08252L13 5.04129L15.0413 3.00005" stroke={$props.stroke} strokeWidth={$props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/><path d="M10.0413 16.9175L12.0825 18.9587L10.0413 20.9999" stroke={$props.stroke} strokeWidth={$props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/><path d="M13 5H15C18.866 5 22 8.13401 22 12V12C22 15.866 18.866 19 15 19H14.4211" stroke={$props.stroke} strokeWidth={$props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/><path d="M12 19L9 19C5.13401 19 2 15.866 2 12V12C2 8.13401 5.13401 5 9 5L10.4211 5" stroke={$props.stroke} strokeWidth={$props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/>
        </g>
      </defs>
    )
  }
})

export { RefreshOne }
