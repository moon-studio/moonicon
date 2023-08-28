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

const Footsteps = defineComponent({
  name: 'Footsteps',
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
        <path d="M9.81249 11.6422C10.1566 13.9321 9.52616 15.184 7.74569 15.4473C5.76718 15.7399 4.95194 14.4145 4.6078 12.1246C4.14491 9.04338 5.2328 7.12697 6.78397 7.00353C8.19569 6.89143 9.46796 9.35275 9.81249 11.6422ZM10.7363 17.9973C10.8586 19.2973 10.1558 20.5106 9.09569 20.7184C8.02538 20.9278 6.80233 20.0789 6.55311 18.7969C6.3039 17.5149 7.24647 17.4469 8.40155 17.2262C9.55663 17.0055 10.5887 16.4293 10.7363 17.9973ZM14.1875 7.89182C13.8433 10.1817 14.4738 11.4336 16.2539 11.6969C18.2328 11.9895 19.0476 10.6641 19.3918 8.37424C19.8551 5.2926 18.7668 3.36564 17.216 3.25314C15.7941 3.15002 14.532 5.60197 14.1875 7.89182ZM13.2637 14.2473C13.1414 15.5469 13.8441 16.7606 14.9043 16.9684C15.9746 17.1778 17.1976 16.3289 17.4469 15.0469C17.6961 13.7649 16.7535 13.6969 15.5984 13.4758C14.4433 13.2547 13.4113 12.6789 13.2637 14.2473Z" stroke={props.stroke} stroke-width={props.strokeWidth} stroke-miterlimit="10"/>
      </svg>
    )
  }
})

export default Footsteps
