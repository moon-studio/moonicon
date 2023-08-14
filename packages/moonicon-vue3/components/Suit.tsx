import { defineComponent, h } from 'vue'
import type { PropType } from 'vue'
  
const props = {
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

const Suit = defineComponent({
  name: 'Suit',
  props,
  render() {
    const $props = this.$props
    
    return h(
      <defs>
        <g id="Suit">
          <path d="M17.4167 11.5V18.4166M17.4167 18.4166V19.3333C17.4167 19.8856 16.969 20.3333 16.4167 20.3333H7.58335C7.03107 20.3333 6.58335 19.8856 6.58335 19.3333V18.4166M17.4167 18.4166H19.3334C19.8856 18.4166 20.3334 17.9689 20.3334 17.4166V6.82602C20.3334 6.42599 20.095 6.06446 19.7273 5.90688L14.6887 3.74748C14.5642 3.69413 14.4302 3.66663 14.2948 3.66663H9.70528C9.56985 3.66663 9.43584 3.69413 9.31136 3.74748L4.27277 5.90688C3.90508 6.06446 3.66669 6.42599 3.66669 6.82602V17.4166C3.66669 17.9689 4.1144 18.4166 4.66669 18.4166H6.58335M6.58335 18.4166V11.5" stroke={$props.stroke} stroke-width={$props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/><path d="M14.4999 3.66663L11.9999 9.49996M11.9999 9.49996L9.49994 3.66663M11.9999 9.49996V17.4166V20.3333" stroke={$props.stroke} stroke-width={$props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/><path d="M14.4999 3.66663L11.9999 9.49996" stroke={$props.stroke} stroke-width={$props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/><path d="M11.9999 9.49996L9.49994 3.66663" stroke={$props.stroke} stroke-width={$props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/><path d="M9.49986 3.66663L8.10506 6.45622C7.93804 6.79027 7.97108 7.18956 8.19075 7.49161L9.18705 8.86152C9.38262 9.13043 9.43174 9.47895 9.31811 9.79143L8.8249 11.1478C8.72445 11.424 8.75061 11.7304 8.89645 11.9857L11.9999 17.4166" stroke={$props.stroke} stroke-width={$props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/><path d="M14.4999 3.66663L16.1819 6.3577C16.4193 6.73755 16.3751 7.22893 16.0738 7.56037L14.9062 8.84477C14.6564 9.11956 14.5794 9.51016 14.7063 9.85918L15.1749 11.1478C15.2754 11.424 15.2492 11.7304 15.1034 11.9857L11.9999 17.4166" stroke={$props.stroke} stroke-width={$props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/>
        </g>
      </defs>
    )
  }
})

export { Suit }
