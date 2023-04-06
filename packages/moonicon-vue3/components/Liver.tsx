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

const Liver = defineComponent({
  name: 'Liver',
  props,
  render() {
    const $props = this.$props
    
    return h(
      <defs>
        <g id="Liver">
          <path d="M8.34859 7.22539C7.55854 7.12558 5.99664 7.27983 5.22318 8.48547" stroke={$props.stroke} stroke-width={$props.strokeWidth} stroke-linecap="round"/><path d="M14.1631 19.3763V12.7235M14.1631 12.7235C14.1631 10.7674 11.2401 10.2784 9.77856 10.2784M14.1631 12.7235C14.1631 9.78933 16.4566 8.47587 17.5527 8.06834" stroke={$props.stroke} stroke-width={$props.strokeWidth} stroke-linecap="round"/><path d="M15.2639 7.32873C15.268 6.47525 15.2608 5.61948 15.9812 5.03765C17.1477 4.4948 20.6041 4.7116 21.5111 5.66113C22.1805 6.36218 22.0131 7.68764 21.1064 8.67819C19.5176 10.4146 17.6359 11.9091 16.5479 11.2201" stroke={$props.stroke} stroke-width={$props.strokeWidth} stroke-linecap="round"/><path d="M11.8068 12.5601C10.6596 13.5265 9.43198 14.2375 8.09959 14.9211C6.49206 15.7334 4.51911 15.4051 3.88199 13.6007C2.59347 9.9515 2.63578 7.41484 4.14815 6.00723C5.18629 5.04099 6.85401 4.6237 8.84947 4.6237C12.2954 4.6237 13.6228 5.21715 12.9732 8.81466" stroke={$props.stroke} stroke-width={$props.strokeWidth} stroke-linecap="round"/>
        </g>
      </defs>
    )
  }
})

export { Liver }
  