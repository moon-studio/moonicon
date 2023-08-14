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

const ShareFour = defineComponent({
  name: 'ShareFour',
  props,
  render() {
    const $props = this.$props
    
    return h(
      <defs>
        <g id="ShareFour">
          <path d="M16.125 9.5H17.6875C18.1019 9.5 18.4993 9.66462 18.7924 9.95765C19.0854 10.2507 19.25 10.6481 19.25 11.0625V18.5625C19.25 18.9769 19.0854 19.3743 18.7924 19.6674C18.4993 19.9604 18.1019 20.125 17.6875 20.125H6.3125C5.8981 20.125 5.50067 19.9604 5.20765 19.6674C4.91462 19.3743 4.75 18.9769 4.75 18.5625V11.0625C4.75 10.6481 4.91462 10.2507 5.20765 9.95765C5.50067 9.66462 5.8981 9.5 6.3125 9.5H7.875M15.125 7L12 3.875M12 3.875L8.875 7M12 3.875V14.5391" stroke={$props.stroke} stroke-width={$props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/>
        </g>
      </defs>
    )
  }
})

export { ShareFour }
