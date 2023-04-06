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

const NutritionAndHealthDepartment = defineComponent({
  name: 'NutritionAndHealthDepartment',
  props,
  render() {
    const $props = this.$props
    
    return h(
      <defs>
        <g id="NutritionAndHealthDepartment">
          <path d="M12 8.41003L12 9.68259" stroke={$props.stroke} stroke-width={$props.strokeWidth} stroke-linecap="round"/><path d="M5 9.68259H19" stroke={$props.stroke} stroke-width={$props.strokeWidth} stroke-linecap="round"/><path d="M5.5 12.1947L6.38819 19.1271C6.45213 19.6261 6.87693 20 7.38008 20H16.62C17.1231 20 17.5479 19.6261 17.6119 19.1271L18.5 12.1947M5.5 12.1947H18.5M5.5 12.1947H4M18.5 12.1947H20" stroke={$props.stroke} stroke-width={$props.strokeWidth} stroke-linecap="round"/><path d="M11.9999 3.59451C11.1999 4.39451 11.6666 5.26118 12 5.59451C12.3385 5.93303 12.4502 6.28349 12.4412 6.60042" stroke={$props.stroke} stroke-width={$props.strokeWidth} stroke-linecap="round"/><path d="M16.3332 3.59451C15.5332 4.39451 15.9999 5.26118 16.3332 5.59451C17.1332 6.39451 16.6665 7.26118 16.3332 7.59451" stroke={$props.stroke} stroke-width={$props.strokeWidth} stroke-linecap="round"/><path d="M7.66669 3.59451C6.86669 4.39451 7.33336 5.26118 7.6667 5.59451C8.46669 6.39451 8.00004 7.26118 7.6667 7.59451" stroke={$props.stroke} stroke-width={$props.strokeWidth} stroke-linecap="round"/>
        </g>
      </defs>
    )
  }
})

export { NutritionAndHealthDepartment }
  