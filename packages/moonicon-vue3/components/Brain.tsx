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

const Brain = defineComponent({
  name: 'Brain',
  props,
  render() {
    const $props = this.$props
    
    return h(
      <defs>
        <g id="Brain">
          <path d="M14.0683 20.3334C14.4766 19.0019 15.2424 18.0924 16.066 17.4386C17.3015 16.458 19.1147 16.9844 19.8398 15.9729C20.5649 14.9614 19.3317 13.1013 18.899 12.0038C18.899 12.0038 20.6964 10.929 20.3134 10.2066C20.0185 9.84756 19.2335 9.4658 17.5897 8.63474C17.3089 8.49275 17.115 8.22424 17.0421 7.9181C16.367 5.08388 14.3533 3.66677 11.0008 3.66677C5.68996 3.66677 3.66667 8.16925 3.66667 11.033C3.66667 13.8967 5.39052 15.9729 8.25634 17.1834C9.39269 17.6633 9.46859 18.997 8.25634 20.3334" stroke={$props.stroke} stroke-width={$props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/><path d="M11.8209 11.3498C13.1213 11.0468 15.1154 9.55762 14.4833 7.85844C14.144 6.94623 13.0833 6.16147 11.9769 6.27677C10.8705 6.39207 10.1773 5.82807 8.90984 6.59641C7.64233 7.36474 8.06404 8.05041 7.09399 8.52008C5.70839 9.19093 5.62403 10.8997 6.44646 11.9098C7.075 12.6819 7.89847 12.9607 9.12958 12.4721C9.8489 12.2556 11.0609 11.8913 11.8267 13.5667" stroke={$props.stroke} stroke-width={$props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/>
        </g>
      </defs>
    )
  }
})

export { Brain }
