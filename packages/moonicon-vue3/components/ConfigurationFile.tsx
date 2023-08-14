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

const ConfigurationFile = defineComponent({
  name: 'ConfigurationFile',
  props,
  render() {
    const $props = this.$props
    
    return h(
      <defs>
        <g id="ConfigurationFile">
          <path d="M5 19.5V4.5C5 3.94772 5.44772 3.5 6 3.5H14.5858C14.851 3.5 15.1054 3.60536 15.2929 3.79289L18.7071 7.20711C18.8946 7.39464 19 7.649 19 7.91421V19.5C19 20.0523 18.5523 20.5 18 20.5H6C5.44772 20.5 5 20.0523 5 19.5Z" stroke={$props.stroke} stroke-width={$props.strokeWidth}/><path d="M12.0669 14.2337C13.2636 14.2337 14.2337 13.2636 14.2337 12.0669C14.2337 10.8703 13.2636 9.90015 12.0669 9.90015C10.8703 9.90015 9.90015 10.8703 9.90015 12.0669C9.90015 13.2636 10.8703 14.2337 12.0669 14.2337Z" stroke={$props.stroke} stroke-width={$props.strokeWidth} stroke-linecap="round"/><path d="M12.0669 8.6001V9.90017" stroke={$props.stroke} stroke-width={$props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/><path d="M12.0669 14.2336V15.5337" stroke={$props.stroke} stroke-width={$props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/><path d="M14.5926 9.4668L13.6733 10.3861" stroke={$props.stroke} stroke-width={$props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/><path d="M10.2589 13.8003L9.3396 14.7196" stroke={$props.stroke} stroke-width={$props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/><path d="M9.4668 9.4668L10.3861 10.3861" stroke={$props.stroke} stroke-width={$props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/><path d="M13.8003 13.8003L14.7196 14.7196" stroke={$props.stroke} stroke-width={$props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/><path d="M8.6001 12.0669H9.25014H9.90017" stroke={$props.stroke} stroke-width={$props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/><path d="M14.2336 12.0669H14.8837H15.5337" stroke={$props.stroke} stroke-width={$props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/>
        </g>
      </defs>
    )
  }
})

export { ConfigurationFile }
