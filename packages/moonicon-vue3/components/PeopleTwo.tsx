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

const PeopleTwo = defineComponent({
  name: 'PeopleTwo',
  props,
  render() {
    const $props = this.$props
    
    return h(
      <defs>
        <g id="PeopleTwo">
          <path d="M17.7031 8.5625C17.5886 10.1512 16.4101 11.375 15.1249 11.375C13.8398 11.375 12.6593 10.1516 12.5468 8.5625C12.4296 6.90977 13.5769 5.75 15.1249 5.75C16.673 5.75 17.8202 6.93984 17.7031 8.5625Z" stroke={$props.stroke} strokeWidth={$props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/><path d="M15.1251 13.875C12.5794 13.875 10.1313 15.1395 9.51806 17.602C9.43681 17.9277 9.6411 18.25 9.97587 18.25H20.2747C20.6095 18.25 20.8126 17.9277 20.7325 17.602C20.1192 15.1 17.6712 13.875 15.1251 13.875Z" stroke={$props.stroke} strokeWidth={$props.strokeWidth} stroke-miterlimit="10"/><path d="M9.81251 9.26328C9.7211 10.532 8.76876 11.5312 7.74219 11.5312C6.71563 11.5312 5.76173 10.5324 5.67188 9.26328C5.57852 7.94336 6.50548 7 7.74219 7C8.97891 7 9.90587 7.96758 9.81251 9.26328Z" stroke={$props.stroke} strokeWidth={$props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/><path d="M10.0469 13.9531C9.34181 13.6301 8.56525 13.5059 7.7422 13.5059C5.71095 13.5059 3.75392 14.5156 3.26369 16.4824C3.19923 16.7426 3.36252 17 3.6297 17H8.01564" stroke={$props.stroke} strokeWidth={$props.strokeWidth} stroke-miterlimit="10" stroke-linecap="round"/>
        </g>
      </defs>
    )
  }
})

export { PeopleTwo }
