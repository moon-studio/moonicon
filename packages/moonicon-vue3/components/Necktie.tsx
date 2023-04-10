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

const Necktie = defineComponent({
  name: 'Necktie',
  props,
  render() {
    const $props = this.$props
    
    return h(
      <defs>
        <g id="Necktie">
          <path d="M8.63446 17.1424L10.867 7.8175H13.0995L15.3321 17.1424L11.9833 20.3858L8.63446 17.1424Z" stroke={$props.stroke} strokeWidth={$props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/>
<path d="M11.9831 14.1017V16.1964" stroke={$props.stroke} strokeWidth={$props.strokeWidth} stroke-linecap="round"/>
<path d="M10.8669 3.62808H13.0995L14.2157 4.55907L13.0995 7.81753H10.8669L9.75067 4.55907L10.8669 3.62808Z" stroke={$props.stroke} strokeWidth={$props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/>

        </g>
      </defs>
    )
  }
})

export { Necktie }
