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

const InfluxDB = defineComponent({
  name: 'InfluxDB',
  props,
  render() {
    const $props = this.$props
    
    return h(
      <defs>
        <g id="InfluxDB">
          <path d="M9.8804 3.1194L13.0001 7.5M13.0001 7.5L18.6191 5.69864M13.0001 7.5L7.50006 12.5M13.0001 7.5L14.5001 14.5M7.50006 12.5L14.5001 14.5M7.50006 12.5L5.33991 18.2481M7.50006 12.5L3.22119 9.36344M14.5001 14.5L20.7375 14.6048M14.5001 14.5L14.096 20.8666" stroke={$props.stroke} stroke-width={$props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/><path d="M9.86004 3.07352L18.6303 5.69163L20.7481 14.596L14.0956 20.8822L5.32534 18.2641L3.20754 9.35976L9.86004 3.07352Z" stroke={$props.stroke} stroke-width={$props.strokeWidth} stroke-linejoin="round"/>
        </g>
      </defs>
    )
  }
})

export { InfluxDB }
  