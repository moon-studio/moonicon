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

const BucketHat = defineComponent({
  name: 'BucketHat',
  props,
  render() {
    const $props = this.$props
    
    return h(
      <defs>
        <g id="BucketHat">
          <path d="M5.74994 8.66668C5.74994 6.82572 7.24231 5.33334 9.08327 5.33334H14.9166C16.7576 5.33334 18.2499 6.82572 18.2499 8.66668V15.3333H5.74994V8.66668Z" stroke={$props.stroke} strokeWidth={$props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/>
<path d="M19.5 15.3333H4.50002C4.03978 15.3333 3.66669 15.7064 3.66669 16.1667V17.8333C3.66669 18.2936 4.03978 18.6667 4.50002 18.6667H19.5C19.9603 18.6667 20.3334 18.2936 20.3334 17.8333V16.1667C20.3334 15.7064 19.9603 15.3333 19.5 15.3333Z" stroke={$props.stroke} strokeWidth={$props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6.44427 12H9.77761" stroke={$props.stroke} strokeWidth={$props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/>
<path d="M14.2221 8.66669H17.5554" stroke={$props.stroke} strokeWidth={$props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/>

        </g>
      </defs>
    )
  }
})

export { BucketHat }
