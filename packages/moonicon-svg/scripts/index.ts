import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import { green, red, yellow } from 'kolorist'
import vueNextTemplate from '../component-templates/vue-next'

const pathname = fileURLToPath(import.meta.url)
const _dirname = path.dirname(pathname)

const SvgFilePath = path.resolve(
  process.env.npm_lifecycle_event === 'compiler'
    ? 'packages/moonicon-svg/files/'
    : './files/'
)
const Vue3ComponentsFilePath = path.resolve(
  process.env.npm_lifecycle_event === 'compiler'
    ? 'packages/moonicon-vue3/components/'
    : path.join(_dirname, '../../moonicon-vue3/components/')
)

const DynamicPropertiesRegs = [
  { name: 'fill', reg: /fill="[\s\S]+?"/g },
  { name: 'stroke', reg: /stroke="[\s\S]+?"/g },
  { name: 'strokeWidth', reg: /stroke-width="[\s\S]+?"/g }
]
const SvgTags: string[] = [
  'path',
  'circle',
  'line',
  'rect',
  'polygon',
  'polyline',
  'ellipse'
]

const svgPathList: any[] = []
// 已处理文件 map，避免重名文件处理
const processedFilesMap = new Map()
const processedErrorFiles: Record<string, any> = {}
const processCatchError = (filename: string, path: string) => {
  if (processedFilesMap.has(filename)) {
    if (!processedErrorFiles[filename]) {
      processedErrorFiles[filename] = {
        title: `文件${filename}已处理，此时可能存在重名文件，请检查路径`,
        paths: [processedFilesMap.get(filename), path]
      }
    } else {
      processedErrorFiles[filename].paths.push(path)
    }
    return
  }
  processedFilesMap.set(filename, path)
}
// 文件名称转大写驼峰
const toUpperCaseCamelCase = (str: string): string => {
  return str
    .replace(/[-\s]+/g, ' ') // 把连续的空格或短横线替换成一个空格
    .split(' ') // 以空格为分隔符将字符串分割成单词数组
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1)) // 将每个单词的首字母大写
    .join('') // 将单词数组合并成一个字符串
}

// 校验路径
const checkOutputDir = (filePath: string) => {
  try {
    !fs.existsSync(filePath) && fs.mkdirSync(filePath)
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
const getSvgPathList = (filePath: string) => {
  const stat = fs.statSync(filePath)
  if (stat.isDirectory()) {
    const dirs = fs.readdirSync(filePath)
    dirs.forEach((value) => {
      getSvgPathList(path.join(filePath, value))
    })
  } else if (stat.isFile()) {
    svgPathList.push(filePath)
  }
}

const processSvgFiles = () => {
  fs.readdir(SvgFilePath, (err) => {
    if (err) return console.error(err)

    getSvgPathList(SvgFilePath)

    svgPathList.forEach((f) => {
      try {
        const data = fs.readFileSync(f)
        const file = f.split(/[\/\\]/).pop()
        const filename = toUpperCaseCamelCase(file.split('.svg')[0])

        processCatchError(filename, f)

        // 将svg文件转换为字符串
        const svgStr = data.toString()

        // 匹配svg标签中所有形状标签
        const shapeTagMap: Record<string, any> = {
          path: svgStr.match(/<path[\s\S]+?\/>/g),
          circle: svgStr.match(/<circle[\s\S]+?\/>/g),
          line: svgStr.match(/<line[\s\S]+?\/>/g),
          rect: svgStr.match(/<rect[\s\S]+?\/>/g),
          polygon: svgStr.match(/<polygon[\s\S]+?\/>/g),
          polyline: svgStr.match(/<polyline[\s\S]+?\/>/g),
          ellipse: svgStr.match(/<ellipse[\s\S]+?\/>/g)
        }

        // 转为 vue 3 组件
        svgPathToV3Components(filename, shapeTagMap)
      } catch (e) {
        console.log(red('Read File Error'), f, e)
      }
    })

    consoleErrorFiles()
  })
}

const svgPathToV3Components = (
  filename: string,
  shapeTagMap: Record<string, any>
) => {
  let shapeString = ''
  for (const key of SvgTags) {
    if (shapeTagMap[key]) {
      const len = shapeTagMap[key].length
      for (let idx = 0; idx < len; idx++) {
        shapeString += `${propToDynamicProp(shapeTagMap[key][idx])}\n`
      }
    }
  }
  if (shapeString) {
    checkOutputDir(Vue3ComponentsFilePath)
    writeV3Components(filename, vueNextTemplate(filename, shapeString))
  }
}
const writeV3Components = (filename: string, template: string) => {
  const fileOutputPath = path.resolve(Vue3ComponentsFilePath, `${filename}.tsx`)
  try {
    fs.writeFileSync(fileOutputPath, template)
    console.log(green(`Vue 3 Component processed: ${filename}`))
  } catch (e) {
    console.log(red('Read File Error'), filename + ' transform error: ' + e)
  }
}

processSvgFiles()
