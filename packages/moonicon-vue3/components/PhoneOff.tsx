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

const PhoneOff = defineComponent({
  name: 'PhoneOff',
  props,
  render() {
    const $props = this.$props
    
    return h(
      <defs>
        <g id="PhoneOff">
          <path d="M11.0101 12.9826C11.7712 13.7444 12.6314 14.4003 13.5676 14.9326L14.5201 13.9801C14.724 13.7784 14.9814 13.6395 15.2619 13.5796C15.5424 13.5198 15.8341 13.5417 16.1026 13.6426C16.783 13.8965 17.49 14.0726 18.2101 14.1676C18.5705 14.2185 18.9001 14.3988 19.1374 14.6748C19.3748 14.9507 19.5037 15.3036 19.5001 15.6676V17.9176C19.5009 18.1264 19.4581 18.3332 19.3745 18.5246C19.2908 18.716 19.168 18.8878 19.0141 19.029C18.8602 19.1702 18.6785 19.2777 18.4806 19.3446C18.2828 19.4115 18.0731 19.4364 17.8651 19.4176C15.5572 19.1668 13.3403 18.3782 11.3926 17.1151C10.489 16.5414 9.65147 15.8698 8.89507 15.1126M6.89257 12.6076C5.62946 10.6598 4.84084 8.44295 4.59007 6.13507C4.57133 5.92767 4.59598 5.71864 4.66245 5.52129C4.72892 5.32394 4.83575 5.14259 4.97615 4.98879C5.11654 4.83499 5.28743 4.7121 5.47792 4.62796C5.6684 4.54382 5.87433 4.50027 6.08257 4.50007H8.33257C8.69655 4.49649 9.04942 4.62538 9.32539 4.86272C9.60137 5.10006 9.78163 5.42966 9.83257 5.79007C9.92754 6.51012 10.1037 7.21712 10.3576 7.89757C10.4585 8.16602 10.4803 8.45776 10.4205 8.73823C10.3607 9.01871 10.2217 9.27616 10.0201 9.48007L9.06757 10.4326" stroke={$props.stroke} strokeWidth={$props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/>
<path d="M20.25 3.75L3.75 20.25" stroke={$props.stroke} strokeWidth={$props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/>

        </g>
      </defs>
    )
  }
})

export { PhoneOff }
