import { defineComponent, h } from 'vue'
import type { PropType } from 'vue'
  
const props = {
  size: {
    type: [Number, String] as PropType<number | string>,
    default: '24'
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

const Male = defineComponent({
  name: 'Male',
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
        <path d="M20.9676 3.66395C20.9676 3.33274 20.6989 3.06424 20.3673 3.06424L14.9648 3.06424C14.6332 3.06424 14.3645 3.33274 14.3645 3.66395C14.3645 3.99517 14.6332 4.26367 14.9648 4.26367L19.767 4.26367L19.767 9.06138C19.767 9.39259 20.0358 9.66109 20.3673 9.66109C20.6989 9.66109 20.9676 9.39259 20.9676 9.06138L20.9676 3.66395ZM13.5548 11.3181L20.7918 4.08801L19.9429 3.23989L12.7059 10.47L13.5548 11.3181Z" fill="black"/><ellipse cx="9.23364" cy="14.7871" rx="5.56689" ry="5.56159" stroke={props.stroke} stroke-width={props.strokeWidth}/>
      </svg>
    )
  }
})

export default Male
