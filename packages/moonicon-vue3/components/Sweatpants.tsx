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

const Sweatpants = defineComponent({
  name: 'Sweatpants',
  props,
  render() {
    const $props = this.$props
    
    return h(
      <defs>
        <g id="Sweatpants">
          <path d="M17.8333 5.53512L19.4999 18.1688H14.9999L11.9999 11.1088L8.99994 18.1688H4.49994L6.16661 5.53512M17.8333 5.53512H6.16661M17.8333 5.53512V3.5H6.16661V5.53512" stroke={$props.stroke} strokeWidth={$props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/><path d="M15.4999 18.1688L15.9999 20.3983H19.0833V18.1688H15.4999Z" stroke={$props.stroke} strokeWidth={$props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/><path d="M7.99977 20.3983H4.91644V18.1688H8.49977L7.99977 20.3983Z" stroke={$props.stroke} strokeWidth={$props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/><path d="M12.9999 5.8324L13.6666 8.32197" stroke={$props.stroke} strokeWidth={$props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/><path d="M10.9999 5.8324L10.3332 8.32197" stroke={$props.stroke} strokeWidth={$props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/>
        </g>
      </defs>
    )
  }
})

export { Sweatpants }
