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

const Cardigan = defineComponent({
  name: 'Cardigan',
  props,
  render() {
    const $props = this.$props
    
    return h(
      <defs>
        <g id="Cardigan">
          <path d="M17.4167 9.08329V18.4166M17.4167 18.4166V19.3333C17.4167 19.8856 16.969 20.3333 16.4167 20.3333H7.58335C7.03107 20.3333 6.58335 19.8856 6.58335 19.3333V18.4166M17.4167 18.4166H19.3334C19.8856 18.4166 20.3334 17.9689 20.3334 17.4166V9.08329C20.3334 7.83329 19.5 6.37496 18.25 5.33329C17.2389 4.49068 15.9551 3.92071 15.5014 3.73364C15.3905 3.68793 15.2719 3.66663 15.152 3.66663H8.84802C8.72811 3.66663 8.6095 3.68793 8.49864 3.73364C8.04492 3.92071 6.76115 4.49068 5.75002 5.33329C4.50002 6.37496 3.66669 7.83329 3.66669 9.08329V17.4166C3.66669 17.9689 4.1144 18.4166 4.66669 18.4166H6.58335M6.58335 18.4166V9.08329" stroke={$props.stroke} strokeWidth={$props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/><path d="M11.9999 8.5V20.3333" stroke={$props.stroke} strokeWidth={$props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/><path d="M9.49994 4L11.1308 7.50515C11.493 8.2836 12.6032 8.27372 12.9515 7.48895L14.4999 4" stroke={$props.stroke} strokeWidth={$props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/>
        </g>
      </defs>
    )
  }
})

export { Cardigan }
