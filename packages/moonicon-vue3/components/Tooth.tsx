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

const Tooth = defineComponent({
  name: 'Tooth',
  props,
  render() {
    const $props = this.$props
    
    return h(
      <defs>
        <g id="Tooth">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M7.64987 3.5H8.00394C9.86991 3.80863 10.3759 4.99343 12.002 4.99343C13.628 4.99343 14.1339 3.80871 16 3.5H16.201C18.2991 3.5 20 5.40279 20 7.75V8.03001C20 9.32863 18.7638 10.8115 18.4004 12.216C18.0144 13.7078 17.7499 14.9269 17.6723 16.2027C17.4904 19.1915 16.5795 20.5 15.6011 20.5C14.14 20.5 13.9923 14.8007 12.027 14.8007C10.0963 14.8007 9.59354 20.5 8.40292 20.5C7.67626 20.5 6.73494 20.0193 6.38152 16.2027C6.24091 14.6842 6.00389 13.7629 5.60362 12.216C5.25179 10.8564 4.06469 9.23128 4.00402 7.77286C3.91032 5.52028 5.46667 3.60924 7.48023 3.50442C7.53674 3.50148 7.59328 3.50001 7.64987 3.5Z" stroke={$props.stroke} stroke-width={$props.strokeWidth} stroke-linecap="round"/><path d="M15.9724 7.49448C14.6678 7.49448 13.8528 8.27792 11.6714 8.27795C9.84896 8.27795 8.85031 7.36556 7.467 7.36556" stroke={$props.stroke} stroke-width={$props.strokeWidth} stroke-linecap="round"/>
        </g>
      </defs>
    )
  }
})

export { Tooth }
