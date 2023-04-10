import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import { green, red, yellow } from 'kolorist'

const filename = fileURLToPath(import.meta.url)
const _dirname = path.dirname(filename)

const svgFilePath = path.resolve(
  process.env.npm_lifecycle_event === 'compiler'
    ? 'packages/moonicon-svg/files/'
    : './files/'
)
const svgComponentsFilePath = path.resolve(
  process.env.npm_lifecycle_event === 'compiler'
    ? 'packages/moonicon-vue3/components/'
    : path.join(_dirname, '../../moonicon-vue3/components/')
)

const DynamicPropertiesRegs = [
  { name: 'fill', reg: /fill="[\s\S]+?"/g },
  { name: 'stroke', reg: /stroke="[\s\S]+?"/g },
  { name: 'strokeWidth', reg: /stroke-width="[\s\S]+?"/g }
]
// vue 3 组件模板
const v3ComponentTemplate = (filename: string, shapeStr: string) => {
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

const svgPathList: any[] = []
// 已处理文件 map，避免重名文件处理
const processedFilesMap = new Map()
const processedErrorFiles: Record<string, any> = {}

// 文件名称转大写驼峰
const toUpperCaseCamelCase = (str: string): string => {
  return str
    .replace(/[-\s]+/g, ' ') // 把连续的空格或短横线替换成一个空格
    .split(' ') // 以空格为分隔符将字符串分割成单词数组
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1)) // 将每个单词的首字母大写
    .join('') // 将单词数组合并成一个字符串
}

// 同步文件写入
const checkOutputDir = (filename: string, template: string) => {
  try {
    !fs.existsSync(svgComponentsFilePath) && fs.mkdirSync(svgComponentsFilePath)
    writeV3Components(filename, template)
  } catch (e) {
    console.log(e)
  }
}
//
const propToDynamicProp = (str: string): string => {
  for (const { name, reg } of DynamicPropertiesRegs) {
    str = str.replace(reg, `${name}={$props.${name}}`)
  }
  return str
}

const consoleErrorFiles = () => {
  for (const key in processedErrorFiles) {
    console.log(red(processedErrorFiles[key].title))
    processedErrorFiles[key].paths.forEach((p: string) =>
      console.log(yellow(p))
    )
  }
}

// 获取files文件下所有的svg文件路径
const getSvgPathList = (svgFilePath: any) => {
  const stat = fs.statSync(svgFilePath)
  if (stat.isDirectory()) {
    const dirs = fs.readdirSync(svgFilePath)
    dirs.forEach((value) => {
      getSvgPathList(path.join(svgFilePath, value))
    })
  } else if (stat.isFile()) {
    svgPathList.push(svgFilePath)
  }
}

const readSvgFiles = () => {
  fs.readdir(svgFilePath, (err) => {
    if (err) return console.error(err)

    getSvgPathList(svgFilePath)

    svgPathList.forEach((f) => {
      try {
        const data = fs.readFileSync(f)
        const file = f.split(/[\/\\]/).pop()
        const filename = toUpperCaseCamelCase(file.split('.svg')[0])

        // 错误处理
        if (processedFilesMap.has(filename)) {
          if (!processedErrorFiles[filename]) {
            processedErrorFiles[filename] = {
              title: `文件${filename}已处理，此时可能存在重名文件，请检查路径`,
              paths: [processedFilesMap.get(filename), f]
            }
          } else {
            processedErrorFiles[filename].paths.push(f)
          }
          return
        }
        processedFilesMap.set(filename, f)

        // 将svg文件转换为字符串
        const svgStr = data.toString()
        // 创建一个形状标签数组
        const shapeArr: any = [
          'path',
          'circle',
          'line',
          'rect',
          'polygon',
          'polyline',
          'ellipse'
        ]
        // 匹配svg标签中所有形状标签
        const path = svgStr.match(/<path[\s\S]+?\/>/g)
        const circle = svgStr.match(/<circle[\s\S]+?\/>/g)
        const line = svgStr.match(/<line[\s\S]+?\/>/g)
        const rect = svgStr.match(/<rect[\s\S]+?\/>/g)
        const polygon = svgStr.match(/<polygon[\s\S]+?\/>/g)
        const polyline = svgStr.match(/<polyline[\s\S]+?\/>/g)
        const ellipse = svgStr.match(/<ellipse[\s\S]+?\/>/g)

        // 形状标签和数组映射,并将形状标签数组对象中的空值删除,将数组对象倒序排列
        const shapeObj: any = {
          path,
          circle,
          line,
          rect,
          polygon,
          polyline,
          ellipse
        }
        shapeArr.forEach((item: string) => {
          if (!shapeObj[item]) {
            delete shapeObj[item]
          } else {
            shapeObj[item] = shapeObj[item].reverse()
          }
        })

        // 将形状标签数组对象中的形状标签转换为动态属性
        for (const key in shapeObj) {
          shapeObj[key].forEach((item: string, index: number) => {
            shapeObj[key][index] = propToDynamicProp(item)
            // shapeObj[key][index] = item.replace(
            //   /fill="[\s\S]+?"/g,
            //   'fill={$props.fill}'
            // )
          })
        }

        // 解构shapeObj并拼接成字符串
        const shapeStr = Object.keys(shapeObj)
          .map((key) => shapeObj[key].join('\n'))
          .join('')

        const template = shapeStr && v3ComponentTemplate(filename, shapeStr)
        template && checkOutputDir(filename, template)
      } catch (e) {
        console.log(red('Read File Error'), f, e)
      }
    })

    consoleErrorFiles()
  })
}

const writeV3Components = (filename: string, template: string) => {
  const fileOutputPath = path.resolve(svgComponentsFilePath, `${filename}.tsx`)
  try {
    fs.writeFileSync(fileOutputPath, template)
    console.log(green(`Vue 3 Component processed: ${filename}`))
  } catch (e) {
    console.log(red('Read File Error'), filename + ' transform error: ' + e)
  }
}

const svgToV3Components = () => {
  readSvgFiles()
}

svgToV3Components()
