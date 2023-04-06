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

const ZoomOut = defineComponent({
  name: 'ZoomOut',
  props,
  render() {
    const $props = this.$props
    
    return h(
      <defs>
        <g id="ZoomOut">
          <path d="M15.8181 14.979L15.3938 14.5548L14.5453 15.4033L14.9695 15.8276L15.8181 14.979ZM19.9695 20.8276C20.2038 21.0619 20.5837 21.0619 20.8181 20.8276C21.0524 20.5932 21.0524 20.2133 20.8181 19.979L19.9695 20.8276ZM14.9695 15.8276L19.9695 20.8276L20.8181 19.979L15.8181 14.979L14.9695 15.8276Z" fill={$props.fill}/><path d="M7.5 10.5L13.5 10.5" stroke={$props.stroke} stroke-width={$props.strokeWidth} stroke-linecap="round"/><circle cx="10.5" cy="10.5" r="6.5" stroke={$props.stroke} stroke-width={$props.strokeWidth}/>
        </g>
      </defs>
    )
  }
})

export { ZoomOut }
  