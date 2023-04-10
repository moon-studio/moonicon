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

const RefreshFive = defineComponent({
  name: 'RefreshFive',
  props,
  render() {
    const $props = this.$props
    
    return h(
      <defs>
        <g id="RefreshFive">
          <path d="M4.5 4.1167V9.1167H9.5" stroke={$props.stroke} strokeWidth={$props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/>
<path d="M4.92493 14.95C5.46526 16.4836 6.48938 17.8001 7.84298 18.7011C9.19658 19.6021 10.8063 20.0388 12.4297 19.9454C14.0531 19.8519 15.6021 19.2335 16.8434 18.1831C18.0847 17.1328 18.951 15.7075 19.3118 14.122C19.6726 12.5364 19.5083 10.8766 18.8438 9.39257C18.1792 7.90853 17.0504 6.68065 15.6273 5.89396C14.2042 5.10727 12.564 4.80438 10.9538 5.03092C9.34364 5.25746 7.8507 6.00117 6.69993 7.14999L4.7666 8.96666" stroke={$props.stroke} strokeWidth={$props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/>

        </g>
      </defs>
    )
  }
})

export { RefreshFive }
