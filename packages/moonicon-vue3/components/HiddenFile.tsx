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

const HiddenFile = defineComponent({
  name: 'HiddenFile',
  props,
  render() {
    const $props = this.$props
    
    return h(
      <defs>
        <g id="HiddenFile">
          <path d="M5 19.5V4.5C5 3.94772 5.44772 3.5 6 3.5H14.5858C14.851 3.5 15.1054 3.60536 15.2929 3.79289L18.7071 7.20711C18.8946 7.39464 19 7.649 19 7.91421V19.5C19 20.0523 18.5523 20.5 18 20.5H6C5.44772 20.5 5 20.0523 5 19.5Z" stroke={$props.stroke} strokeWidth={$props.strokeWidth}/>
<path d="M8.08594 9.6001C8.22303 10.0503 8.43073 10.468 8.69564 10.8391C9.43825 11.8797 10.63 12.5542 11.9737 12.5542C13.3174 12.5542 14.5091 11.8797 15.2518 10.8391C15.5167 10.468 15.7244 10.0503 15.8614 9.6001" stroke={$props.stroke} strokeWidth={$props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10.7692 12.5879L10.2661 14.4902" stroke={$props.stroke} strokeWidth={$props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/>
<path d="M13.1821 12.5879L13.6853 14.4902" stroke={$props.stroke} strokeWidth={$props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/>
<path d="M15.0615 11.7437L16.436 13.1362" stroke={$props.stroke} strokeWidth={$props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/>
<path d="M7.6001 13.0517L8.97466 11.6592" stroke={$props.stroke} strokeWidth={$props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/>

        </g>
      </defs>
    )
  }
})

export { HiddenFile }
