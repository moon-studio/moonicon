import { defineComponent, h } from 'vue'
import type { PropType } from 'vue'
  
const props = {
  // fill color
  fill: {
    type: String as PropType<string>,
    default: '#fff'
  }
}

const WeChat = defineComponent({
  name: 'WeChat',
  props,
  render() {
    const $props = this.$props
    
    return h(
      <defs>
        <g id="WeChat">
          <path d="M15.7137 8.63659C15.9426 8.63659 16.1725 8.63659 16.4477 8.68155C15.8055 5.72694 12.5964 3.5 8.92746 3.5C4.84726 3.5 1.5 6.27269 1.5 9.77306C1.5 11.8191 2.59993 13.4553 4.48026 14.7277L3.74627 17.0007L6.35954 15.7283C7.27703 15.9102 8.05637 16.0921 8.97281 16.0921C9.20165 16.0921 9.43155 16.0921 9.6604 16.0472C9.5233 15.5474 9.43155 15.0466 9.43155 14.5019C9.3862 11.2734 12.183 8.63659 15.7137 8.63659ZM11.7253 6.63653C12.2758 6.63653 12.6428 7.00037 12.6428 7.54613C12.6428 8.09188 12.2758 8.45572 11.7253 8.45572C11.1748 8.45572 10.6253 8.09188 10.6253 7.54613C10.6243 7.00037 11.1748 6.63653 11.7253 6.63653ZM6.49769 8.50068C5.9472 8.50068 5.39776 8.13684 5.39776 7.59108C5.39776 7.04533 5.94825 6.68149 6.49769 6.68149C7.04713 6.68149 7.41518 7.04533 7.41518 7.59108C7.46053 8.13684 7.09353 8.50068 6.49769 8.50068ZM22.5 14.4099C22.5 11.4553 19.5197 9.04643 16.1725 9.04643C12.6417 9.04643 9.84495 11.4553 9.84495 14.4099C9.84495 17.3645 12.6417 19.7734 16.1725 19.7734C16.9065 19.7734 17.6394 19.5914 18.4187 19.4095L20.4362 20.5L19.8857 18.6359C21.4001 17.5464 22.5 16.0461 22.5 14.4099ZM14.155 13.4553C13.7881 13.4553 13.4211 13.0915 13.4211 12.7277C13.4211 12.3638 13.7881 12 14.155 12C14.7055 12 15.0725 12.3638 15.0725 12.7277C15.0725 13.0915 14.7055 13.4553 14.155 13.4553ZM18.2363 13.4553C17.8693 13.4553 17.5023 13.0915 17.5023 12.7277C17.5023 12.3638 17.8693 12 18.2363 12C18.7868 12 19.1538 12.3638 19.1538 12.7277C19.1527 13.0915 18.7857 13.4553 18.2363 13.4553Z" fill={$props.fill}/>
        </g>
      </defs>
    )
  }
})

export { WeChat }
