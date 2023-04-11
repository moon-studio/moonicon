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

const MySQL = defineComponent({
  name: 'MySQL',
  props,
  render() {
    const $props = this.$props
    
    return h(
      <defs>
        <g id="MySQL">
          <path d="M11.6778 21C11.6778 21 9.89133 19.5971 8.7526 16.7856C7.91678 18.1913 7.38372 19.9589 7.14204 19.9589C6.30625 19.9589 4.53635 17.113 6.62795 13.2756C5.62009 12.2291 4.59068 10.5494 4.25637 8.67499C3.83847 6.33204 1.17175 4.56214 2.19992 3.53394C3.23808 2.49577 5.79217 4.43193 6.62795 4.90052C7.46374 5.36911 9.19125 4.95811 11.9547 6.99994C14.4186 8.82048 15.5105 10.0006 16.7488 13.3958C17.8632 13.2396 21.6213 13.7866 22.6243 16.7856C21.9278 16.7856 19.5156 16.9004 18.2773 17.3793C18.7914 18.9216 19.3056 18.4075 20.8479 19.9498" stroke={$props.stroke} strokeWidth={$props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/><path d="M8.17017 9.16272L8.68427 9.67682" stroke={$props.stroke} strokeWidth={$props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/>
        </g>
      </defs>
    )
  }
})

export { MySQL }
