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

const Facebook = defineComponent({
  name: 'Facebook',
  props,
  render() {
    const $props = this.$props
    
    return h(
      <defs>
        <g id="Facebook">
          <path d="M22 12.0614C22 6.50448 17.5226 2 12 2C6.47745 2 2 6.50448 2 12.0614C2 17.082 5.65737 21.2444 10.4378 21.999V14.9691H7.89859V12.0604H10.4368V9.84485C10.4368 7.32247 11.93 5.92997 14.2142 5.92997C15.3083 5.92997 16.4524 6.12617 16.4524 6.12617V8.60227H15.1923C13.9502 8.60227 13.5632 9.37801 13.5632 10.1739V12.0614H16.3364L15.8934 14.9701H13.5632V22C18.3436 21.2444 22.001 17.083 22 12.0614Z" fill={$props.fill}/>

        </g>
      </defs>
    )
  }
})

export { Facebook }
