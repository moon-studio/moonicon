// vue 3 组件模板
import type { DynamicPropertyType } from '../config'

const componentHeader = `import { defineComponent, h } from 'vue'
import type { PropType } from 'vue'`

const componentProps: Record<DynamicPropertyType, string> = {
  fill: `const props = {
  size: {
    type: [Number, String] as PropType<number | string>,
    default: '24'
  },
  // fill color
  fill: {
    type: String as PropType<string>,
    default: '#fff'
  }
}`,
  line: `const props = {
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
}`,
  double: `const props = {
  size: {
    type: [Number, String] as PropType<number | string>,
    default: '24'
  },
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
  setup(props) {
    return () => (
      <svg
        width={props.size}
        height={props.size}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
      >
        ${shapeStr}
      </svg>
    )
  }
})

export default ${filename}
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
