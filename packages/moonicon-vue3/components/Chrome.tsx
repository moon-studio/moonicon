import { defineComponent, h } from 'vue'
import type { PropType } from 'vue'
  
const props = {
  size: {
    type: [Number, String] as PropType<number | string>,
    default: '24'
  },
  // fill color
  fill: {
    type: String as PropType<string>,
    default: '#fff'
  }
}

const Chrome = defineComponent({
  name: 'Chrome',
  props,
  setup(props) {
    return () => (
      <svg
        width={props.size}
        height={props.size}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path d="M7.044 10.721L4.183 5.764C6.015 3.47 8.836 2 12 2C15.661 2 18.861 3.967 20.604 6.902H12.444C12.298 6.889 12.15 6.883 12 6.883C9.619 6.883 7.614 8.516 7.044 10.721ZM15.58 8.348H21.312C21.756 9.479 22 10.711 22 12C22 17.485 17.584 21.938 12.114 21.999L16.203 14.915C16.779 14.088 17.117 13.083 17.117 12C17.118 10.571 16.528 9.277 15.58 8.348ZM8.367 12C8.367 9.997 9.996 8.367 12 8.367C14.004 8.367 15.633 9.996 15.633 12C15.633 14.004 14.003 15.633 12 15.633C9.997 15.633 8.367 14.003 8.367 12ZM13.371 16.931L10.509 21.89C5.693 21.169 2 17.016 2 12C2 10.218 2.466 8.546 3.283 7.097L7.366 14.169C8.184 15.909 9.954 17.118 12 17.118C12.474 17.118 12.934 17.052 13.371 16.931Z" fill={props.fill}/>
      </svg>
    )
  }
})

export default Chrome
