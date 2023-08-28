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

const SearchFoloder = defineComponent({
  name: 'SearchFoloder',
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
        <path d="M4.08337 5.33333C4.08337 4.8731 4.45647 4.5 4.91671 4.5H9.91671L12 7H19.0834C19.5436 7 19.9167 7.37308 19.9167 7.83333V18.6667C19.9167 19.1269 19.5436 19.5 19.0834 19.5H4.91671C4.45647 19.5 4.08337 19.1269 4.08337 18.6667V5.33333Z" stroke={props.stroke} stroke-width={props.strokeWidth} stroke-linejoin="round"/><path d="M14.5757 16.4243C14.8101 16.6586 15.1899 16.6586 15.4243 16.4243C15.6586 16.1899 15.6586 15.8101 15.4243 15.5757L14.5757 16.4243ZM11.1176 10.6C11.7692 10.6 12.1184 10.858 12.3248 11.1447C12.5533 11.462 12.6353 11.8607 12.6353 12.1176H13.8353C13.8353 11.6687 13.7055 11.0086 13.2987 10.4435C12.8698 9.84786 12.1603 9.4 11.1176 9.4V10.6ZM12.6353 12.1176C12.6353 12.7692 12.3773 13.1184 12.0906 13.3248C11.7733 13.5533 11.3746 13.6353 11.1176 13.6353V14.8353C11.5666 14.8353 12.2267 14.7055 12.7918 14.2987C13.3874 13.8698 13.8353 13.1603 13.8353 12.1176H12.6353ZM11.1176 13.6353C10.4661 13.6353 10.1169 13.3773 9.91045 13.0906C9.68201 12.7733 9.6 12.3746 9.6 12.1176H8.4C8.4 12.5666 8.52975 13.2267 8.93661 13.7918C9.36549 14.3874 10.075 14.8353 11.1176 14.8353V13.6353ZM9.6 12.1176C9.6 11.4661 9.85802 11.1169 10.1447 10.9105C10.462 10.682 10.8607 10.6 11.1176 10.6V9.4C10.6687 9.4 10.0086 9.52975 9.44353 9.93661C8.84786 10.3655 8.4 11.075 8.4 12.1176H9.6ZM12.4581 14.3066L14.5757 16.4243L15.4243 15.5757L13.3066 13.4581L12.4581 14.3066Z" fill="black"/>
      </svg>
    )
  }
})

export default SearchFoloder
