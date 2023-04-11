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

const Collect = defineComponent({
  name: 'Collect',
  props,
  render() {
    const $props = this.$props
    
    return h(
      <defs>
        <g id="Collect">
          <path d="M12.0516 5.20848C12.235 4.83686 12.765 4.83686 12.9484 5.20848L14.8818 9.12594C14.9546 9.27352 15.0954 9.3758 15.2582 9.39947L19.5814 10.0277C19.9915 10.0873 20.1553 10.5912 19.8585 10.8805L16.7302 13.9298C16.6124 14.0447 16.5586 14.2102 16.5864 14.3724L17.3249 18.6781C17.395 19.0866 16.9663 19.398 16.5994 19.2052L12.7327 17.1723C12.587 17.0957 12.413 17.0957 12.2673 17.1723L8.40056 19.2052C8.03375 19.398 7.60503 19.0866 7.67509 18.6781L8.41357 14.3724C8.44139 14.2102 8.38762 14.0447 8.26978 13.9298L5.14149 10.8805C4.84473 10.5912 5.00849 10.0873 5.4186 10.0277L9.74178 9.39947C9.90463 9.3758 10.0454 9.27352 10.1182 9.12594L12.0516 5.20848Z" stroke={$props.stroke} strokeWidth={$props.strokeWidth} stroke-linejoin="round"/>
        </g>
      </defs>
    )
  }
})

export { Collect }
