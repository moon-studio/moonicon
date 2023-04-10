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

const ShareFive = defineComponent({
  name: 'ShareFive',
  props,
  render() {
    const $props = this.$props
    
    return h(
      <defs>
        <g id="ShareFive">
          <path d="M12.9 5.41421C12.9 4.52331 13.9771 4.07714 14.6071 4.70711L20.2724 10.3724C20.6708 10.7708 20.6616 11.4196 20.2519 11.8065L14.5866 17.1571C13.9489 17.7594 12.9 17.3073 12.9 16.4301V13.8C9.65946 13.8 7.13328 15.705 5.44394 17.5552C4.73243 18.3344 3.17113 17.8215 3.36649 16.7845C4.37324 11.4405 7.47312 7.95 12.9 7.95V5.41421Z" stroke={$props.stroke} strokeWidth={$props.strokeWidth} stroke-linecap="square" stroke-linejoin="round"/>

        </g>
      </defs>
    )
  }
})

export { ShareFive }
