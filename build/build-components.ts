import fs from 'fs'
import path from 'path'
import { red, yellow } from 'kolorist'
import { clearIndexFile, svgPathToV3Components } from "./utils/vue-next-generator";
import { toUpperCaseCamelCase } from './utils/format-file-name'
import type { DynamicPropertyType } from './config'

const SvgFilePath = path.resolve('packages/moonicon-svg/files/')

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

// 打印错误文件处理信息
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

// 开始处理 svg 文件
const processSvgFiles = () => {
  fs.readdir(SvgFilePath, (err) => {
    if (err) return console.error(err)

    getSvgPathList(SvgFilePath)

    svgPathList.forEach((f) => {
      try {
        const data = fs.readFileSync(f)
        const file = f.split(/[\/\\]/).pop()
        const type = path.basename(path.dirname(f)) as DynamicPropertyType // 填充 fill 或者线性 line
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
        svgPathToV3Components(filename, shapeTagMap, type)
      } catch (e) {
        console.log(red('Read File Error'), f, e)
      }
    })

    consoleErrorFiles()
  })
}

clearIndexFile()
processSvgFiles()
