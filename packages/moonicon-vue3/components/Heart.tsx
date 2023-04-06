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

const Heart = defineComponent({
  name: 'Heart',
  props,
  render() {
    const $props = this.$props
    
    return h(
      <defs>
        <g id="Heart">
          <path d="M15.0602 4.53608L14.6353 2.79138" stroke={$props.stroke} stroke-width={$props.strokeWidth} stroke-linecap="round"/><path d="M13.6217 6.31068C14.9162 4.6839 16.0144 3.77027 17.6024 3.20468" stroke={$props.stroke} stroke-width={$props.strokeWidth} stroke-linecap="round"/><path d="M12.0375 3.40738V5.66482" stroke={$props.stroke} stroke-width={$props.strokeWidth} stroke-linecap="round"/><path d="M5.14837 8.50319C5.10332 8.48808 5.05833 8.4734 5.0134 8.45913C4.42031 8.27088 4.02996 7.64572 4.22318 7.05423L4.37876 6.57797C4.5897 5.93225 5.26517 5.54919 5.91158 5.75801C5.97578 5.77875 6.04078 5.80021 6.10705 5.82253M5.14837 8.50319C7.06868 9.14715 9.51971 10.7935 10.8636 12.3222C11.3162 12.837 12.167 12.9703 12.6583 12.4924L13.0832 12.0791C13.4987 11.6749 13.6021 11.0392 13.2472 10.581C11.8762 8.81066 9.09282 6.8285 6.10705 5.82253M5.14837 8.50319C5.47462 8.61948 6.33616 8.67201 6.72053 7.71877C7.13689 6.68621 6.56732 5.97035 6.10705 5.82253" stroke={$props.stroke} stroke-width={$props.strokeWidth} stroke-linecap="round"/><path d="M15.8981 14.1528C16.1059 11.5518 15.9267 8.41672 15.3807 7.6305C14.5617 6.45123 13.0399 6.00409 11.6071 6.00409C10.7539 6.00409 9.97482 6.36745 9.26971 7.09418" stroke={$props.stroke} stroke-width={$props.strokeWidth} stroke-linecap="round" stroke-linejoin="bevel"/><path d="M17.6138 9.45022C18.3443 8.33748 18.9162 7.47434 19.3296 6.86077C19.9497 5.94043 18.364 4.75096 17.6138 5.56014C17.1137 6.0996 16.4493 6.89414 15.6206 7.94378" stroke={$props.stroke} stroke-width={$props.strokeWidth} stroke-linecap="round"/><path d="M16.0955 10.3003C16.8194 9.4101 17.4991 9.219 18.1348 9.72696C19.0882 10.4889 19.3621 13.1446 18.5948 15.4863C17.8275 17.8279 16.3356 21.0168 13.3237 21.0168C10.3118 21.0168 8.89964 17.426 7.67091 15.4863C6.44219 13.5465 6.46655 12.2356 7.67091 9.90506" stroke={$props.stroke} stroke-width={$props.strokeWidth} stroke-linecap="round" stroke-linejoin="bevel"/>
        </g>
      </defs>
    )
  }
})

export { Heart }
  