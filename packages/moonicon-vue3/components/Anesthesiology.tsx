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

const Anesthesiology = defineComponent({
  name: 'Anesthesiology',
  props,
  render() {
    const $props = this.$props
    
    return h(
      <defs>
        <g id="Anesthesiology">
          <path d="M8.37071 13.8094L10.1096 15.5482M9.93692 12.1209L11.7047 13.8887" stroke={$props.stroke} stroke-width={$props.strokeWidth} stroke-linecap="round"/><path d="M18.8268 5.12626L16.7055 3.00494M18.8268 5.12626L20.9481 7.24758M18.8268 5.12626L15.9749 7.97821M15.9749 7.97821L13.5 5.50333M15.9749 7.97821L18.4497 10.4531M11.3787 3.38201L13.5 5.50333M20.5711 12.5744L18.4497 10.4531M13.5 5.50333L6.42892 12.5744C5.64787 13.3554 5.64787 14.6218 6.42892 15.4028L7.48958 16.4635M18.4497 10.4531L11.3787 17.5241C10.5976 18.3052 9.33129 18.3052 8.55024 17.5241L7.48958 16.4635M7.48958 16.4635L5.36826 18.5848" stroke={$props.stroke} stroke-width={$props.strokeWidth} stroke-linecap="round"/>
        </g>
      </defs>
    )
  }
})

export { Anesthesiology }
  