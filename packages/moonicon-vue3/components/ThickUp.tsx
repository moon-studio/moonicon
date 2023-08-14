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

const ThickUp = defineComponent({
  name: 'ThickUp',
  props,
  render() {
    const $props = this.$props
    
    return h(
      <defs>
        <g id="ThickUp">
          <path d="M12.7886 4.11133L19.2406 12.3852C19.7527 13.0418 19.2848 14.0001 18.4521 14.0001L15.4 14.0001L15.4 19.1001C15.4 19.6524 14.9523 20.1001 14.4 20.1001L9.6 20.1001C9.04771 20.1001 8.6 19.6524 8.6 19.1001L8.6 14.0001L5.54793 14.0001C4.71519 14.0001 4.24727 13.0418 4.75936 12.3852L11.2114 4.11133C11.6118 3.59792 12.3882 3.59792 12.7886 4.11133Z" stroke={$props.stroke} stroke-width={$props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/>
        </g>
      </defs>
    )
  }
})

export { ThickUp }
