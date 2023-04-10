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

const PeopleThree = defineComponent({
  name: 'PeopleThree',
  props,
  render() {
    const $props = this.$props
    
    return h(
      <defs>
        <g id="PeopleThree">
          <path d="M16.8634 19.5V17.8333C16.8634 16.9493 16.5122 16.1014 15.8871 15.4763C15.2619 14.8512 14.4141 14.5 13.53 14.5H6.86336C5.97931 14.5 5.13146 14.8512 4.50634 15.4763C3.88122 16.1014 3.53003 16.9493 3.53003 17.8333V19.5" stroke={$props.stroke} strokeWidth={$props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10.2033 11.1667C12.0443 11.1667 13.5367 9.67428 13.5367 7.83333C13.5367 5.99238 12.0443 4.5 10.2033 4.5C8.36238 4.5 6.87 5.99238 6.87 7.83333C6.87 9.67428 8.36238 11.1667 10.2033 11.1667Z" stroke={$props.stroke} strokeWidth={$props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/>
<path d="M20.47 19.5V17.8333C20.4694 17.0948 20.2236 16.3773 19.7711 15.7936C19.3186 15.2099 18.6851 14.793 17.97 14.6083" stroke={$props.stroke} strokeWidth={$props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/>
<path d="M14.63 4.60834C15.347 4.79192 15.9825 5.20892 16.4364 5.7936C16.8902 6.37827 17.1365 7.09736 17.1365 7.8375C17.1365 8.57765 16.8902 9.29674 16.4364 9.88141C15.9825 10.4661 15.347 10.8831 14.63 11.0667" stroke={$props.stroke} strokeWidth={$props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/>

        </g>
      </defs>
    )
  }
})

export { PeopleThree }
