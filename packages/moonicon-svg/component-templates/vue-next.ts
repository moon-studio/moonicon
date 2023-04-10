// vue 3 组件模板
export default (filename: string, shapeStr: string) => {
  return `import { defineComponent, h } from 'vue'
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

const ${filename} = defineComponent({
  name: '${filename}',
  props,
  render() {
    const $props = this.$props
    
    return h(
      <defs>
        <g id="${filename}">
          ${shapeStr}
        </g>
      </defs>
    )
  }
})

export { ${filename} }
`
}
