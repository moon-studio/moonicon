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

const Twitter = defineComponent({
  name: 'Twitter',
  props,
  render() {
    const $props = this.$props
    
    return h(
      <defs>
        <g id="Twitter">
          <path d="M19.9525 7.98316C19.9525 7.98316 19.9647 8.33034 19.9647 8.50553C19.9647 13.8436 15.8371 20 8.28966 20V19.9968C6.06013 20 3.8769 19.3712 2 18.1857C4.14651 18.4399 6.3602 17.8356 8.07272 16.5114C6.31688 16.4786 4.6626 14.9188 4.23928 13.706C4.85436 13.8228 6.09181 13.6364 6.09181 13.6364C4.76797 12.8173 2.80033 11.3499 2.80033 9.62545C3.37071 9.93824 4.00934 10.1118 4.6626 10.131C2.85964 8.9447 2.30388 6.58325 3.39265 4.73696C5.47593 7.2608 8.54967 8.79511 11.8493 8.9575C11.5186 7.55439 11.9703 6.08408 13.0364 5.09774C14.689 3.56824 17.2882 3.64663 18.8418 5.27293C19.7607 5.09454 20.6415 4.76256 21.4475 4.29219C21.1412 5.22733 20.5001 6.02168 19.6437 6.52645C20.457 6.43206 21.2517 6.21767 22 5.89049C21.4491 6.70324 20.7552 7.41119 19.9525 7.98316Z" fill={$props.fill}/>

        </g>
      </defs>
    )
  }
})

export { Twitter }
