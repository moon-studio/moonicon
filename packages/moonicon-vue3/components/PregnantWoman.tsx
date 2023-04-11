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

const PregnantWoman = defineComponent({
  name: 'PregnantWoman',
  props,
  render() {
    const $props = this.$props
    
    return h(
      <defs>
        <g id="PregnantWoman">
          <path d="M15.533 3.11639C15.2429 4.32363 15.9776 5.75332 17.0586 6.92255C18.1396 8.09179 20.468 10.399 20.468 14.1488C20.468 17.8986 18.4091 19.7043 16.0564 20.1944" stroke={$props.stroke} strokeWidth={$props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/><path d="M8.12968 3.17706C7.23885 3.33096 6.27385 4.18915 5.81498 5.23228C5.22781 6.56707 3.63685 11.1576 3.7815 12.2191C3.92615 13.2805 5.4854 14.6027 9.02375 17.3765C10.6618 18.7667 13.4729 19.6007 14.0599 18.782C14.5483 18.1008 14.207 17.3765 13.3983 17.1648M9.02375 6.52619C7.58017 9.2052 7.11094 10.6129 7.11094 11.663C7.11094 12.7132 9.48997 14.4481 10.9288 15.5058C11.3676 15.7849 12.0729 15.9721 12.9466 15.6215" stroke={$props.stroke} strokeWidth={$props.strokeWidth} stroke-linecap="round" stroke-linejoin="bevel"/><path d="M6.46307 15.4465C6.75916 17.0774 6.76786 18.7325 6.46307 20.357" stroke={$props.stroke} strokeWidth={$props.strokeWidth} stroke-linecap="round"/><path d="M16.2011 10.2454C17.2439 10.9382 17.9279 12.4975 17.7529 13.7546" stroke={$props.stroke} strokeWidth={$props.strokeWidth} stroke-linecap="round"/>
        </g>
      </defs>
    )
  }
})

export { PregnantWoman }
