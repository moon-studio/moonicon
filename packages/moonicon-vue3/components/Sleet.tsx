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

const Sleet = defineComponent({
  name: 'Sleet',
  props,
  render() {
    const $props = this.$props
    
    return h(
      <defs>
        <g id="Sleet">
          <path d="M12.5001 16.996L14.9579 15.5771M14.9579 16.996L12.5002 15.5771M13.7291 14.8676L13.7291 17.7055" stroke={$props.stroke} stroke-width={$props.strokeWidth} stroke-linecap="round"/><path d="M7.34994 15.9V15.9C7.34994 15.8982 7.34848 15.8967 7.34664 15.8966C5.48477 15.8131 3.99994 14.2169 3.99994 12.26C3.99994 10.2497 5.56694 8.62 7.49994 8.62V8.62C7.91682 8.62 8.32059 8.39141 8.50747 8.01877C9.25816 6.52192 10.7643 5.5 12.4999 5.5C14.8072 5.5 16.7089 7.3059 16.9695 9.63273C16.9712 9.64823 16.9843 9.66007 16.9999 9.66V9.66C18.6568 9.66 19.9999 11.0569 19.9999 12.78C19.9999 14.4502 18.7381 15.8138 17.1518 15.8961C17.1508 15.8961 17.1499 15.897 17.1499 15.898V15.898C17.1499 15.8991 17.1491 15.9 17.148 15.9H16.9999" stroke={$props.stroke} stroke-width={$props.strokeWidth} stroke-linecap="round"/><path d="M10.9836 13L8.78361 19" stroke={$props.stroke} stroke-width={$props.strokeWidth} stroke-linecap="round"/>
        </g>
      </defs>
    )
  }
})

export { Sleet }
  