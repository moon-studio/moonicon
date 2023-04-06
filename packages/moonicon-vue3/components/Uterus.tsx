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

const Uterus = defineComponent({
  name: 'Uterus',
  props,
  render() {
    const $props = this.$props
    
    return h(
      <defs>
        <g id="Uterus">
          <path d="M14.0834 13.2151V19.6667" stroke={$props.stroke} stroke-width={$props.strokeWidth} stroke-linecap="round" stroke-linejoin="bevel"/><path d="M10.3334 13.2991L10.3334 19.6666" stroke={$props.stroke} stroke-width={$props.strokeWidth} stroke-linecap="round" stroke-linejoin="bevel"/><path d="M8.43492 6.75003C7.59399 6.10669 6.60025 6.05424 5.38652 6.12703C3.56589 6.23619 2.49316 7.45519 2.49316 9.25036M2.49316 9.25036C2.49316 11.0455 3.87 12.6596 5.29211 12.2902C6.71424 11.9209 6.5154 10.4626 5.85026 9.77882C5.18512 9.09507 3.35891 8.83474 2.49316 9.25036Z" stroke={$props.stroke} stroke-width={$props.strokeWidth} stroke-linecap="round"/><path d="M16.0403 6.95834C16.8722 6.27843 17.7196 6.05401 19.0542 6.1268C21.0561 6.23601 21.5068 7.43668 21.5068 9.23184M21.5068 9.23184C21.5068 11.027 20.7217 12.6594 19.1581 12.2901C17.5943 11.9207 17.813 10.4623 18.5443 9.77859C19.2757 9.09484 20.5548 8.81622 21.5068 9.23184Z" stroke={$props.stroke} stroke-width={$props.strokeWidth} stroke-linecap="round"/><path d="M11.3125 14.0972C10.1213 13.4501 9.37393 11.3804 8.84154 9.25C8.16471 6.54167 8.84154 4.25 12.2257 4.25C15.6098 4.25 16.0263 6.75 15.6098 9.25C15.2786 11.238 14.3405 13.4203 13.0628 14.0972" stroke={$props.stroke} stroke-width={$props.strokeWidth} stroke-linecap="round"/>
        </g>
      </defs>
    )
  }
})

export { Uterus }
  