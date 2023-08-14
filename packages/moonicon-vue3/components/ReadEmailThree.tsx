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

const ReadEmailThree = defineComponent({
  name: 'ReadEmailThree',
  props,
  render() {
    const $props = this.$props
    
    return h(
      <defs>
        <g id="ReadEmailThree">
          <path d="M7.0001 11V7.1014M7.0001 7.1014L4.07299 8.91703C3.77896 9.09941 3.6001 9.42083 3.6001 9.76683V14.594V18.9783C3.6001 19.5303 4.04737 19.9779 4.59937 19.9783L20.3856 19.9899L20.4093 9.76872C20.4101 9.42169 20.2309 9.09906 19.9359 8.9163L17.0063 7.1014M7.0001 7.1014L11.4733 4.32675C11.796 4.12659 12.2042 4.12647 12.5271 4.32646L17.0063 7.1014M7.0001 7.1014H17.0063M17.0063 7.1014L17.0001 11" stroke={$props.stroke} stroke-width={$props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/><path d="M4.02026 9.56921L11.4727 14.2588C11.7982 14.4636 12.2123 14.4636 12.5378 14.2588L19.9902 9.56921" stroke={$props.stroke} stroke-width={$props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/>
        </g>
      </defs>
    )
  }
})

export { ReadEmailThree }
