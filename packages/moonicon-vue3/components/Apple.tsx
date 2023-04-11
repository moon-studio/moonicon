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

const Apple = defineComponent({
  name: 'Apple',
  props,
  render() {
    const $props = this.$props
    
    return h(
      <defs>
        <g id="Apple">
          <path d="M16.9999 12.5958C17.242 14.4719 16.5798 15.831 15.9999 16.5958" stroke={$props.stroke} strokeWidth={$props.strokeWidth} stroke-linecap="round"/><path fill-rule="evenodd" clip-rule="evenodd" d="M11.9999 19.5692C10.9682 19.5692 10.5438 20.0939 9.99071 20.2105C9.43768 20.3272 8.97342 20.3595 8.49796 20.1618C5.67829 18.9892 4.36068 16.1017 4.36068 13.1638C4.36068 10.7866 5.03989 9.55812 6.08655 8.75451C7.13321 7.95094 8.19728 7.95093 8.91916 7.95093C10.6338 7.95093 11.8165 9.13719 11.9964 9.13719C12.1763 9.13719 13.4048 7.95094 15.1167 7.95094C16.0372 7.95094 17.0927 7.95094 18.0435 8.75451C18.9943 9.55812 19.6392 10.8095 19.6392 13.1638C19.6392 16.0214 18.2667 19.012 15.5019 20.1618C15.0264 20.3595 14.535 20.3272 14.0012 20.2105C13.4674 20.0939 13.043 19.5692 11.9999 19.5692Z" stroke={$props.stroke} strokeWidth={$props.strokeWidth}/><path d="M11.9648 7.12801C11.9648 7.12801 12.9004 5.71443 12.1901 4.40152C11.5865 3.28579 9.97408 3.08349 9.97408 3.08349C9.97408 3.08349 9.30008 4.458 9.84829 5.72088C10.2795 6.71417 11.9648 7.12801 11.9648 7.12801Z" stroke={$props.stroke} strokeWidth={$props.strokeWidth} stroke-linejoin="round"/>
        </g>
      </defs>
    )
  }
})

export { Apple }
