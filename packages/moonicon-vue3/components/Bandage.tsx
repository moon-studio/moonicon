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

const Bandage = defineComponent({
  name: 'Bandage',
  props,
  render() {
    const $props = this.$props
    
    return h(
      <defs>
        <g id="Bandage">
          <path d="M14.8269 4.39095L4.39093 14.827C3.07045 16.1474 3.07045 18.2883 4.39093 19.6088L4.3912 19.6091C5.71167 20.9296 7.85258 20.9296 9.17305 19.6091L19.6091 9.17308C20.9295 7.8526 20.9295 5.7117 19.6091 4.39122L19.6088 4.39095C18.2883 3.07048 16.1474 3.07048 14.8269 4.39095Z" stroke={$props.stroke} strokeWidth={$props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/>
<path d="M16.232 10.8063L13.1932 7.76741C12.7137 7.2879 11.9362 7.2879 11.4567 7.76741L7.8752 11.3489C7.39568 11.8284 7.39568 12.6059 7.8752 13.0854L10.9141 16.1243C11.3936 16.6038 12.171 16.6038 12.6505 16.1243L16.232 12.5428C16.7116 12.0632 16.7116 11.2858 16.232 10.8063Z" stroke={$props.stroke} strokeWidth={$props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/>

        </g>
      </defs>
    )
  }
})

export { Bandage }
