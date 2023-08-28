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

const Handbag = defineComponent({
  name: 'Handbag',
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
        <path d="M15.3334 8.96243C15.3334 6.29738 13.841 3.69824 12 3.69824C10.1591 3.69824 8.66669 6.29738 8.66669 8.96243" stroke={props.stroke} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/><path d="M12.0001 12.9108H13.504C13.8166 12.9108 14.1111 13.0569 14.3002 13.3058L14.7 13.8318C14.8891 14.0807 15.1836 14.2268 15.4962 14.2268H18.6668L18.323 9.88374C18.2818 9.36368 17.8478 8.96265 17.3261 8.96265H6.67408C6.15239 8.96265 5.71836 9.36368 5.6772 9.88374L5.33344 14.2268H8.50401C8.81656 14.2268 9.11113 14.0807 9.30023 13.8318L9.69996 13.3058C9.88905 13.0569 10.1836 12.9108 10.4962 12.9108H12.0001ZM12.0001 12.9108V15.6306" stroke={props.stroke} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/><path d="M5.33327 14.2268L4.65387 19.2339C4.57243 19.8341 5.03907 20.3684 5.64479 20.3684H18.3551C18.9608 20.3684 19.4274 19.8341 19.346 19.2339L18.6666 14.2268" stroke={props.stroke} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    )
  }
})

export default Handbag
