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

const CloudyTwo = defineComponent({
  name: 'CloudyTwo',
  props,
  render() {
    const $props = this.$props
    
    return h(
      <defs>
        <g id="CloudyTwo">
          <path d="M2.99994 13.8C2.99994 16.0586 4.67136 17.9008 6.76683 17.9961C6.76786 17.9962 6.76869 17.997 6.76869 17.9981C6.76869 17.9991 6.76955 18 6.77062 18L12.5624 17.9956L17.7914 18C17.7927 18 17.7937 17.999 17.7937 17.9977C17.7937 17.9965 17.7946 17.9955 17.7958 17.9955C19.5804 17.9005 20.9999 16.3271 20.9999 14.4C20.9999 12.4118 19.4889 10.8 17.6249 10.8C17.6074 10.8001 17.5927 10.7867 17.5908 10.7693C17.298 8.08414 15.1584 6 12.5624 6C10.6038 6 8.90494 7.18645 8.06309 8.92234C7.85904 9.34308 7.40505 9.6 6.93744 9.6C4.76282 9.6 2.99994 11.4804 2.99994 13.8Z" stroke={$props.stroke} strokeWidth={$props.strokeWidth} stroke-linecap="round"/>
        </g>
      </defs>
    )
  }
})

export { CloudyTwo }
