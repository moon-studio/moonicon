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

const Tomato = defineComponent({
  name: 'Tomato',
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
        <path d="M16.2022 5.92883C18.553 6.9394 20.4045 9.3804 20.4045 12.7025C20.4045 17.6449 16.6417 20.402 11.9999 20.402C7.35818 20.402 3.5953 17.2613 3.5953 12.7025C3.5953 9.22399 5.44135 7.07889 7.68698 6.1955" stroke={props.stroke} stroke-width={props.strokeWidth} stroke-linecap="square" stroke-linejoin="round"/><path d="M12.4042 3.31817C12.2045 3.04375 11.7953 3.04375 11.5956 3.31818L10.5323 4.7796C10.4478 4.89572 10.3174 4.96991 10.1744 4.98326L8.05169 5.18143C7.59451 5.22411 7.43179 5.80878 7.80119 6.08151L9.13383 7.0654C9.30028 7.1883 9.37385 7.40102 9.31888 7.60049L8.90102 9.1168C8.79206 9.51218 9.17923 9.86336 9.56214 9.71647L11.8208 8.84995C11.9361 8.80572 12.0637 8.80572 12.179 8.84995L14.4377 9.71647C14.8206 9.86337 15.2078 9.5122 15.0988 9.11682L14.681 7.60048C14.626 7.40102 14.6996 7.1883 14.866 7.06541L16.1987 6.08151C16.5681 5.80878 16.4053 5.22411 15.9482 5.18143L13.8255 4.98326C13.6825 4.96991 13.5521 4.89572 13.4676 4.77961L12.4042 3.31817Z" stroke={props.stroke} stroke-width={props.strokeWidth} stroke-linecap="square"/>
      </svg>
    )
  }
})

export default Tomato
