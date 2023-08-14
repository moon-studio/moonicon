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

const Overcoat = defineComponent({
  name: 'Overcoat',
  props,
  render() {
    const $props = this.$props
    
    return h(
      <defs>
        <g id="Overcoat">
          <path d="M6.68487 6.72006C6.78562 6.37756 7.0665 6.12435 7.39136 5.97628C8.34805 5.54021 9.12085 4.66102 9.53057 4.12204C9.74035 3.84606 10.0614 3.66663 10.4081 3.66663H13.5709C13.9238 3.66663 14.2497 3.85253 14.4591 4.13649C14.8636 4.68494 15.6231 5.56942 16.5643 5.98285C16.9064 6.1331 17.209 6.39166 17.3145 6.7501L19.3395 13.6344C19.5279 14.2749 19.0477 14.9166 18.3801 14.9166H17.2849C16.7326 14.9166 16.2849 15.3643 16.2849 15.9166V20.3333C16.2849 20.8856 15.8372 21.3333 15.2849 21.3333H8.70559C8.15331 21.3333 7.70559 20.8856 7.70559 20.3333V15.9166C7.70559 15.3643 7.25788 14.9166 6.70559 14.9166H5.61038C4.94276 14.9166 4.46262 14.2749 4.65102 13.6344L6.68487 6.72006Z" stroke={$props.stroke} stroke-width={$props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/><path d="M9.93622 4L11.0587 6.9984C11.3829 7.86426 12.6076 7.86427 12.9318 6.99841L14.0543 4" stroke={$props.stroke} stroke-width={$props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/><path d="M11.9953 8V21.113" stroke={$props.stroke} stroke-width={$props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/>
        </g>
      </defs>
    )
  }
})

export { Overcoat }
