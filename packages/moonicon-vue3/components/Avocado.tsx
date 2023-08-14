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

const Avocado = defineComponent({
  name: 'Avocado',
  props,
  render() {
    const $props = this.$props
    
    return h(
      <defs>
        <g id="Avocado">
          <path d="M19.6166 14.65C18.3666 16.7333 15.4499 18.8167 13.3666 19.2333C11.2832 19.65 8.86304 19.2932 7.11658 17.9833C4.61658 16.1083 3.78324 12.9833 3.78324 10.9C3.78324 8.81666 4.61658 6.52499 5.03324 5.89999C5.44991 5.27499 6.47307 4.79184 6.47307 4.79184" stroke={$props.stroke} stroke-width={$props.strokeWidth} stroke-linecap="round" stroke-linejoin="bevel"/><path d="M12.9389 7.55236C14.7562 8.22194 16.6946 7.55236 18.3637 8.80422C20.3235 10.2742 20.8675 12.5598 19.6155 14.6462C18.6341 16.2817 17.112 17.15 14.6083 17.15C12.1046 17.15 10.5336 16.4136 8.76627 14.6462C6.26255 12.1425 5.42798 8.17829 5.42798 6.71779C5.42798 5.25727 6.47107 4.42269 7.9317 4.63134C9.39233 4.83998 10.6136 6.69554 12.9389 7.55236Z" stroke={$props.stroke} stroke-width={$props.strokeWidth} stroke-linecap="square" stroke-linejoin="bevel"/><path d="M12.561 10.3192C13.1799 10.5622 13.8401 10.3192 14.4086 10.7735C15.0762 11.307 15.2615 12.1365 14.835 12.8937C14.5007 13.4873 13.9823 13.8024 13.1296 13.8024C12.2768 13.8024 11.7418 13.5352 11.1398 12.8937C10.2871 11.9851 10.0028 10.5463 10.0028 10.0163C10.0028 9.48623 10.3581 9.18333 10.8556 9.25909C11.353 9.3348 11.769 10.0082 12.561 10.3192Z" stroke={$props.stroke} stroke-width={$props.strokeWidth} stroke-linecap="square" stroke-linejoin="bevel"/>
        </g>
      </defs>
    )
  }
})

export { Avocado }
