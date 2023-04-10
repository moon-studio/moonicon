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

const Hive = defineComponent({
  name: 'Hive',
  props,
  render() {
    const $props = this.$props
    
    return h(
      <defs>
        <g id="Hive">
          <path d="M8.83008 21.2734L11.9934 19.4471L11.9934 15.7944L8.83008 13.968L5.66674 15.7944L5.66674 19.4471L8.83008 21.2734Z" stroke={$props.stroke} strokeWidth={$props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8.83008 10.2926L11.9934 8.46624L11.9934 4.81353L8.83008 2.98717L5.66674 4.81353L5.66674 8.46624L8.83008 10.2926Z" stroke={$props.stroke} strokeWidth={$props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/>
<path d="M5.6637 15.7953L8.82705 13.969L8.82705 10.3162L5.6637 8.48989L2.50036 10.3162L2.50036 13.969L5.6637 15.7953Z" stroke={$props.stroke} strokeWidth={$props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/>
<path d="M18.3364 15.7953L21.4998 13.969L21.4998 10.3162L18.3364 8.48989L15.1731 10.3162L15.1731 13.969L18.3364 15.7953Z" stroke={$props.stroke} strokeWidth={$props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/>
<path d="M15.1541 21.2734L18.3174 19.4471L18.3174 15.7944L15.1541 13.968L11.9907 15.7944L11.9907 19.4471L15.1541 21.2734Z" stroke={$props.stroke} strokeWidth={$props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/>
<path d="M15.1541 10.2926L18.3174 8.46624L18.3174 4.81353L15.1541 2.98717L11.9907 4.81353L11.9907 8.46624L15.1541 10.2926Z" stroke={$props.stroke} strokeWidth={$props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/>

        </g>
      </defs>
    )
  }
})

export { Hive }
