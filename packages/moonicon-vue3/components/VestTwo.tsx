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

const VestTwo = defineComponent({
  name: 'VestTwo',
  props,
  render() {
    const $props = this.$props
    
    return h(
      <defs>
        <g id="VestTwo">
          <path d="M15.4999 4C15.2238 4 15.0023 4.22719 14.9284 4.49327C14.5917 5.70647 13.1326 7 11.9999 7C10.8673 7 9.40819 5.70647 9.07143 4.49327C8.99757 4.22719 8.77608 4 8.49994 4V4C8.07037 4 7.72123 4.35766 7.70976 4.79933C7.68308 5.82814 7.59884 7.58048 7.33327 8.4C7.03729 9.31328 5.84034 10.4582 5.28523 10.9532C5.1067 11.1124 4.99994 11.3415 4.99994 11.5845V19.2C4.99994 19.6418 5.34816 20 5.77772 20H18.2222C18.6517 20 18.9999 19.6418 18.9999 19.2V11.5845C18.9999 11.3415 18.8932 11.1124 18.7147 10.9532C18.1596 10.4582 16.9626 9.31328 16.6666 8.4C16.401 7.58048 16.3168 5.82814 16.2901 4.79933C16.2786 4.35766 15.9295 4 15.4999 4V4Z" stroke={$props.stroke} stroke-width={$props.strokeWidth} stroke-linejoin="round"/>
        </g>
      </defs>
    )
  }
})

export { VestTwo }
  