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

const RefreshFour = defineComponent({
  name: 'RefreshFour',
  props,
  render() {
    const $props = this.$props
    
    return h(
      <defs>
        <g id="RefreshFour">
          <path d="M20 4.5V9.5H15" stroke={$props.stroke} strokeWidth={$props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/>
<path d="M4 19.5V14.5H9" stroke={$props.stroke} strokeWidth={$props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/>
<path d="M4.92507 9.49998C5.3477 8.30564 6.06601 7.23782 7.01295 6.39616C7.9599 5.55451 9.10462 4.96645 10.3403 4.68686C11.576 4.40727 12.8624 4.44527 14.0794 4.79729C15.2964 5.14932 16.4044 5.80391 17.3001 6.69998L19.2334 8.51665M19.0751 14.5C18.6524 15.6943 17.9341 16.7621 16.9872 17.6038C16.0402 18.4455 14.8955 19.0335 13.6598 19.3131C12.4241 19.5927 11.1378 19.5547 9.92074 19.2027C8.70371 18.8506 7.59569 18.1961 6.70006 17.3L4.76673 15.4833" stroke={$props.stroke} strokeWidth={$props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/>

        </g>
      </defs>
    )
  }
})

export { RefreshFour }
