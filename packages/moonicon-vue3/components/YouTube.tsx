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

const YouTube = defineComponent({
  name: 'YouTube',
  props,
  render() {
    const $props = this.$props
    
    return h(
      <defs>
        <g id="YouTube">
          <path d="M22.0621 6.89951C21.8185 5.99336 21.1119 5.28566 20.2057 5.04101C18.5667 4.60001 12 4.60001 12 4.60001C12 4.60001 5.4333 4.60001 3.79425 5.03786C2.8881 5.28146 2.1804 5.99021 1.93785 6.89636C1.5 8.53751 1.5 11.9595 1.5 11.9595C1.5 11.9595 1.5 15.3814 1.93785 17.0194C2.17935 17.9245 2.89125 18.6364 3.79425 18.8779C5.43225 19.3189 12 19.3189 12 19.3189C12 19.3189 18.5667 19.3189 20.2057 18.8779C21.1108 18.6364 21.8206 17.9245 22.0621 17.0194C22.5 15.3814 22.5 11.9595 22.5 11.9595C22.5 11.9595 22.5 8.53751 22.0621 6.89951ZM9.91365 15.1V8.81891L15.3516 11.9364L9.91365 15.1Z" fill={$props.fill}/>
        </g>
      </defs>
    )
  }
})

export { YouTube }
  