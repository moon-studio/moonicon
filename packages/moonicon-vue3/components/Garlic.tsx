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

const Garlic = defineComponent({
  name: 'Garlic',
  props,
  render() {
    const $props = this.$props
    
    return h(
      <defs>
        <g id="Garlic">
          <path d="M10.7968 10.7682C10.7968 12.5856 9.49994 13.05 9.08331 15.1333C8.65644 17.268 10.4425 19.3 12.6251 19.3C14.8077 19.3 16.5836 17.3103 16.5833 15.1333C16.5833 13.2127 15.5748 12.1795 14.6264 11.3631C13.6781 10.5467 13.1991 9.79894 13.0479 9.04304" stroke={$props.stroke} strokeWidth={$props.strokeWidth} stroke-linecap="round" stroke-linejoin="bevel"/><path d="M8.0087 11.3016C7.18781 11.8278 6.3618 12.7534 6.19703 14.4012C6.00857 16.2858 7.29161 19.0917 12.4999 19.3" stroke={$props.stroke} strokeWidth={$props.strokeWidth} stroke-linecap="round"/><path d="M14.9162 18.4795C18.1858 18.4795 20.3329 17.1149 20.3329 14.3C20.3329 11.4851 16.9995 9.71667 16.1662 9.30001C15.3329 8.88334 14.9162 8.06988 14.9162 7.21667V5.55001C14.9162 4.9749 14.658 4.71667 14.0829 4.71667H10.3329C9.85767 4.71667 9.49955 5.13334 9.49955 5.55001V6.80001C9.49955 7.65459 8.97071 8.3303 8.21317 8.70772C6.2492 9.68802 3.81247 11.356 3.53748 13.8703C3.25339 16.4677 5.10975 18.6162 7.97832 18.1054" stroke={$props.stroke} strokeWidth={$props.strokeWidth} stroke-linecap="round"/>
        </g>
      </defs>
    )
  }
})

export { Garlic }
