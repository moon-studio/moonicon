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

const FeltHat = defineComponent({
  name: 'FeltHat',
  props,
  render() {
    const $props = this.$props
    
    return h(
      <defs>
        <g id="FeltHat">
          <path d="M19.4252 16.7639H4.43294C3.97294 16.7639 3.60004 17.0487 3.60004 17.4V19.3083C3.60004 19.6597 3.97294 19.9445 4.43294 19.9445H19.4252C19.8852 19.9445 20.2581 19.6597 20.2581 19.3083V17.4C20.2581 17.0487 19.8852 16.7639 19.4252 16.7639Z" stroke={$props.stroke} strokeWidth={$props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/>
<path d="M7.97943 12.8324V16.1896" stroke={$props.stroke} strokeWidth={$props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/>
<path d="M11.9389 12.8324V16.1896" stroke={$props.stroke} strokeWidth={$props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/>
<path d="M15.8986 12.8324V16.1896" stroke={$props.stroke} strokeWidth={$props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/>
<path d="M11.939 6.95724C12.9109 6.95724 13.6988 6.2057 13.6988 5.27863C13.6988 4.35155 12.9109 3.60001 11.939 3.60001C10.967 3.60001 10.1791 4.35155 10.1791 5.27863C10.1791 6.2057 10.967 6.95724 11.939 6.95724Z" stroke={$props.stroke} strokeWidth={$props.strokeWidth}/>
<path d="M4.8996 16.1897C4.8996 12.7275 5.33955 6.95724 11.9389 6.95724C18.5382 6.95724 18.9782 12.7275 18.9782 16.1897" stroke={$props.stroke} strokeWidth={$props.strokeWidth}/>

        </g>
      </defs>
    )
  }
})

export { FeltHat }
