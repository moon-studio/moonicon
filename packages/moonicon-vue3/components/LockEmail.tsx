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

const LockEmail = defineComponent({
  name: 'LockEmail',
  props,
  render() {
    const $props = this.$props
    
    return h(
      <defs>
        <g id="LockEmail">
          <path d="M20.5253 11.9428V6.60001C20.5253 6.04772 20.0776 5.60001 19.5253 5.60001H12.0627H4.6001C4.04781 5.60001 3.6001 6.04772 3.6001 6.60001V11.9428V17.2855C3.6001 17.8378 4.04781 18.2855 4.6001 18.2855H12.0627" stroke={$props.stroke} stroke-width={$props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/><path d="M4.02295 6.02286L11.4695 11.5062C11.8221 11.7658 12.3027 11.7658 12.6554 11.5062L20.1019 6.02286" stroke={$props.stroke} stroke-width={$props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/><path d="M16.0134 15.1043V15.1043C15.4611 15.1043 15.0134 15.552 15.0134 16.1043V17.5622C15.0134 18.1145 15.4611 18.5622 16.0134 18.5622H19.0134C19.5657 18.5622 20.0134 18.1145 20.0134 17.5622V16.1043C20.0134 15.552 19.5657 15.1043 19.0134 15.1043V15.1043M16.0134 15.1043C16.0134 13.9798 16.3134 13.0251 17.5134 13.0251C18.7134 13.0251 19.0134 13.9571 19.0134 15.1043M16.0134 15.1043H19.0134" stroke={$props.stroke} stroke-width={$props.strokeWidth}/>
        </g>
      </defs>
    )
  }
})

export { LockEmail }
