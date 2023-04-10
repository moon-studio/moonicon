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

const SettingOne = defineComponent({
  name: 'SettingOne',
  props,
  render() {
    const $props = this.$props
    
    return h(
      <defs>
        <g id="SettingOne">
          <path d="M10.9484 4.63822C11.4101 3.83705 12.5662 3.83705 13.0279 4.63823L13.7264 5.8504C13.9979 6.32158 14.5523 6.55128 15.0774 6.41019L16.4276 6.04747C17.3201 5.80769 18.1373 6.62445 17.898 7.5171L17.5346 8.87272C17.394 9.39734 17.6232 9.95102 18.0936 10.2226L19.3081 10.924C20.108 11.3859 20.108 12.5404 19.3081 13.0023L18.0936 13.7037C17.6232 13.9753 17.394 14.529 17.5346 15.0536L17.898 16.4092C18.1373 17.3019 17.3201 18.1186 16.4276 17.8788L15.0774 17.5161C14.5523 17.375 13.9979 17.6047 13.7264 18.0759L13.0279 19.2881C12.5662 20.0893 11.4101 20.0893 10.9484 19.2881L10.2499 18.0759C9.97843 17.6047 9.42402 17.375 8.89884 17.5161L7.54869 17.8788C6.65616 18.1186 5.83897 17.3019 6.07827 16.4092L6.44169 15.0536C6.58233 14.529 6.35305 13.9753 5.88269 13.7037L4.66815 13.0023C3.86825 12.5404 3.86825 11.3859 4.66815 10.924L5.88269 10.2226C6.35305 9.95102 6.58233 9.39734 6.44169 8.87272L6.07827 7.5171C5.83897 6.62445 6.65616 5.80769 7.54869 6.04747L8.89884 6.41019C9.42402 6.55128 9.97843 6.32158 10.2499 5.8504L10.9484 4.63822Z" stroke={$props.stroke} strokeWidth={$props.strokeWidth}/>
<ellipse cx="11.988" cy="11.9632" rx="2.49937" ry="2.50204" stroke={$props.stroke} strokeWidth={$props.strokeWidth}/>

        </g>
      </defs>
    )
  }
})

export { SettingOne }
