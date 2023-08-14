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

const Email = defineComponent({
  name: 'Email',
  props,
  render() {
    const $props = this.$props
    
    return h(
      <defs>
        <g id="Email">
          <path d="M19.4608 18.4415C20.0131 18.4415 20.4608 17.9937 20.4608 17.4415V6.52081C20.4608 5.96853 20.0131 5.52081 19.4608 5.52081H11.9729H4.48511C3.93282 5.52081 3.48511 5.96853 3.48511 6.52081V11.9811V17.4415C3.48511 17.9937 3.93282 18.4415 4.48511 18.4415H19.4608Z" stroke={$props.stroke} stroke-width={$props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/><path d="M3.90942 5.95148L11.374 11.5333C11.7291 11.7988 12.2166 11.7988 12.5717 11.5333L20.0363 5.95148" stroke={$props.stroke} stroke-width={$props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/>
        </g>
      </defs>
    )
  }
})

export { Email }
