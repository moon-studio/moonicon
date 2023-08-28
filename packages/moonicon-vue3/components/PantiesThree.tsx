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

const PantiesThree = defineComponent({
  name: 'PantiesThree',
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
        <path d="M12.4999 16H11.4999C10.9477 16 10.5127 15.5466 10.4089 15.0042C9.86956 12.1862 7.0475 11.1381 4.99635 10.8872C4.44815 10.8202 3.99994 10.3758 3.99994 9.82353V9C3.99994 8.44772 4.44765 8 4.99994 8H18.9999C19.5522 8 19.9999 8.44771 19.9999 9V9.9579C19.9999 10.4548 19.6347 10.8729 19.1506 10.9849C17.1357 11.4512 14.2739 12.6748 13.6313 15.011C13.4849 15.5435 13.0522 16 12.4999 16Z" stroke={props.stroke} stroke-width={props.strokeWidth}/>
      </svg>
    )
  }
})

export default PantiesThree
