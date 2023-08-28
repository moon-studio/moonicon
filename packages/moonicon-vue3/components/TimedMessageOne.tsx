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

const TimedMessageOne = defineComponent({
  name: 'TimedMessageOne',
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
        <path d="M13.3889 17.9535C16.1973 17.6714 20.5 16.0299 20.5 11C20.5 8.66667 18.9 4 12.5 4C9.83333 4 4.5 5.4 4.5 11C4.5 12.7077 5.35706 15.6654 8.32571 17.1285C8.43076 17.1803 8.50088 17.287 8.49597 17.404C8.46041 18.251 8.19523 18.943 7.92513 19.4162C7.79262 19.6483 7.95763 19.992 8.22374 19.9671C10.3126 19.7721 11.344 18.7564 11.6111 18.2222" stroke={props.stroke} stroke-width={props.strokeWidth} stroke-linecap="round"/><path d="M12.5 11H11.9C11.9 11.3314 12.1686 11.6 12.5 11.6V11ZM14.2485 11.6C14.5799 11.6 14.8485 11.3314 14.8485 11C14.8485 10.6686 14.5799 10.4 14.2485 10.4V11.6ZM13.1 9.25146C13.1 8.92009 12.8314 8.65146 12.5 8.65146C12.1686 8.65146 11.9 8.92009 11.9 9.25146H13.1ZM12.5 8.10293C13.7033 8.10293 14.3974 8.59086 14.8107 9.16491C15.2461 9.76957 15.3971 10.5132 15.3971 11H16.5971C16.5971 10.3211 16.3983 9.31621 15.7846 8.46375C15.1488 7.58069 14.0944 6.90293 12.5 6.90293V8.10293ZM15.3971 11C15.3971 12.2033 14.9091 12.8974 14.3351 13.3107C13.7304 13.7461 12.9868 13.8971 12.5 13.8971V15.0971C13.1789 15.0971 14.1838 14.8983 15.0363 14.2846C15.9193 13.6488 16.5971 12.5944 16.5971 11H15.3971ZM12.5 13.8971C11.2967 13.8971 10.6026 13.4091 10.1893 12.8351C9.75391 12.2304 9.60293 11.4868 9.60293 11H8.40293C8.40293 11.6789 8.60165 12.6838 9.21542 13.5363C9.85122 14.4193 10.9056 15.0971 12.5 15.0971V13.8971ZM9.60293 11C9.60293 9.79672 10.0909 9.10259 10.6649 8.68926C11.2696 8.25391 12.0132 8.10293 12.5 8.10293V6.90293C11.8211 6.90293 10.8162 7.10165 9.96375 7.71542C9.08069 8.35122 8.40293 9.40562 8.40293 11H9.60293ZM12.5 11.6H14.2485V10.4H12.5V11.6ZM13.1 11V9.25146H11.9V11H13.1Z" fill="black"/>
      </svg>
    )
  }
})

export default TimedMessageOne
