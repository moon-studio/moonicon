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

const Edit = defineComponent({
  name: 'Edit',
  props,
  render() {
    const $props = this.$props
    
    return h(
      <defs>
        <g id="Edit">
          <path d="M11.9574 4.08533H6C4.89543 4.08533 4 4.98076 4 6.08533V18C4 19.1046 4.89543 20 6 20H17.9147C19.0193 20 19.9147 19.1046 19.9147 18V12.0427M18.3374 8.47599L19.4173 7.39602C20.1942 6.61914 20.1942 5.35957 19.4173 4.58269C18.6404 3.8058 17.3809 3.80581 16.604 4.5827L15.524 5.66265M18.3374 8.47599L12.3333 14.4802C12.0556 14.7579 11.7019 14.9472 11.3167 15.0242L8.39069 15.6094L8.97591 12.6833C9.05293 12.2982 9.24222 11.9445 9.51993 11.6668L15.524 5.66265M18.3374 8.47599L15.524 5.66265" stroke={$props.stroke} strokeWidth={$props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/>

        </g>
      </defs>
    )
  }
})

export { Edit }
