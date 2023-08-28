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

const TED = defineComponent({
  name: 'TED',
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
        <path d="M3.2286 10.0372H1V8.0022H7.9025V10.0383H5.675V15.9508H3.2286V10.0372ZM8.2831 8.0022H14.9843V10.0383H10.7317V11.0316H14.9832V12.9225H10.7317V13.9125H14.9832V15.9519H8.2831V8.0022ZM17.8432 13.9158H18.8024C20.3281 13.9158 20.5503 12.6761 20.5503 11.9303C20.5503 11.4309 20.3864 10.0394 18.6121 10.0394H17.8289V13.9169L17.8432 13.9158ZM15.3968 8.0022H19.4151C22.065 8.0022 23 9.9591 23 11.9622C23 14.4009 21.7086 15.9508 18.9355 15.9508H15.3957V8L15.3968 8.0022Z" fill={props.fill}/>
      </svg>
    )
  }
})

export default TED
