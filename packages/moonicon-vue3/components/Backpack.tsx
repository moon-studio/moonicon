import { defineComponent, h } from 'vue'
import type { PropType } from 'vue'
  
const props = {
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

const Backpack = defineComponent({
  name: 'Backpack',
  props,
  render() {
    const $props = this.$props
    
    return h(
      <defs>
        <g id="Backpack">
          <path d="M14.0834 5.98156V4.66675C14.0834 4.11446 14.5312 3.66675 15.0834 3.66675H15.5834C16.1357 3.66675 16.5834 4.11446 16.5834 4.66675V7.83341" stroke={$props.stroke} stroke-width={$props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/><path d="M9.91669 5.98156V4.66675C9.91669 4.11446 9.46897 3.66675 8.91669 3.66675H8.41669C7.8644 3.66675 7.41669 4.11446 7.41669 4.66675V7.83341" stroke={$props.stroke} stroke-width={$props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/><path d="M17.4167 10.3334C17.4167 8.03225 15.5512 6.16675 13.25 6.16675H10.75C8.44885 6.16675 6.58335 8.03225 6.58335 10.3334V18.6667C6.58335 19.5872 7.32956 20.3334 8.25002 20.3334H15.75C16.6705 20.3334 17.4167 19.5872 17.4167 18.6667V10.3334Z" stroke={$props.stroke} stroke-width={$props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/><path d="M17.4999 14H18.4999C19.0522 14 19.4999 14.4477 19.4999 15L19.4999 17C19.4999 17.5523 19.0522 18 18.4999 18H17.4999" stroke={$props.stroke} stroke-width={$props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/><path d="M6.58344 14H5.50011C4.94782 14 4.50011 14.4477 4.50011 15V17C4.50011 17.5523 4.94782 18 5.50011 18H6.58344" stroke={$props.stroke} stroke-width={$props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/><path d="M10.3334 11.5833V13.2499" stroke={$props.stroke} stroke-width={$props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/><path d="M14.9167 11.5833H10.5417H9.08335" stroke={$props.stroke} stroke-width={$props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/>
        </g>
      </defs>
    )
  }
})

export { Backpack }
