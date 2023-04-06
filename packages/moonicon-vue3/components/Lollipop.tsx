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

const Lollipop = defineComponent({
  name: 'Lollipop',
  props,
  render() {
    const $props = this.$props
    
    return h(
      <defs>
        <g id="Lollipop">
          <path d="M16.5833 16.4834L20.2504 20.3725" stroke={$props.stroke} stroke-width={$props.strokeWidth} stroke-linecap="round"/><path d="M9.60652 10.3584C9.67015 9.45212 10.4599 8.76442 11.369 8.82806C12.5864 8.91328 13.2643 10.0247 13.1901 11.059C13.0936 12.4035 11.9267 13.6053 10.4583 13.6053C8.50046 13.6053 6.95249 12.1098 7.09158 10.1233C7.24772 7.89324 9.17136 6.37364 11.5181 6.53647C14.0678 6.71338 15.9144 8.82806 15.7333 11.3939C15.6338 12.8031 14.9914 14.089 13.9251 15.0152C10.6426 17.8716 3.77253 15.4151 3.77258 10.3584" stroke={$props.stroke} stroke-width={$props.strokeWidth} stroke-linecap="round"/><path d="M6.40169 16.6263C7.71972 17.7222 9.37073 18.3167 11.0832 18.3167C11.1902 18.3167 11.2972 18.3147 11.4003 18.3068C13.2376 18.2275 14.966 17.4685 16.2681 16.1665C16.9678 15.467 17.5109 14.6505 17.8795 13.7409C18.2363 12.863 18.4166 11.9336 18.4166 10.9823C18.4166 10.0311 18.2363 9.10172 17.8795 8.22382C17.5109 7.31422 16.9678 6.49774 16.2681 5.79819C15.5685 5.09866 14.7519 4.55567 13.8421 4.18707C12.9641 3.83036 12.0346 3.65002 11.0832 3.65002C10.1318 3.65002 9.20229 3.83036 8.32426 4.18707C7.41452 4.55567 6.5979 5.09866 5.89826 5.79819C5.08169 6.61269 4.48508 7.5778 4.12437 8.66378C3.77952 9.70021 3.67048 10.8218 3.80725 11.9078C3.86871 12.3854 3.97573 12.859 4.12831 13.3149C4.59801 14.6991 5.21145 15.6366 6.40169 16.6263Z" stroke={$props.stroke} stroke-width={$props.strokeWidth} stroke-linecap="round"/>
        </g>
      </defs>
    )
  }
})

export { Lollipop }
  