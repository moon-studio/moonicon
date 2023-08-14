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

const Pear = defineComponent({
  name: 'Pear',
  props,
  render() {
    const $props = this.$props
    
    return h(
      <defs>
        <g id="Pear">
          <path d="M11.9999 5.79731C10.5627 5.79731 9.25838 6.6168 8.66523 7.8925L7.27887 10.874L5.60918 13.6649C4.57306 15.3967 4.88187 17.5938 6.35768 18.9903L6.8966 19.5003C8.21623 20.7491 10.2859 20.8386 11.7139 19.7087C11.8806 19.5768 12.1193 19.5768 12.286 19.7087C13.714 20.8386 15.7836 20.7491 17.1033 19.5003L17.6422 18.9903C19.118 17.5938 19.4268 15.3967 18.3907 13.6649L16.721 10.874L15.3347 7.8925C14.7415 6.6168 13.4372 5.79731 11.9999 5.79731ZM11.9999 5.79731C11.9999 3.95947 11.101 2.48386 9.63171 2.14574" stroke={$props.stroke} stroke-width={$props.strokeWidth} stroke-linecap="round"/>
        </g>
      </defs>
    )
  }
})

export { Pear }
