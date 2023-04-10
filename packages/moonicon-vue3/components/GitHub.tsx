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

const GitHub = defineComponent({
  name: 'GitHub',
  props,
  render() {
    const $props = this.$props
    
    return h(
      <defs>
        <g id="GitHub">
          <path d="M15.1111 21V18.503C15.1111 18.3056 15.0872 17.639 14.9431 17.2324C14.7991 16.8257 14.5715 16.4549 14.2756 16.1446C17.0667 15.8284 20 14.7531 20 9.81935C19.9998 8.55776 19.5224 7.34454 18.6667 6.43082C19.0719 5.32706 19.0432 4.10705 18.5867 3.02421C18.5867 3.02421 17.5378 2.70795 15.1111 4.36155C13.0738 3.80025 10.9263 3.80025 8.88894 4.36155C6.46228 2.70795 5.4134 3.02421 5.4134 3.02421C4.95684 4.10705 4.92819 5.32706 5.3334 6.43082C4.47129 7.35132 3.99342 8.5755 4.00007 9.84646C4.00007 14.744 6.93339 15.8193 9.72449 16.1717C9.43204 16.4789 9.2065 16.8453 9.06254 17.2469C8.91858 17.6486 8.85943 18.0766 8.88894 18.503V21" fill={$props.fill}/>
<path d="M9 19C4.5 20.5 4.7121 17.3488 3 17" stroke={$props.stroke} strokeWidth={$props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/>

        </g>
      </defs>
    )
  }
})

export { GitHub }
