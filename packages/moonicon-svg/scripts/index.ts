import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
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

const toUpperCaseCamelCase = (str: string): string => {
  return str
    .replace(/[-\s]+/g, ' ') // 把连续的空格或短横线替换成一个空格
    .split(' ') // 以空格为分隔符将字符串分割成单词数组
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1)) // 将每个单词的首字母大写
    .join('') // 将单词数组合并成一个字符串
}

const v3ComponentTemplate = (filename: string, shapeStr: string) => {
  return `
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

const checkOutputDir = (filename: string, template: string) => {
  if (fs.existsSync(svgComponentsFilePath)) {
    writeV3Components(filename, template)
  } else {
    fs.mkdir(svgComponentsFilePath, (err) => {
      if (err) return console.error(err)

      writeV3Components(filename, template)
    })
  }
}

const svgPathList: any[] = []

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
  fs.readdir(svgFilePath, (err, files) => {
    if (err) return console.error(err)

    getSvgPathList(svgFilePath)

    svgPathList.forEach((f) => {
      fs.readFile(f, (err, data) => {
        if (err) return console.error(err)

        const filename = toUpperCaseCamelCase(f
          .split('.svg')[0]
          .split(/[\/\\]/)
          .pop())

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
            shapeObj[key][index] = item.replace(
              /fill="[\s\S]+?"/g,
              'fill="{$props.fill}"'
            )
            shapeObj[key][index] = shapeObj[key][index].replace(
              /stroke="[\s\S]+?"/g,
              'stroke="{$props.stroke}"'
            )
            shapeObj[key][index] = shapeObj[key][index].replace(
              /stroke-width="[\s\S]+?"/g,
              'stroke-width="{$props.strokeWidth}"'
            )
          })
        }

        // 解构shapeObj并拼接成字符串
        const shapeStr = Object.keys(shapeObj)
          .map((key) => {
            return shapeObj[key].join('')
          })
          .join('')

        const template = path && v3ComponentTemplate(filename, shapeStr)
        template && checkOutputDir(filename, template)
      })
    })
  })
}

const writeV3Components = (filename: string, template: string) => {
  const fileOutputPath = path.resolve(svgComponentsFilePath, `${filename}.tsx`)
  fs.writeFile(fileOutputPath, template, (err) => {
    if (err) return console.error(filename + ' transform error: ' + err)
  })
}

const svgToV3Components = () => {
  readSvgFiles()
}

svgToV3Components()
