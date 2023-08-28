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

const HeavySnow = defineComponent({
  name: 'HeavySnow',
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
        <path d="M7.34994 15.4V15.4C7.34994 15.3982 7.34848 15.3967 7.34664 15.3966C5.48477 15.3131 3.99994 13.7169 3.99994 11.76C3.99994 9.74968 5.56694 8.12 7.49994 8.12V8.12C7.91682 8.12 8.32059 7.89141 8.50747 7.51877C9.25816 6.02192 10.7643 5 12.4999 5C14.8072 5 16.7089 6.8059 16.9695 9.13273C16.9712 9.14823 16.9843 9.16007 16.9999 9.16V9.16C18.6568 9.16 19.9999 10.5569 19.9999 12.28C19.9999 13.9502 18.7381 15.3138 17.1518 15.3961C17.1508 15.3961 17.1499 15.397 17.1499 15.398V15.398C17.1499 15.3991 17.1491 15.4 17.148 15.4H16.9999" stroke={props.stroke} stroke-width={props.strokeWidth} stroke-linecap="round"/><path d="M10.9775 14.4766L13.4353 13.0576M13.4353 14.4766L10.9776 13.0576M12.2065 12.3481L12.2065 15.1861M8.53611 18.1427L10.9938 16.7238M10.9939 18.1427L8.53613 16.7237M9.76511 16.0142L9.7651 18.8522M13.2514 18.1427L15.7092 16.7238M15.7092 18.1427L13.2515 16.7237M14.4804 16.0142L14.4804 18.8522" stroke={props.stroke} stroke-width={props.strokeWidth} stroke-linecap="round"/>
      </svg>
    )
  }
})

export default HeavySnow
