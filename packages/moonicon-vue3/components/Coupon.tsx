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

const Coupon = defineComponent({
  name: 'Coupon',
  props,
  render() {
    const $props = this.$props
    
    return h(
      <defs>
        <g id="Coupon">
          <path d="M12 10.9667V15.9667" stroke={$props.stroke} stroke-width={$props.strokeWidth} stroke-linecap="round"/><path d="M9.5 13.5361H14.5" stroke={$props.stroke} stroke-width={$props.strokeWidth} stroke-linecap="round"/><path d="M9.5 10.9667H14.5" stroke={$props.stroke} stroke-width={$props.strokeWidth} stroke-linecap="round"/><path d="M9.91669 8.46667L12 10.9766L14.0834 8.46667" stroke={$props.stroke} stroke-width={$props.strokeWidth} stroke-linecap="round"/><path d="M4.28354 10.1831C3.94797 9.92575 3.66669 9.56471 3.66669 9.14184V6.54999C3.66669 5.9977 4.1144 5.54999 4.66669 5.54999H19.3334C19.8856 5.54999 20.3334 5.9977 20.3334 6.54999V9.14185C20.3334 9.56471 20.0521 9.92575 19.7165 10.1831C19.1706 10.6016 18.8182 11.2635 18.8182 12.0083C18.8182 12.7532 19.1706 13.415 19.7165 13.8336C20.0521 14.0909 20.3334 14.4519 20.3334 14.8748V17.4667C20.3334 18.0189 19.8856 18.4667 19.3334 18.4667H4.66669C4.1144 18.4667 3.66669 18.0189 3.66669 17.4667V14.8748C3.66669 14.4519 3.94797 14.0909 4.28354 13.8336C4.82942 13.415 5.18184 12.7532 5.18184 12.0083C5.18184 11.2635 4.82942 10.6016 4.28354 10.1831Z" stroke={$props.stroke} stroke-width={$props.strokeWidth} stroke-linecap="round"/>
        </g>
      </defs>
    )
  }
})

export { Coupon }
  