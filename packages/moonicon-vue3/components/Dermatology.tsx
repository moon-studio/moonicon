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

const Dermatology = defineComponent({
  name: 'Dermatology',
  props,
  render() {
    const $props = this.$props
    
    return h(
      <defs>
        <g id="Dermatology">
          <path d="M11.8999 16.7693H11.9099" stroke={$props.stroke} strokeWidth={$props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/><path d="M8.75116 17.4041H8.76116" stroke={$props.stroke} strokeWidth={$props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/><path d="M10.4793 15.608H10.4893" stroke={$props.stroke} strokeWidth={$props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/><path d="M12.37 12.8499H12.38" stroke={$props.stroke} strokeWidth={$props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/><path d="M10.7956 12.0173H10.8056" stroke={$props.stroke} strokeWidth={$props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/><path d="M11.7036 8.54565H11.7136" stroke={$props.stroke} strokeWidth={$props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/><path d="M14.9322 10.4683C16.1361 8.2829 19.0713 10.0576 17.0868 12.1587C16.7035 12.5646 16.3645 12.9005 16.1361 13.7287C15.888 14.6286 14.9322 14.9583 14.5358 13.9351" stroke={$props.stroke} strokeWidth={$props.strokeWidth} stroke-linecap="round"/><path d="M19.8976 20.999C18.3306 17.5852 18.2746 14.3898 19.8976 12.2632C21.5205 10.1366 21.7919 4.54748 17.2593 2.54468C11.2031 -0.131311 5.7787 2.70104 5.61081 8.18547C5.57104 9.48472 5.20338 10.5303 3.89213 11.7631C3.22313 12.3921 2.868 13.3267 3.89213 13.7517C4.36504 14.0054 4.79379 13.9628 4.9439 14.6042C5.16346 15.5423 4.69283 15.7862 5.20338 16.2809C5.98627 17.0394 4.98382 17.0394 5.98627 18.9033C6.43102 19.7302 7.66671 19.3267 9.04791 19.3267C10.4291 19.3267 10.6575 20.7719 10.82 21.7469" stroke={$props.stroke} strokeWidth={$props.strokeWidth} stroke-linecap="round"/>
        </g>
      </defs>
    )
  }
})

export { Dermatology }
