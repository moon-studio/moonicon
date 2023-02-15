import { defineComponent, h } from 'vue'
import type { PropType } from 'vue'
import { MIconConfigs } from '../types'

const props = {
  fill: {
    type: String as PropType<string>,
    default: '#fff'
  }, // fill color
  stroke: {
    type: String as PropType<string>,
    default: '#333'
  }, // stroke color
  strokeWidth: {
    type: [Number, String] as PropType<number | string>,
    default: 1.2
  },
  size: {
    type: [Number, String] as PropType<number | string>,
    default: '24'
  },
  name: {
    type: String as PropType<string>,
    default: ''
  }
}

const MIcon = defineComponent({
  name: 'MIcon',
  props,
  render(props: MIconConfigs) {
    const modules: any = {}
    const files: any = import.meta.glob('../components/*.tsx', { eager: true })
    Object.keys(files).forEach((fileName) => {
      const name = fileName.replace(/\..\/components\/|\.tsx/g, '')
      modules[name] = files[fileName][props.name]
    })

    return (
      props.name &&
      h(
        'svg',
        {
          xmlns: 'http://www.w3.org/2000/svg',
          'xmlns:xlink': 'http://www.w3.org/1999/xlink',
          viewBox: '0 0 24 24',
          width: props.size,
          height: props.size
        },
        [
          h('use', {
            href: '#' + props.name,
            fill: props.fill,
            stroke: props.stroke,
            'stroke-width': props.strokeWidth
          }),
          h(modules[props.name])
        ]
      )
    )
  }
})

export { MIcon }
