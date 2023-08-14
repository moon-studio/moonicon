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

const CCEmail = defineComponent({
  name: 'CCEmail',
  props,
  render() {
    const $props = this.$props
    
    return h(
      <defs>
        <g id="CCEmail">
          <path d="M16.1705 14.3626C16.1705 13.8698 15.9235 13.2757 14.9353 13.2757C14.2292 13.2757 13.7002 13.6398 13.7002 14.3626V16.7719C13.7002 17.6113 14.4658 17.8211 14.9353 17.8211C15.8291 17.8211 16.1705 17.1216 16.1705 16.7719" stroke={$props.stroke} stroke-width={$props.strokeWidth} stroke-linecap="round"/><path d="M20.69 14.3626C20.69 14.0523 20.5042 13.2961 19.4549 13.2961C18.7682 13.2961 18.2197 13.6398 18.2197 14.3626V16.7719C18.2197 17.6113 19.0432 17.8211 19.4549 17.8211C20.443 17.8211 20.69 17.1217 20.69 16.7719" stroke={$props.stroke} stroke-width={$props.strokeWidth} stroke-linecap="round"/><path d="M20.5253 11.6428V6.30005C20.5253 5.74776 20.0776 5.30005 19.5253 5.30005H12.0627H4.6001C4.04781 5.30005 3.6001 5.74776 3.6001 6.30005V11.6428V16.9856C3.6001 17.5379 4.04781 17.9856 4.6001 17.9856H12.0627" stroke={$props.stroke} stroke-width={$props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/><path d="M4.02295 5.7229L11.4695 11.2062C11.8221 11.4659 12.3027 11.4659 12.6554 11.2062L20.1019 5.7229" stroke={$props.stroke} stroke-width={$props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/>
        </g>
      </defs>
    )
  }
})

export { CCEmail }
