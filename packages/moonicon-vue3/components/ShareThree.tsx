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

const ShareThree = defineComponent({
  name: 'ShareThree',
  props,
  render() {
    const $props = this.$props
    
    return h(
      <defs>
        <g id="ShareThree">
          <path d="M4 12.3V18.7C4 19.1244 4.21071 19.5314 4.58579 19.8314C4.96086 20.1315 5.46957 20.3 6 20.3H18C18.5304 20.3 19.0391 20.1315 19.4142 19.8314C19.7893 19.5314 20 19.1244 20 18.7V12.3" stroke={$props.stroke} strokeWidth={$props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/>
<path d="M15.3333 6.99996L12 3.66663L8.66663 6.99996" stroke={$props.stroke} strokeWidth={$props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 3.66663V14.5" stroke={$props.stroke} strokeWidth={$props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/>

        </g>
      </defs>
    )
  }
})

export { ShareThree }
