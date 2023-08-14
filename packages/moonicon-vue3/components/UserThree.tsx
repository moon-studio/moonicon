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

const UserThree = defineComponent({
  name: 'UserThree',
  props,
  render() {
    const $props = this.$props
    
    return h(
      <defs>
        <g id="UserThree">
          <path d="M12 10.3334C13.8409 10.3334 15.3333 8.84097 15.3333 7.00002C15.3333 5.15907 13.8409 3.66669 12 3.66669C10.159 3.66669 8.66663 5.15907 8.66663 7.00002C8.66663 8.84097 10.159 10.3334 12 10.3334Z" stroke={$props.stroke} stroke-width={$props.strokeWidth} stroke-linecap="round"/><path d="M19.5 20.3333C19.5 16.1912 16.1421 12.8333 12 12.8333C7.85787 12.8333 4.5 16.1912 4.5 20.3333" stroke={$props.stroke} stroke-width={$props.strokeWidth} stroke-linecap="round"/>
        </g>
      </defs>
    )
  }
})

export { UserThree }
