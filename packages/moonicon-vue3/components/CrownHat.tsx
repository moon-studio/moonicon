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

const CrownHat = defineComponent({
  name: 'CrownHat',
  props,
  render() {
    const $props = this.$props
    
    return h(
      <defs>
        <g id="CrownHat">
          <path d="M7.41669 19.5H16.5834L19.0834 10.75L14.9167 12.8333L12 7L9.08335 12.8333L4.91669 10.75L7.41669 19.5Z" stroke={$props.stroke} stroke-width={$props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/><path d="M4.91669 10.75C5.60704 10.75 6.16669 10.1904 6.16669 9.5C6.16669 8.80964 5.60704 8.25 4.91669 8.25C4.22633 8.25 3.66669 8.80964 3.66669 9.5C3.66669 10.1904 4.22633 10.75 4.91669 10.75Z" stroke={$props.stroke} stroke-width={$props.strokeWidth}/><path d="M11.9999 7C12.6903 7 13.2499 6.44036 13.2499 5.75C13.2499 5.05964 12.6903 4.5 11.9999 4.5C11.3096 4.5 10.7499 5.05964 10.7499 5.75C10.7499 6.44036 11.3096 7 11.9999 7Z" stroke={$props.stroke} stroke-width={$props.strokeWidth}/><path d="M19.0832 10.75C19.7735 10.75 20.3332 10.1904 20.3332 9.5C20.3332 8.80964 19.7735 8.25 19.0832 8.25C18.3928 8.25 17.8332 8.80964 17.8332 9.5C17.8332 10.1904 18.3928 10.75 19.0832 10.75Z" stroke={$props.stroke} stroke-width={$props.strokeWidth}/>
        </g>
      </defs>
    )
  }
})

export { CrownHat }
