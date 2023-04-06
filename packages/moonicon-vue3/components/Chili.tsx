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

const Chili = defineComponent({
  name: 'Chili',
  props,
  render() {
    const $props = this.$props
    
    return h(
      <defs>
        <g id="Chili">
          <path d="M4.64992 3.8667L6.31659 5.53337" stroke={$props.stroke} stroke-width={$props.strokeWidth} stroke-linecap="round"/><path d="M9.6499 6.36671C9.29482 5.28896 8.19921 4.98791 7.12146 5.34298C6.04371 5.69806 5.45783 6.8596 5.81291 7.93739C5.94229 8.3301 6.17875 8.65748 6.4792 8.89785" stroke={$props.stroke} stroke-width={$props.strokeWidth} stroke-linecap="round"/><path d="M13.33 9.11424C12.6434 6.77808 9.86212 5.81107 7.87432 7.21741C6.15545 8.43349 5.86695 10.8699 7.25428 12.4538L8.55857 13.943C10.7332 16.4258 13.4794 18.3422 16.5601 19.5266L18.0426 20.0966C18.3467 20.2135 18.689 20.1707 18.955 19.9826C19.4852 19.6074 19.5069 18.8282 18.9983 18.4242L17.8403 17.5045C16.1047 16.1259 14.8377 14.2445 14.2128 12.118L13.33 9.11424Z" stroke={$props.stroke} stroke-width={$props.strokeWidth} stroke-linecap="round"/>
        </g>
      </defs>
    )
  }
})

export { Chili }
  