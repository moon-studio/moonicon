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

const Socks = defineComponent({
  name: 'Socks',
  props,
  render() {
    const $props = this.$props
    
    return h(
      <defs>
        <g id="Socks">
          <path d="M13.2069 2.34131H6.74115C6.34437 2.34131 6.02273 2.69932 6.02273 3.14095V12.4461C6.02273 13.8184 6.59764 15.1121 7.58029 15.9409C8.88855 17.0443 12.0075 19.9085 12.7574 20.5047C14.0146 21.5042 16.7234 22.5038 18.5194 20.5047C20.3152 18.5056 20.075 16.2198 18.5192 14.8812C15.689 12.4461 13.9253 10.9712 13.9253 10.9712V3.14095C13.9253 2.69932 13.6037 2.34131 13.2069 2.34131Z" stroke={$props.stroke} stroke-width={$props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/><path d="M6.02264 5.43592H8.51445M13.4981 5.43592H11.5046M8.51445 2.49854V5.43592M8.51445 5.43592H11.5046M11.5046 2.49854V5.43592" stroke={$props.stroke} stroke-width={$props.strokeWidth} stroke-linecap="round"/>
        </g>
      </defs>
    )
  }
})

export { Socks }
