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

const WizardHat = defineComponent({
  name: 'WizardHat',
  props,
  render() {
    const $props = this.$props
    
    return h(
      <defs>
        <g id="WizardHat">
          <path d="M11.9999 19C7.58166 19 3.99994 18.2165 3.99994 17.25C3.99994 16.6205 5.31946 16.0686 7.59994 15.7603L10.4884 7.62723C10.6913 7.05585 11.0626 6.55937 11.5534 6.20323L13.5762 4.73527C14.3894 4.14507 15.4675 4.98855 15.0904 5.91995L14.5214 7.32511C14.4424 7.52006 14.427 7.73494 14.4772 7.93919L16.3999 15.7603C18.6804 16.0686 19.9999 16.6205 19.9999 17.25C19.9999 18.2165 16.4182 19 11.9999 19Z" stroke={$props.stroke} stroke-width={$props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/>
        </g>
      </defs>
    )
  }
})

export { WizardHat }
