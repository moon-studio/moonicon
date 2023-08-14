// vue 3 组件模板
import type { DynamicPropertyType } from '../config'

const componentHeader = `import { defineComponent, h } from 'vue'
import type { PropType } from 'vue'`

const componentProps: Record<DynamicPropertyType, string> = {
  fill: `const props = {
  // fill color
  fill: {
    type: String as PropType<string>,
    default: '#fff'
  }
}`,
  line: `const props = {
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
}`,
  double: `const props = {
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
}`
}

const componentBody = (filename: string, shapeStr: string): string => {
  return `const ${filename} = defineComponent({
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

export default (
  filename: string,
  shapeStr: string,
  type: DynamicPropertyType
) => {
  return `${componentHeader}
  
${componentProps[type]}

${componentBody(filename, shapeStr)}`
}
