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

const RefreshThree = defineComponent({
  name: 'RefreshThree',
  props,
  render() {
    const $props = this.$props
    
    return h(
      <defs>
        <g id="RefreshThree">
          <path d="M19.0749 9.49998C18.6523 8.30564 17.934 7.23782 16.987 6.39616C16.0401 5.55451 14.8954 4.96645 13.6597 4.68686C12.424 4.40727 11.1376 4.44527 9.92061 4.79729C8.70358 5.14932 7.59556 5.80391 6.69993 6.69998L4.7666 8.51665M4.92493 14.5C5.34757 15.6943 6.06588 16.7621 7.01282 17.6038C7.95977 18.4455 9.10449 19.0335 10.3402 19.3131C11.5759 19.5927 12.8622 19.5547 14.0793 19.2027C15.2963 18.8506 16.4043 18.1961 17.2999 17.3L19.2333 15.4833" stroke={$props.stroke} stroke-width={$props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/><path d="M20 19.5V14.5H15" stroke={$props.stroke} stroke-width={$props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/><path d="M4 4.5V9.5H9" stroke={$props.stroke} stroke-width={$props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/>
        </g>
      </defs>
    )
  }
})

export { RefreshThree }
  