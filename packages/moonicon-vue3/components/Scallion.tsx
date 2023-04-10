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

const Scallion = defineComponent({
  name: 'Scallion',
  props,
  render() {
    const $props = this.$props
    
    return h(
      <defs>
        <g id="Scallion">
          <path d="M9.92026 6.98749C9.83281 6.1166 10.0935 4.82344 10.302 3.9736C10.4235 3.47877 10.9136 3.18031 11.4145 3.27376L11.5861 3.30578C12.1916 3.41876 12.5595 4.05049 12.4132 4.64885C12.2007 5.51777 11.9844 6.75411 12.1076 7.86249C12.2769 9.38631 12.8487 10.8132 13.3049 11.481" stroke={$props.stroke} strokeWidth={$props.strokeWidth} stroke-linecap="round"/>
<path d="M19.545 20.1124C20.4203 19.2009 20.7787 17.2211 19.0291 15.8695C17.2794 14.5178 16.1459 14.1522 14.3436 12.5888C12.6963 11.1598 9.00414 5.70857 7.56574 3.54307C7.24425 3.05907 6.58225 2.94792 6.11961 3.29944L5.72946 3.59587C5.29107 3.92896 5.2044 4.55375 5.53556 4.9936L10.5884 11.7047C12.6633 14.469 12.7077 18.7414 16.1459 20.4605C17.0209 20.898 18.6698 21.024 19.545 20.1124Z" stroke={$props.stroke} strokeWidth={$props.strokeWidth} stroke-linecap="round"/>
<path d="M12.0345 14.4442C11.5499 14.0782 10.4121 13.3752 9.0363 12.6873C7.78689 12.0626 5.08745 11.4029 3.63557 11.0746C3.09879 10.9532 2.75175 10.4271 2.85958 9.8874L2.96263 9.3717C3.06642 8.85231 3.55632 8.5057 4.07739 8.60066C5.49836 8.85961 8.1902 9.4476 9.57088 10.3837" stroke={$props.stroke} strokeWidth={$props.strokeWidth} stroke-linecap="round"/>

        </g>
      </defs>
    )
  }
})

export { Scallion }
