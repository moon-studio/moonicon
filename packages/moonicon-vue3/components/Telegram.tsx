import { defineComponent, h } from 'vue'
import type { PropType } from 'vue'
  
const props = {
  size: {
    type: [Number, String] as PropType<number | string>,
    default: '24'
  },
  // fill color
  fill: {
    type: String as PropType<string>,
    default: '#fff'
  }
}

const Telegram = defineComponent({
  name: 'Telegram',
  props,
  setup(props) {
    return () => (
      <svg
        width={props.size}
        height={props.size}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path d="M21.3873 5.08394L18.4755 19.036C18.2621 19.9926 17.7047 20.2309 16.9135 19.7804L12.6005 16.5538L10.5614 18.8358C10.3309 19.0698 9.96206 18.9512 9.96206 18.6334V14.5558L17.8044 7.36268C18.1517 7.04818 17.8826 6.79898 17.4999 7.06015L7.53271 13.3653L3.2776 12.0137C2.35239 11.7199 2.33524 11.0746 3.47058 10.6241L20.1126 4.11651C20.8834 3.8216 21.5942 4.06863 21.3873 5.08394Z" fill={props.fill}/>
      </svg>
    )
  }
})

export default Telegram
