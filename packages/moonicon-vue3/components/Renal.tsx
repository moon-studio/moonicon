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

const Renal = defineComponent({
  name: 'Renal',
  props,
  render() {
    const $props = this.$props
    
    return h(
      <defs>
        <g id="Renal">
          <path d="M15.619 20.3533C16.2282 18.5413 16.239 17.0135 16.023 15.7699C15.9396 15.2898 15.7882 14.8739 15.569 14.5222C15.1327 13.8223 14.3396 14.4764 14.3281 15.3011C14.3054 16.9293 13.5255 18.2397 12.417 19.092C10.1274 20.8524 5.16934 19.8594 4.87038 13.9046C4.57142 7.94974 6.80237 3.03657 11.6716 3.03656C14.6647 3.03656 15.8583 5.63242 15.2482 7.70413C14.984 8.60106 15.3275 10.2621 16.149 10.7087C17.3298 11.3505 18.1402 12.2248 18.5804 13.3315C19.2907 15.1176 19.346 17.4582 18.7463 20.3533" stroke={$props.stroke} stroke-width={$props.strokeWidth} stroke-linecap="round"/><path d="M8.44394 9.91808C9.77615 10.366 10.3433 10.9177 10.1453 11.573C9.94735 12.2284 9.21103 12.3878 7.93636 12.0513" stroke={$props.stroke} stroke-width={$props.strokeWidth} stroke-linecap="round"/><path d="M9.05646 7.369C11.062 8.74595 12.7083 8.62621 11.3912 5.78253" stroke={$props.stroke} stroke-width={$props.strokeWidth} stroke-linecap="round"/><path d="M8.35703 14.7289C9.81309 14.0888 10.7534 14.0028 11.1778 14.471C11.8146 15.1733 10.0272 16.7776 9.31944 17.083" stroke={$props.stroke} stroke-width={$props.strokeWidth} stroke-linecap="round"/>
        </g>
      </defs>
    )
  }
})

export { Renal }
