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

const LinkOne = defineComponent({
  name: 'LinkOne',
  props,
  render() {
    const $props = this.$props
    
    return h(
      <defs>
        <g id="LinkOne">
          <path d="M15.3284 9.17156L9.67158 14.8284M11.0416 6.38733L11.351 6.07797C12.6768 4.75215 16.0355 2.8076 18.864 5.63603C21.6924 8.46446 19.7478 11.8232 18.422 13.149L18.1062 13.4649M13.9649 17.6062L13.6491 17.922C12.3232 19.2478 8.96447 21.1924 6.13604 18.364C3.30761 15.5355 5.25216 12.1768 6.57798 10.8509L6.89384 10.5351" stroke={$props.stroke} stroke-width={$props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/>
        </g>
      </defs>
    )
  }
})

export { LinkOne }
  