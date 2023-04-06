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

const Hamburger = defineComponent({
  name: 'Hamburger',
  props,
  render() {
    const $props = this.$props
    
    return h(
      <defs>
        <g id="Hamburger">
          <path d="M3.66663 15.7616L5.42498 14.4721C5.7387 14.2421 6.15738 14.2148 6.49826 14.4023L8.48775 15.4965C8.78783 15.6616 9.1515 15.6616 9.45159 15.4965L11.518 14.36C11.8181 14.1949 12.1818 14.1949 12.4819 14.36L14.5483 15.4965C14.8484 15.6616 15.2121 15.6616 15.5122 15.4965L17.5017 14.4023C17.8426 14.2148 18.2612 14.2421 18.575 14.4721L20.3333 15.7616" stroke={$props.stroke} stroke-width={$props.strokeWidth} stroke-linecap="round"/><path d="M19.3333 17.8334H4.66663C4.11434 17.8334 3.66663 18.2811 3.66663 18.8334V19.3334C3.66663 19.8857 4.11434 20.3334 4.66663 20.3334H19.3333C19.8856 20.3334 20.3333 19.8857 20.3333 19.3334V18.8334C20.3333 18.2811 19.8856 17.8334 19.3333 17.8334Z" stroke={$props.stroke} stroke-width={$props.strokeWidth} stroke-linecap="round"/><path fill-rule="evenodd" clip-rule="evenodd" d="M19.3333 9.8446C19.8856 9.8446 20.3439 9.39168 20.2263 8.85206C19.5858 5.91193 16.1466 3.66663 12 3.66663C7.85333 3.66663 4.41408 5.91193 3.7736 8.85205C3.65605 9.39168 4.11434 9.8446 4.66663 9.8446H19.3333Z" stroke={$props.stroke} stroke-width={$props.strokeWidth} stroke-linecap="round"/><line x1="4.29659" y1="12.1915" x2="19.7333" y2="12.1915" stroke={$props.stroke} stroke-width={$props.strokeWidth} stroke-linecap="round"/>
        </g>
      </defs>
    )
  }
})

export { Hamburger }
  