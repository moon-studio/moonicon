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

const BulletinBoard = defineComponent({
  name: 'BulletinBoard',
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
        <path d="M19.556 8.09863H4.4422C3.97847 8.09863 3.60254 8.48742 3.60254 8.96701V18.5191C3.60254 18.9987 3.97847 19.3875 4.4422 19.3875H19.556C20.0198 19.3875 20.3957 18.9987 20.3957 18.5191V8.96701C20.3957 8.48742 20.0198 8.09863 19.556 8.09863Z" stroke={props.stroke} stroke-width={props.strokeWidth} stroke-linejoin="round"/><path d="M12.6734 4.61326C12.2917 4.2657 11.7083 4.2657 11.3267 4.61326L7.5 8.09844H16.5L12.6734 4.61326Z" stroke={props.stroke} stroke-width={props.strokeWidth} stroke-linecap="square" stroke-linejoin="round"/><path d="M6.96118 12.0063H14.5181" stroke={props.stroke} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/><path d="M6.96118 15.4795H10.3198" stroke={props.stroke} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    )
  }
})

export default BulletinBoard
