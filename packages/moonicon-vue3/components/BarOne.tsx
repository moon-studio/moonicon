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

const BarOne = defineComponent({
  name: 'BarOne',
  props,
  render() {
    const $props = this.$props
    
    return h(
      <defs>
        <g id="BarOne">
          <path d="M9.56481 11.3143C9.56481 5.46286 8.6228 4 8.15179 4C7.02137 4 6.73876 8.87619 6.73876 11.3143M6.73876 11.3143C6.73876 13.8743 9.40781 16.3429 10.9778 17.2571M6.73876 11.3143C6.58176 10.8571 5.89095 10.7657 4.38372 14.0571C3.75571 16.0381 3.44171 20 7.20977 20C8.6228 20 10.9778 19.4514 10.9778 17.2571M10.9778 17.2571H12.8619M12.8619 17.2571C13.6155 17.2571 15.8449 13.6 17.1009 11.7714M12.8619 17.2571C12.8619 19.0857 15.2169 19.8476 16.6299 20C20.7748 20 20.241 16.0381 19.456 14.0571C17.9488 11.1314 17.2579 11.3143 17.1009 11.7714M17.1009 11.7714C17.1009 5.55429 16.1589 4 15.6879 4C14.1807 4 14.1179 8.87619 14.2749 11.3143" stroke={$props.stroke} strokeWidth={$props.strokeWidth} stroke-linecap="round"/>

        </g>
      </defs>
    )
  }
})

export { BarOne }
