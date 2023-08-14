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

const Customer = defineComponent({
  name: 'Customer',
  props,
  render() {
    const $props = this.$props
    
    return h(
      <defs>
        <g id="Customer">
          <path d="M19.5 10C19.5 8 18.9 4 12.5 4C6.1 4 5.5 8 5.5 10" stroke={$props.stroke} stroke-width={$props.strokeWidth} stroke-linecap="round"/><path d="M6 10H5C4.44772 10 4 10.4477 4 11V13C4 13.5523 4.44772 14 5 14H6C6.55228 14 7 13.5523 7 13V11C7 10.4477 6.55228 10 6 10Z" stroke={$props.stroke} stroke-width={$props.strokeWidth} stroke-linecap="round"/><path d="M6 10H5C4.44772 10 4 10.4477 4 11V13C4 13.5523 4.44772 14 5 14H6C6.55228 14 7 13.5523 7 13V11C7 10.4477 6.55228 10 6 10Z" stroke={$props.stroke} stroke-width={$props.strokeWidth} stroke-linecap="round"/><path d="M20 10H19C18.4477 10 18 10.4477 18 11V13C18 13.5523 18.4477 14 19 14H20C20.5523 14 21 13.5523 21 13V11C21 10.4477 20.5523 10 20 10Z" stroke={$props.stroke} stroke-width={$props.strokeWidth} stroke-linecap="round"/><path d="M19.5 14C19.5 18.2099 16.6795 19.3941 14.7491 19.5092M14.7491 19.5092C14.7491 19.5092 14.2254 19.5205 14 19.5L14.3746 19.5046L14.7491 19.5092Z" stroke={$props.stroke} stroke-width={$props.strokeWidth} stroke-linecap="round"/><circle cx="13.5" cy="19" r="1" stroke={$props.stroke} stroke-width={$props.strokeWidth}/>
        </g>
      </defs>
    )
  }
})

export { Customer }
