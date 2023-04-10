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

const EditEmail = defineComponent({
  name: 'EditEmail',
  props,
  render() {
    const $props = this.$props
    
    return h(
      <defs>
        <g id="EditEmail">
          <path d="M20.5253 11.9428V6.60001C20.5253 6.04772 20.0776 5.60001 19.5253 5.60001H12.0627H4.6001C4.04781 5.60001 3.6001 6.04772 3.6001 6.60001V11.9428V17.2855C3.6001 17.8378 4.04781 18.2855 4.6001 18.2855H12.0627" stroke={$props.stroke} strokeWidth={$props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/>
<path d="M4.02295 6.02286L11.4695 11.5062C11.8221 11.7658 12.3027 11.7658 12.6554 11.5062L20.1019 6.02286" stroke={$props.stroke} strokeWidth={$props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/>
<path d="M19.4748 14.2322L18.7677 13.5251C18.3771 13.1346 17.744 13.1346 17.3534 13.5251L15.4678 15.4107C15.3148 15.5637 15.2156 15.7622 15.185 15.9764L14.8786 18.1213L17.0235 17.8149C17.2377 17.7843 17.4361 17.6851 17.5891 17.5321L19.4748 15.6465C19.8653 15.2559 19.8653 14.6228 19.4748 14.2322Z" stroke={$props.stroke} strokeWidth={$props.strokeWidth} stroke-linejoin="round"/>

        </g>
      </defs>
    )
  }
})

export { EditEmail }
