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

const Germs = defineComponent({
  name: 'Germs',
  props,
  render() {
    const $props = this.$props
    
    return h(
      <defs>
        <g id="Germs">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M12 20.3334C11.4435 20.3334 11.0151 18.7708 10.4891 18.6668C9.94722 18.5596 9.30884 19.9079 8.81026 19.7012C8.30297 19.4908 8.4978 18.1945 8.04693 17.8927C7.59247 17.5884 6.49276 18.278 6.10747 17.8927C5.72218 17.5074 6.72339 16.2046 6.41914 15.7501C6.11726 15.2992 4.5093 15.6972 4.29897 15.1899C4.09222 14.6913 5.67543 13.7139 5.56826 13.172C5.46418 12.646 3.66668 12.5566 3.66668 12.0001C3.66668 11.4436 5.2293 10.8998 5.33334 10.3738C5.44055 9.83193 4.09222 9.30893 4.29897 8.81035C4.5093 8.30305 6.11726 8.70101 6.41914 8.2501C6.72339 7.79568 5.72218 6.49285 6.10747 6.10756C6.49276 5.72226 7.79555 6.56214 8.25001 6.25793C8.70093 5.95606 8.30297 4.50942 8.81026 4.29906C9.30884 4.09232 10.2081 5.2936 10.75 5.18641C11.276 5.08235 11.4435 3.66678 12 3.66678C12.5566 3.66678 12.7833 5.08235 13.3093 5.18641C13.8512 5.2936 14.6912 4.09232 15.1898 4.29906C15.6971 4.50942 15.2991 5.8057 15.75 6.10756C16.2045 6.4118 17.5073 5.72226 17.8926 6.10756C18.2779 6.49285 17.198 7.79568 17.5022 8.2501C17.8041 8.70101 19.4907 8.30305 19.7011 8.81035C19.9078 9.30893 18.5595 10.0165 18.6667 10.5583C18.7707 11.0843 20.3333 11.4436 20.3333 12.0001C20.3333 12.5566 18.6262 12.8031 18.5221 13.3291C18.4149 13.8709 19.9078 14.6913 19.7011 15.1899C19.4907 15.6972 17.9139 15.2992 17.612 15.7501C17.3078 16.2046 18.2779 17.5074 17.8926 17.8927C17.5073 18.278 16.2045 17.3563 15.75 17.6605C15.2991 17.9623 15.6971 19.4908 15.1898 19.7012C14.6912 19.9079 13.8512 18.5596 13.3093 18.6668C12.7833 18.7708 12.5566 20.3334 12 20.3334Z" stroke={$props.stroke} strokeWidth={$props.strokeWidth} stroke-linejoin="bevel"/>
<path d="M9.91668 14.0834C8.99622 14.0834 8.25001 13.3373 8.25001 12.4168C8.25001 11.4963 8.99622 10.7501 9.91668 10.7501C10.8371 10.7501 11.5833 11.4963 11.5833 12.4168C11.5833 13.3373 10.8371 14.0834 9.91668 14.0834Z" stroke={$props.stroke} strokeWidth={$props.strokeWidth} stroke-linejoin="bevel"/>
<path d="M14.6067 9.51019H14.6167" stroke={$props.stroke} strokeWidth={$props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/>
<path d="M13.8606 15.4117H13.8706" stroke={$props.stroke} strokeWidth={$props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/>
<path d="M15.9971 14.0834H16.0071" stroke={$props.stroke} strokeWidth={$props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/>

        </g>
      </defs>
    )
  }
})

export { Germs }
