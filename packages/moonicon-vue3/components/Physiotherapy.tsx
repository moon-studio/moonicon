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

const Physiotherapy = defineComponent({
  name: 'Physiotherapy',
  props,
  render() {
    const $props = this.$props
    
    return h(
      <defs>
        <g id="Physiotherapy">
          <path d="M12 6.5C14.9047 6.5 15.4199 9.24657 15.1163 11" stroke={$props.stroke} stroke-width={$props.strokeWidth} stroke-linecap="round"/><path d="M4 19.9978H20" stroke={$props.stroke} stroke-width={$props.strokeWidth} stroke-linecap="round"/><path d="M9 15.3242H9.6C9.6 15.1014 9.47655 14.897 9.27938 14.7932L9 15.3242ZM15 15.2581L14.7255 14.7246C14.5256 14.8274 14.4 15.0334 14.4 15.2581H15ZM12 4.6C14.2044 4.6 15.5243 5.50508 16.3131 6.60058C17.1239 7.72668 17.4 9.09601 17.4 10H18.6C18.6 8.90399 18.2761 7.27332 17.2869 5.89942C16.2757 4.49492 14.5956 3.4 12 3.4V4.6ZM6.6 10C6.6 7.79555 7.50508 6.47568 8.60058 5.68692C9.72668 4.87613 11.096 4.6 12 4.6V3.4C10.904 3.4 9.27332 3.72387 7.89942 4.71308C6.49492 5.72432 5.4 7.40445 5.4 10H6.6ZM9.27938 14.7932C7.22689 13.7133 6.6 11.3811 6.6 10H5.4C5.4 11.6029 6.10881 14.481 8.72062 15.8552L9.27938 14.7932ZM17.4 10C17.4 12.6165 16.1226 14.0057 14.7255 14.7246L15.2745 15.7916C17.0264 14.8902 18.6 13.1144 18.6 10H17.4ZM8.4 15.3242V16H9.6V15.3242H8.4ZM14.4 15.2581V16H15.6V15.2581H14.4ZM14 16.4H10V17.6H14V16.4ZM14.4 16C14.4 16.2209 14.2209 16.4 14 16.4V17.6C14.8837 17.6 15.6 16.8837 15.6 16H14.4ZM8.4 16C8.4 16.8837 9.11635 17.6 10 17.6V16.4C9.77909 16.4 9.6 16.2209 9.6 16H8.4Z" fill={$props.fill}/>
        </g>
      </defs>
    )
  }
})

export { Physiotherapy }
  