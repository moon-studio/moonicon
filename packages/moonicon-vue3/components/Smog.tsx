import { defineComponent, h } from 'vue'
import type { PropType } from 'vue'
  
const props = {
  size: {
    type: [Number, String] as PropType<number | string>,
    default: '24'
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

const Smog = defineComponent({
  name: 'Smog',
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
        <path d="M3.18325 11.0865C3.18325 13.2619 4.82064 15.0363 6.87345 15.1281C6.87444 15.1281 6.87524 15.1289 6.87524 15.1299C6.87524 15.131 6.87607 15.1318 6.8771 15.1318L12.551 15.1275L17.6735 15.1318C17.6747 15.1318 17.6757 15.1308 17.6757 15.1296C17.6757 15.1285 17.6766 15.1275 17.6778 15.1274C19.426 15.036 20.8166 13.5205 20.8166 11.6644C20.8166 9.74941 19.3364 8.197 17.5104 8.197C17.4932 8.19708 17.4787 8.18402 17.4768 8.16694C17.1898 5.58091 15.0939 3.57379 12.551 3.57379C10.6362 3.57379 8.97484 4.71184 8.14839 6.37816C7.94444 6.78935 7.49954 7.0412 7.04055 7.0412C4.91022 7.0412 3.18325 8.85234 3.18325 11.0865Z" stroke={props.stroke} stroke-width={props.strokeWidth} stroke-linecap="round"/><path d="M4.49994 17.5H14.4999M16.4999 17.5H19.4999M4.49994 19.8129H7.49994M9.49994 19.8129H19.4999" stroke={props.stroke} stroke-width={props.strokeWidth} stroke-linecap="round"/>
      </svg>
    )
  }
})

export default Smog
