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

const RefreshSix = defineComponent({
  name: 'RefreshSix',
  props,
  render() {
    const $props = this.$props
    
    return h(
      <defs>
        <g id="RefreshSix">
          <path d="M19.0751 14.95C18.5347 16.4836 17.5106 17.8001 16.157 18.7011C14.8034 19.6021 13.1937 20.0388 11.5703 19.9454C9.94694 19.8519 8.39792 19.2335 7.15663 18.1831C5.91533 17.1328 5.04902 15.7075 4.68821 14.122C4.32741 12.5364 4.49166 10.8766 5.15621 9.39257C5.82077 7.90853 6.94963 6.68065 8.3727 5.89396C9.79578 5.10727 11.436 4.80438 13.0462 5.03092C14.6564 5.25746 16.1493 6.00117 17.3001 7.14999L19.2334 8.96666" stroke={$props.stroke} stroke-width={$props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/><path d="M19.5 4.1167V9.1167H14.5" stroke={$props.stroke} stroke-width={$props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/>
        </g>
      </defs>
    )
  }
})

export { RefreshSix }
  