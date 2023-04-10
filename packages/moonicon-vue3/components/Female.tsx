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

const Female = defineComponent({
  name: 'Female',
  props,
  render() {
    const $props = this.$props
    
    return h(
      <defs>
        <g id="Female">
          <path d="M10.389 14.535L10.8136 14.1111L9.96436 13.2633L9.53973 13.6872L10.389 14.535ZM3.25578 19.9604C3.02126 20.1945 3.02126 20.574 3.25578 20.8081C3.4903 21.0423 3.87053 21.0423 4.10504 20.8081L3.25578 19.9604ZM9.53973 13.6872L3.25578 19.9604L4.10504 20.8081L10.389 14.535L9.53973 13.6872Z" fill={$props.fill}/>
<line x1="0.6" y1="-0.6" x2="9.18472" y2="-0.6" transform="matrix(0.707717 0.706496 -0.707717 0.706496 3.03589 14.0413)" stroke={$props.stroke} strokeWidth={$props.strokeWidth} stroke-linecap="round"/>
<ellipse cx="14.5771" cy="9.43272" rx="5.77067" ry="5.76072" stroke={$props.stroke} strokeWidth={$props.strokeWidth}/>

        </g>
      </defs>
    )
  }
})

export { Female }
