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

const Nose = defineComponent({
  name: 'Nose',
  props,
  render() {
    const $props = this.$props
    
    return h(
      <defs>
        <g id="Nose">
          <path d="M8.91582 3.86667C9.00945 6.47084 8.8964 8.27767 8.5767 9.28717C8.17596 12.5499 4.95654 14.1203 4.95654 17.1691C4.95654 19.6036 7.0639 20.6955 8.48236 19.8578" stroke={$props.stroke} strokeWidth={$props.strokeWidth} stroke-linecap="round"/><path d="M16.2123 3.86667C16.1187 6.47084 16.2317 8.27767 16.5514 9.28717C16.9522 12.5499 20.1716 14.1203 20.1716 17.1691C20.1716 19.6036 18.0642 20.6955 16.6458 19.8578" stroke={$props.stroke} strokeWidth={$props.strokeWidth} stroke-linecap="round"/><path d="M17.4095 17.9726C16.6972 17.5675 16.0124 17.5675 15.4858 17.9726C14.6959 18.5803 14.4229 20.1 12.7344 20.1C11.046 20.1 10.4613 18.393 9.6476 17.9726C9.1051 17.6923 8.33177 17.6923 7.76315 17.9726" stroke={$props.stroke} strokeWidth={$props.strokeWidth} stroke-linecap="round"/><path d="M14.2265 11.6654C14.6722 12.138 15.1439 12.665 15.4882 13.5834C15.7493 14.2795 15.8014 14.6831 15.8375 15.1373" stroke={$props.stroke} strokeWidth={$props.strokeWidth} stroke-linecap="round"/>
        </g>
      </defs>
    )
  }
})

export { Nose }
