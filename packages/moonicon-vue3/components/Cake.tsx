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

const Cake = defineComponent({
  name: 'Cake',
  props,
  render() {
    const $props = this.$props
    
    return h(
      <defs>
        <g id="Cake">
          <path d="M11.9999 7.40002V9.48336" stroke={$props.stroke} stroke-width={$props.strokeWidth} stroke-linecap="square" stroke-linejoin="bevel"/><path d="M5.33325 13.65V19.0667C5.33325 19.5269 5.70635 19.9 6.16659 19.9H17.8333C18.2935 19.9 18.6666 19.5269 18.6666 19.0667V13.65" stroke={$props.stroke} stroke-width={$props.strokeWidth} stroke-linecap="square" stroke-linejoin="bevel"/><path d="M3.66663 11.5538C3.66663 10.4103 4.5936 9.48334 5.73708 9.48334H18.2628C19.4063 9.48334 20.3333 10.4103 20.3333 11.5538V11.67C20.3333 12.4465 19.8606 13.1446 19.1398 13.433C18.7955 13.5707 18.4082 13.5505 18.0801 13.3778L17.9375 13.3028C17.5245 13.0854 17.031 13.0854 16.618 13.3028C16.205 13.5201 15.7115 13.5201 15.2986 13.3028C14.8856 13.0854 14.3921 13.0854 13.9791 13.3028C13.5662 13.5201 13.0726 13.5201 12.6597 13.3028C12.2467 13.0854 11.7532 13.0854 11.3403 13.3028C10.9273 13.5201 10.4338 13.5201 10.0208 13.3028C9.60783 13.0854 9.11429 13.0854 8.70133 13.3028C8.28838 13.5201 7.79488 13.5201 7.38192 13.3028C6.96896 13.0854 6.47542 13.0854 6.06246 13.3028L5.91984 13.3778C5.59174 13.5505 5.20443 13.5707 4.86018 13.433C4.13931 13.1446 3.66663 12.4465 3.66663 11.67V11.5538Z" stroke={$props.stroke} stroke-width={$props.strokeWidth} stroke-linecap="square" stroke-linejoin="bevel"/><path d="M13.2499 5.73332C12.9166 4.06665 12 4.06665 12 4.06665C12 4.06665 11.0836 4.06665 10.7502 5.73332C10.3336 7.81665 13.6666 7.81665 13.2499 5.73332Z" stroke={$props.stroke} stroke-width={$props.strokeWidth}/>
        </g>
      </defs>
    )
  }
})

export { Cake }
