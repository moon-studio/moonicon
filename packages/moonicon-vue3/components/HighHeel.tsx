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

const HighHeel = defineComponent({
  name: 'HighHeel',
  props,
  render() {
    const $props = this.$props
    
    return h(
      <defs>
        <g id="HighHeel">
          <path d="M9.82427 9.98968C9.08256 8.19341 7.43141 6.56964 6.26908 5.42223C5.93619 5.09361 5.40748 5.01169 5.02877 5.28625C4.39186 5.748 3.6044 6.54632 3.6044 7.85109C3.6044 9.56196 4.21497 10.8926 4.86373 11.2728L7.37706 13.0654C8.48757 13.8575 9.42191 14.879 10.1193 16.0633L11.2901 18.0515C11.4698 18.3567 11.7976 18.544 12.1518 18.544H19.3954C19.9477 18.544 20.3954 18.0963 20.3954 17.544V17.4196C20.3954 17.0575 20.2005 16.7242 19.8889 16.5397C18.7568 15.869 16.7341 14.6031 15.4623 13.7628C15.1403 13.55 14.7297 13.5488 14.3695 13.6874C11.8072 14.6732 10.4836 11.5864 9.82427 9.98968Z" stroke={$props.stroke} strokeWidth={$props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/>
<path d="M4.44403 11.1873V18.8862" stroke={$props.stroke} strokeWidth={$props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/>

        </g>
      </defs>
    )
  }
})

export { HighHeel }
