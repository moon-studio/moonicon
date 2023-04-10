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

const SettingFive = defineComponent({
  name: 'SettingFive',
  props,
  render() {
    const $props = this.$props
    
    return h(
      <defs>
        <g id="SettingFive">
          <path d="M4.91667 11.9993C4.91667 15.9716 8.08798 19.1919 12 19.1919C15.912 19.1919 19.0833 15.9716 19.0833 11.9993M4.91667 11.9993C4.91667 8.02692 8.08798 4.80669 12 4.80669C15.912 4.80669 19.0833 8.02692 19.0833 11.9993M4.91667 11.9993L3.5 11.9993M19.0833 11.9993L20.5 11.9993M19.0833 11.9993L12 11.9993M4.01242 14.9513L5.34365 14.4593M18.656 9.53927L19.9872 9.04727M5.4885 17.5478L6.57373 16.6232M17.426 7.37656L18.5113 6.4519M7.74991 19.4748L8.45824 18.229M15.5416 5.77106L16.2499 4.52526M10.5239 20.5L10.7699 19.0833M13.2299 4.91666L13.4759 3.5M13.4759 20.5L13.2299 19.0833M10.7699 4.9167L10.5239 3.50004M16.2499 19.4746L15.5416 18.2288M7.74995 4.52511L12 11.9993M18.5114 17.5472L17.4262 16.6226M6.57387 7.37597L5.48864 6.45131M19.9874 14.9514L18.6562 14.4594M5.34388 9.53942L4.01265 9.04741M12 11.9993L8.45833 18.2282" stroke={$props.stroke} strokeWidth={$props.strokeWidth} stroke-linecap="round" stroke-linejoin="round"/>

        </g>
      </defs>
    )
  }
})

export { SettingFive }
