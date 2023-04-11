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

const Cherry = defineComponent({
  name: 'Cherry',
  props,
  render() {
    const $props = this.$props
    
    return h(
      <defs>
        <g id="Cherry">
          <path d="M16.5855 19.5662C14.7467 19.5662 13.256 18.0606 13.256 16.2035C13.256 14.3463 14.7467 12.8408 16.5855 12.8408C18.4243 12.8408 19.915 14.3463 19.915 16.2035C19.915 18.0606 18.4243 19.5662 16.5855 19.5662Z" stroke={$props.stroke} strokeWidth={$props.strokeWidth} stroke-linecap="square" stroke-linejoin="round"/><path d="M7.84561 20.4068C6.23664 20.4068 4.93231 19.0895 4.93231 17.4645C4.93231 15.8394 6.23664 14.5221 7.84561 14.5221C9.45458 14.5221 10.7589 15.8394 10.7589 17.4645C10.7589 19.0895 9.45458 20.4068 7.84561 20.4068Z" stroke={$props.stroke} strokeWidth={$props.strokeWidth} stroke-linecap="square" stroke-linejoin="round"/><path d="M7.42949 6.1153C8.53288 6.45644 10.4977 7.38241 11.8914 8.747C13.982 10.7938 14.5047 12.2102 14.9208 13.2611" stroke={$props.stroke} strokeWidth={$props.strokeWidth} stroke-linecap="square"/><path d="M7.01324 6.53564C7.47795 7.08984 8.38047 8.04714 8.6599 9.64157C9.07904 12.0332 8.67794 13.0509 8.2618 14.1017" stroke={$props.stroke} strokeWidth={$props.strokeWidth} stroke-linecap="square"/><path d="M9.92657 3.59326L4.09997 8.63733" stroke={$props.stroke} strokeWidth={$props.strokeWidth} stroke-linecap="round"/>
        </g>
      </defs>
    )
  }
})

export { Cherry }
