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

const EmergencyDepartment = defineComponent({
  name: 'EmergencyDepartment',
  props,
  render() {
    const $props = this.$props
    
    return h(
      <defs>
        <g id="EmergencyDepartment">
          <path d="M12 5.75V3.75" stroke={$props.stroke} stroke-width={$props.strokeWidth} stroke-linecap="round"/><path d="M16.5 6.75L18.5 4.75" stroke={$props.stroke} stroke-width={$props.strokeWidth} stroke-linecap="round"/><path d="M7.5 6.75L5.5 4.75" stroke={$props.stroke} stroke-width={$props.strokeWidth} stroke-linecap="round"/><path d="M12.703 10.0288L10.6298 11.8306C10.5175 11.9282 10.5473 12.1098 10.6848 12.1665L12.8447 13.057C12.9795 13.1126 13.0114 13.2891 12.9046 13.3884L10.7479 15.3921" stroke={$props.stroke} stroke-width={$props.strokeWidth} stroke-linecap="round"/><path d="M18.1 17.75H5.9C5.40294 17.75 5 17.3471 5 16.85V11.75C5 8.55 9.66667 7.75 12 7.75C17.6 7.75 19 10.4167 19 11.75V16.85C19 17.3471 18.5971 17.75 18.1 17.75Z" stroke={$props.stroke} stroke-width={$props.strokeWidth} stroke-linecap="round"/><path d="M4 20.25H20" stroke={$props.stroke} stroke-width={$props.strokeWidth} stroke-linecap="round"/>
        </g>
      </defs>
    )
  }
})

export { EmergencyDepartment }
  