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

const Pizza = defineComponent({
  name: 'Pizza',
  props,
  render() {
    const $props = this.$props
    
    return h(
      <defs>
        <g id="Pizza">
          <path d="M19.0461 5.22969C17.0121 4.425 14.5066 3.875 12 3.875C9.49332 3.875 7.02535 4.37422 4.94839 5.20625C4.76519 5.28125 4.42183 5.4543 4.51597 5.74531L4.8941 6.6875C5.05035 7.00781 5.23277 7.00781 5.48238 7.00781C5.5523 7.00781 5.64996 6.96875 5.76675 6.92266C7.75436 6.15062 9.86768 5.75304 12 5.75C14.2171 5.75 16.4886 6.21875 18.2343 6.92188C18.3746 6.97656 18.4527 7.00703 18.5187 7.00703C18.7757 7.00703 18.9242 7.09258 19.1046 6.69063L19.4863 5.75C19.5648 5.51563 19.2914 5.32734 19.0461 5.22969Z" stroke={$props.stroke} stroke-width={$props.strokeWidth} stroke-miterlimit="10"/><path d="M11.9711 14.5438H11.9811" stroke={$props.stroke} stroke-width={$props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/><path d="M11.2016 11.1052H11.2116" stroke={$props.stroke} stroke-width={$props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/><path d="M14.0073 10.251H14.0173" stroke={$props.stroke} stroke-width={$props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/><path d="M12.5479 7.92322H12.5579" stroke={$props.stroke} stroke-width={$props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/><path d="M9.17084 8.67627H9.18084" stroke={$props.stroke} stroke-width={$props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/><path d="M17.8109 6.80781C15.9988 6.06953 14.0972 5.75 12 5.75C9.90268 5.75 7.85542 6.10156 6.18354 6.79219C5.86792 6.92109 5.58745 7.14375 5.79018 7.55391C5.95464 7.88711 9.92964 16.6484 11.4398 19.7734C11.4907 19.879 11.5703 19.9681 11.6695 20.0304C11.7687 20.0927 11.8835 20.1258 12.0007 20.1258C12.1179 20.1258 12.2327 20.0927 12.3319 20.0304C12.4312 19.9681 12.5108 19.879 12.5617 19.7734L18.1886 7.57734C18.3132 7.30781 18.2238 6.97578 17.8109 6.80781Z" stroke={$props.stroke} stroke-width={$props.strokeWidth} stroke-miterlimit="10"/>
        </g>
      </defs>
    )
  }
})

export { Pizza }
  