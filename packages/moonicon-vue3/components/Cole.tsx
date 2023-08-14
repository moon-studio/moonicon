import { defineComponent, h } from 'vue'
import type { PropType } from 'vue'
  
const props = {
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

const Cole = defineComponent({
  name: 'Cole',
  props,
  render() {
    const $props = this.$props
    
    return h(
      <defs>
        <g id="Cole">
          <path d="M10.3522 19.7534C10.3522 19.7534 9.82631 20.1062 9.17686 20.1062C7.78838 20.1062 6.93741 18.984 6.93741 17.7276C6.93741 16.4711 7.8683 15.1839 7.27051 13.9883C6.77154 12.9904 4.8054 12.5108 4.07334 9.48116C3.46946 6.98207 5.21679 3.75919 9.03927 4.70165" stroke={$props.stroke} stroke-width={$props.strokeWidth} stroke-linecap="round" stroke-linejoin="bevel"/><path d="M13.6033 19.7534C13.6033 19.7534 14.1291 20.1062 14.7786 20.1062C16.1671 20.1062 17.018 18.984 17.018 17.7276C17.018 16.4711 16.0871 15.1839 16.6849 13.9883C17.1839 12.9904 19.15 12.5108 19.8821 9.48116C20.486 6.98207 18.7387 3.75919 14.9162 4.70165" stroke={$props.stroke} stroke-width={$props.strokeWidth} stroke-linecap="round" stroke-linejoin="bevel"/><path d="M10.2734 14.8618C9.2484 13.2106 7.82495 10.5531 7.82495 8.71091C7.82495 4.97624 9.68555 3.70001 11.9812 3.70001C14.2766 3.70001 16.1375 4.97659 16.1375 8.71091C16.1375 10.5532 14.8003 13.2106 13.7754 14.8618" stroke={$props.stroke} stroke-width={$props.strokeWidth} stroke-linecap="round" stroke-linejoin="bevel"/><path d="M9.56671 17.6507C9.56671 19.112 10.4728 20.3252 11.9811 20.325C13.4891 20.3249 14.3957 19.1117 14.3957 17.6507C14.3957 15.7433 12.5873 13.2368 11.9811 11.1001C11.4329 13.1322 9.56671 15.5585 9.56671 17.6507Z" stroke={$props.stroke} stroke-width={$props.strokeWidth} stroke-linecap="square" stroke-linejoin="round"/>
        </g>
      </defs>
    )
  }
})

export { Cole }
