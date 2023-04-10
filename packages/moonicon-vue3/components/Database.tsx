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

const Database = defineComponent({
  name: 'Database',
  props,
  render() {
    const $props = this.$props
    
    return h(
      <defs>
        <g id="Database">
          <path d="M19 6C19 7.65685 15.866 9 12 9C8.13401 9 5 7.65685 5 6C5 4.34315 8.13401 3 12 3C15.866 3 19 4.34315 19 6Z" stroke={$props.stroke} strokeWidth={$props.strokeWidth}/>
<path d="M19 18C19 19.6569 15.866 21 12 21C8.13401 21 5 19.6569 5 18" stroke={$props.stroke} strokeWidth={$props.strokeWidth}/>
<path d="M19 10C19 11.6569 15.866 13 12 13C8.13401 13 5 11.6569 5 10" stroke={$props.stroke} strokeWidth={$props.strokeWidth}/>
<path d="M19 14C19 15.6569 15.866 17 12 17C8.13401 17 5 15.6569 5 14" stroke={$props.stroke} strokeWidth={$props.strokeWidth}/>
<path d="M19 18C19 17.4348 19 8.22857 19 6M5 18C5 17.34 5 8.22857 5 6" stroke={$props.stroke} strokeWidth={$props.strokeWidth}/>

        </g>
      </defs>
    )
  }
})

export { Database }
