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

const IDCard = defineComponent({
  name: 'IDCard',
  props,
  render() {
    const $props = this.$props
    
    return h(
      <defs>
        <g id="IDCard">
          <path d="M19.4308 6H4.56918C4.11319 6 3.74353 6.33579 3.74353 6.75V17.25C3.74353 17.6642 4.11319 18 4.56918 18H19.4308C19.8868 18 20.2565 17.6642 20.2565 17.25V6.75C20.2565 6.33579 19.8868 6 19.4308 6Z" stroke={$props.stroke} stroke-width={$props.strokeWidth} stroke-linecap="round"/><path d="M9.08329 11.7606C10.0038 11.7606 10.75 11.0144 10.75 10.0939C10.75 9.17345 10.0038 8.42725 9.08329 8.42725C8.16283 8.42725 7.41663 9.17345 7.41663 10.0939C7.41663 11.0144 8.16283 11.7606 9.08329 11.7606Z" stroke={$props.stroke} stroke-width={$props.strokeWidth} stroke-linecap="round"/><path d="M11.5834 15.6868C11.5834 14.3301 10.4641 13.2302 9.08337 13.2302C7.70267 13.2302 6.58337 14.3301 6.58337 15.6868" stroke={$props.stroke} stroke-width={$props.strokeWidth} stroke-linecap="round"/><path d="M13.6665 10.0939H16.9998" stroke={$props.stroke} stroke-width={$props.strokeWidth} stroke-linecap="round"/><path d="M13.6666 13.2302H16.1666" stroke={$props.stroke} stroke-width={$props.strokeWidth} stroke-linecap="round"/>
        </g>
      </defs>
    )
  }
})

export { IDCard }
