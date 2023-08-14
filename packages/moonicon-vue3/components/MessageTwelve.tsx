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

const MessageTwelve = defineComponent({
  name: 'MessageTwelve',
  props,
  render() {
    const $props = this.$props
    
    return h(
      <defs>
        <g id="MessageTwelve">
          <path d="M17.9375 3.75H6.0625C5.48285 3.75181 4.9274 4.00591 4.51753 4.45678C4.10765 4.90764 3.87665 5.51863 3.875 6.15625V14.4062C3.87665 15.0439 4.10765 15.6549 4.51753 16.1057C4.9274 16.5566 5.48285 16.8107 6.0625 16.8125H7.625V20.25L11.2859 16.8924C11.3422 16.8408 11.4131 16.8125 11.4863 16.8125H17.9375C18.5172 16.8107 19.0726 16.5566 19.4825 16.1057C19.8924 15.6549 20.1234 15.0439 20.125 14.4062V6.15625C20.1234 5.51863 19.8924 4.90764 19.4825 4.45678C19.0726 4.00591 18.5172 3.75181 17.9375 3.75Z" stroke={$props.stroke} stroke-width={$props.strokeWidth} stroke-linejoin="round"/><path d="M7.94189 10.1331H7.95189" stroke={$props.stroke} stroke-width={$props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/><path d="M12.0488 10.1331H12.0588" stroke={$props.stroke} stroke-width={$props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/><path d="M16.1558 10.1331H16.1658" stroke={$props.stroke} stroke-width={$props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/>
        </g>
      </defs>
    )
  }
})

export { MessageTwelve }
