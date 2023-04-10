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

const Elasticsearch = defineComponent({
  name: 'Elasticsearch',
  props,
  render() {
    const $props = this.$props
    
    return h(
      <defs>
        <g id="Elasticsearch">
          <path d="M5.28751 14C5.09982 13.3608 5 12.6906 5 12C5 11.3094 5.09982 10.6392 5.2875 10H14.5417C15.6462 10 16.5417 10.8954 16.5417 12C16.5417 13.1046 15.6462 14 14.5417 14H5.28751Z" stroke={$props.stroke} strokeWidth={$props.strokeWidth} stroke-linejoin="round"/>
<path d="M19.0401 5.26372C18.2867 6.31501 17.0547 7 15.6626 7H6.07361C7.31949 4.71284 10.0615 3.12445 13.2439 3.12445C15.5358 3.12445 17.5994 3.94831 19.0401 5.26372Z" stroke={$props.stroke} strokeWidth={$props.strokeWidth} stroke-linejoin="round"/>
<path d="M19.0253 18.8061C17.5852 20.1556 15.528 21 13.244 21C10.0617 21 7.31962 19.3606 6.07373 17H15.5293C16.9722 17 18.2486 17.7131 19.0253 18.8061Z" stroke={$props.stroke} strokeWidth={$props.strokeWidth} stroke-linejoin="round"/>

        </g>
      </defs>
    )
  }
})

export { Elasticsearch }
