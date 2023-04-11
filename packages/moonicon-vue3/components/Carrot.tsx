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

const Carrot = defineComponent({
  name: 'Carrot',
  props,
  render() {
    const $props = this.$props
    
    return h(
      <defs>
        <g id="Carrot">
          <path d="M16.3541 10.3971C16.9597 7.93214 14.5383 5.68011 12 5.68011C9.46161 5.68011 7.04018 7.93209 7.64577 10.3971L10.5129 19.9352C10.6811 20.6198 11.295 21.1011 12 21.1011C12.7049 21.1011 13.3188 20.6198 13.487 19.9352L16.3541 10.3971Z" stroke={$props.stroke} strokeWidth={$props.strokeWidth}/><path d="M12.0053 2.22198L12.0053 5.61532" stroke={$props.stroke} strokeWidth={$props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/><path d="M8.59518 3.60535L10.1254 6.00738" stroke={$props.stroke} strokeWidth={$props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/><path d="M15.3588 3.60535L13.8083 5.96752" stroke={$props.stroke} strokeWidth={$props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/><path d="M15.9443 9.16215H16.5443V10.3621H15.9443V9.16215ZM13.223 10.3621C12.8916 10.3621 12.623 10.0935 12.623 9.76215C12.623 9.43078 12.8916 9.16215 13.223 9.16215V10.3621ZM15.9443 10.3621H13.223V9.16215H15.9443V10.3621Z" fill={$props.fill}/><path d="M11.2593 12.3371C11.5906 12.3371 11.8593 12.6058 11.8593 12.9371C11.8593 13.2685 11.5906 13.5371 11.2593 13.5371V12.3371ZM8.99148 13.5371H8.39148V12.3371H8.99148V13.5371ZM11.2593 13.5371H8.99148V12.3371H11.2593V13.5371Z" fill={$props.fill}/><path d="M14.2678 15.9655H14.8678V17.1655H14.2678V15.9655ZM12.9071 17.1655C12.5757 17.1655 12.3071 16.8969 12.3071 16.5655C12.3071 16.2341 12.5757 15.9655 12.9071 15.9655V17.1655ZM14.2678 17.1655H12.9071V15.9655H14.2678V17.1655Z" fill={$props.fill}/>
        </g>
      </defs>
    )
  }
})

export { Carrot }
