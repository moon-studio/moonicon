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

const SettingTwo = defineComponent({
  name: 'SettingTwo',
  props,
  render() {
    const $props = this.$props
    
    return h(
      <defs>
        <g id="SettingTwo">
          <path d="M11.0097 3.53869C11.6245 3.18738 12.3793 3.18738 12.9942 3.53869L18.8884 6.90659C19.5116 7.26267 19.8961 7.92537 19.8961 8.64311V15.3431C19.8961 16.0608 19.5116 16.7235 18.8884 17.0796L12.9942 20.4475C12.3793 20.7988 11.6245 20.7988 11.0097 20.4475L5.11549 17.0796C4.49231 16.7235 4.10771 16.0608 4.10771 15.3431V8.64311C4.10771 7.92537 4.49231 7.26267 5.11549 6.90659L11.0097 3.53869Z" stroke={$props.stroke} stroke-width={$props.strokeWidth}/><circle cx="12.002" cy="12" r="2.99927" stroke={$props.stroke} stroke-width={$props.strokeWidth}/>
        </g>
      </defs>
    )
  }
})

export { SettingTwo }
