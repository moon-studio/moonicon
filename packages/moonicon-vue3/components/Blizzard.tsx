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

const Blizzard = defineComponent({
  name: 'Blizzard',
  props,
  render() {
    const $props = this.$props
    
    return h(
      <defs>
        <g id="Blizzard">
          <path d="M7.34994 14.9V14.9C7.34994 14.8982 7.34848 14.8967 7.34664 14.8966C5.48477 14.8131 3.99994 13.2169 3.99994 11.26C3.99994 9.24968 5.56694 7.62 7.49994 7.62V7.62C7.91682 7.62 8.32059 7.39141 8.50747 7.01877C9.25816 5.52192 10.7643 4.5 12.4999 4.5C14.8072 4.5 16.7089 6.3059 16.9695 8.63273C16.9712 8.64823 16.9843 8.66007 16.9999 8.66V8.66C18.6568 8.66 19.9999 10.0569 19.9999 11.78C19.9999 13.4502 18.7381 14.8138 17.1518 14.8961C17.1508 14.8961 17.1499 14.897 17.1499 14.898V14.898C17.1499 14.8991 17.1491 14.9 17.148 14.9H16.9999" stroke={$props.stroke} strokeWidth={$props.strokeWidth} stroke-linecap="round"/><path d="M8.53607 18.1427L10.9938 16.7237M10.9938 18.1427L8.5361 16.7237M9.76508 16.0142L9.76507 18.8522M13.2514 18.1427L15.7091 16.7237M15.7092 18.1427L13.2514 16.7237M14.4804 16.0142L14.4804 18.8522" stroke={$props.stroke} strokeWidth={$props.strokeWidth} stroke-linecap="round"/><path d="M8.53607 13.3663L10.9938 11.9474M10.9938 13.3663L8.5361 11.9474M9.76508 11.2379L9.76507 14.0758M13.2514 13.3663L15.7091 11.9474M15.7092 13.3663L13.2514 11.9474M14.4804 11.2379L14.4804 14.0758" stroke={$props.stroke} strokeWidth={$props.strokeWidth} stroke-linecap="round"/>
        </g>
      </defs>
    )
  }
})

export { Blizzard }
