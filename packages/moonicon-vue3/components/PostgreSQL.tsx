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

const PostgreSQL = defineComponent({
  name: 'PostgreSQL',
  props,
  render() {
    const $props = this.$props
    
    return h(
      <defs>
        <g id="PostgreSQL">
          <path d="M7.88977 10.9668V7.76685C7.88977 5.55771 9.68063 3.76685 11.8898 3.76685H12.8898C15.0989 3.76685 16.8898 5.55771 16.8898 7.76685V18.0168C16.8898 19.5356 15.6586 20.7668 14.1398 20.7668C12.621 20.7668 11.3898 19.5356 11.3898 18.0168V14.4668C11.3898 14.0802 11.0764 13.7668 10.6898 13.7668C9.14337 13.7668 7.88977 12.5132 7.88977 10.9668Z" stroke={$props.stroke} strokeWidth={$props.strokeWidth} stroke-linejoin="round"/><path d="M7.88977 8.17392C10.3657 6.9287 11.8512 8.27644 11.8512 10.0988C11.8512 11.9211 11.3366 12.7943 10.4556 13.7329" stroke={$props.stroke} strokeWidth={$props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/><path d="M9.68333 4.40322C8.68333 3.40322 7.48701 3.23316 6.48701 3.23316C4.31791 3.23316 2.16431 4.73322 2.16431 7.54246V10.9561C2.16431 14.2509 4.38232 16.0083 6.54016 16.0083C8.40208 16.0083 9.68333 15.1038 10.488 13.7497M15.1451 4.40322C15.8278 3.64863 16.5586 3.23315 17.9221 3.23315C19.8483 3.23315 21.8357 4.40322 21.8357 7.54246C21.8357 8.47858 21.8357 9.56379 21.8357 10.6259C21.8357 13.2504 19.5957 15.3159 16.9799 15.1038V15.1038" stroke={$props.stroke} strokeWidth={$props.strokeWidth} stroke-linejoin="round"/>
        </g>
      </defs>
    )
  }
})

export { PostgreSQL }
