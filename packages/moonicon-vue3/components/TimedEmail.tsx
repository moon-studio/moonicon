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

const TimedEmail = defineComponent({
  name: 'TimedEmail',
  props,
  render() {
    const $props = this.$props
    
    return h(
      <defs>
        <g id="TimedEmail">
          <path d="M20.5253 11.6428V6.30002C20.5253 5.74773 20.0776 5.30002 19.5253 5.30002H12.0627H4.6001C4.04781 5.30002 3.6001 5.74773 3.6001 6.30002V11.6428V16.9856C3.6001 17.5378 4.04781 17.9856 4.6001 17.9856H12.0627" stroke={$props.stroke} stroke-width={$props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/><path d="M4.02319 5.72287L11.4697 11.2062C11.8224 11.4658 12.303 11.4658 12.6556 11.2062L20.1021 5.72287" stroke={$props.stroke} stroke-width={$props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/><path d="M17 15.7H16.4C16.4 16.0314 16.6686 16.3 17 16.3V15.7ZM18.5 16.3C18.8314 16.3 19.1 16.0314 19.1 15.7C19.1 15.3686 18.8314 15.1 18.5 15.1V16.3ZM17.6 14.2C17.6 13.8686 17.3314 13.6 17 13.6C16.6686 13.6 16.4 13.8686 16.4 14.2H17.6ZM17 13.3C18.0044 13.3 18.5743 13.7051 18.9131 14.1756C19.2739 14.6767 19.4 15.296 19.4 15.7H20.6C20.6 15.104 20.4261 14.2233 19.8869 13.4744C19.3257 12.6949 18.3956 12.1 17 12.1V13.3ZM19.4 15.7C19.4 16.7045 18.9949 17.2743 18.5244 17.6131C18.0233 17.9739 17.404 18.1 17 18.1V19.3C17.596 19.3 18.4767 19.1261 19.2256 18.5869C20.0051 18.0257 20.6 17.0956 20.6 15.7H19.4ZM17 18.1C15.9956 18.1 15.4257 17.6949 15.0869 17.2244C14.7261 16.7233 14.6 16.104 14.6 15.7H13.4C13.4 16.296 13.5739 17.1767 14.1131 17.9256C14.6743 18.7051 15.6044 19.3 17 19.3V18.1ZM14.6 15.7C14.6 14.6956 15.0051 14.1257 15.4756 13.7869C15.9767 13.4261 16.596 13.3 17 13.3V12.1C16.404 12.1 15.5233 12.2739 14.7744 12.8131C13.9949 13.3743 13.4 14.3045 13.4 15.7H14.6ZM17 16.3H18.5V15.1H17V16.3ZM17.6 15.7V14.2H16.4V15.7H17.6Z" fill="black"/>
        </g>
      </defs>
    )
  }
})

export { TimedEmail }
