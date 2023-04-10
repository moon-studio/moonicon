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

const ForwardMessageOne = defineComponent({
  name: 'ForwardMessageOne',
  props,
  render() {
    const $props = this.$props
    
    return h(
      <defs>
        <g id="ForwardMessageOne">
          <path d="M13.217 18.308C16.0933 18.0187 20.5 16.3355 20.5 11.1778C20.5 8.78521 18.8613 4 12.3066 4C9.57552 4 4.11328 5.43556 4.11328 11.1778C4.11328 12.9298 4.99188 15.9645 8.03574 17.4641C8.14076 17.5159 8.21082 17.6225 8.20604 17.7395C8.17005 18.6201 7.89222 19.3376 7.61187 19.824C7.47845 20.0555 7.64267 20.3986 7.90875 20.3744C10.0603 20.1786 11.122 19.1328 11.3963 18.5835" stroke={$props.stroke} strokeWidth={$props.strokeWidth} stroke-linecap="round"/>
<path d="M12.6975 7.11108L16.2538 10.5762L12.6975 13.8488V11.7312C9.93152 11.7312 8.74609 14.6188 8.74609 14.6188C8.74609 11.3462 9.73395 9.22864 12.6975 9.22864V7.11108Z" stroke={$props.stroke} strokeWidth={$props.strokeWidth} stroke-linecap="square" stroke-linejoin="round"/>

        </g>
      </defs>
    )
  }
})

export { ForwardMessageOne }
