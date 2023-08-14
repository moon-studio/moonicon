import fs from 'fs'
import path from 'path'
import { toUpperCaseCamelCase } from './utils/format-file-name'
import { type IconInfo } from './config'
import { checkOutputFile } from './utils/checkOutput'
import { green } from 'kolorist'

const SvgFilePath = path.resolve('packages/moonicon-svg/files/')
const JsonFilePath = path.resolve('packages/moonicon-svg/resources/index.json')

const svgPathList: string[] = []

// 单个文件的信息处理
const processIconInfo = (svgPath: string): IconInfo => {
  const name = toUpperCaseCamelCase(path.basename(svgPath, '.svg'))
  const classification = path.basename(path.dirname(path.dirname(svgPath)))
  const type = path.basename(path.dirname(svgPath))
  return {
    name,
    classification,
    type,
    tags: [],
    description: ''
  }
}

//
const processJsonContent = () => {
  const jsonTemp: IconInfo[] = svgPathList.map(processIconInfo)
  return JSON.stringify(jsonTemp, null, '\t')
}

const writeJsonContent = (filePath: string, jsonString: string) => {
  try {
    fs.writeFileSync(filePath, jsonString)
    console.log(green('Json file updated'), filePath)
  } catch (e) {
    console.log(e)
  }
}

// 获取files文件下所有的svg文件路径
const getSvgPathList = (SvgFilePath: string) => {
  const stat = fs.statSync(SvgFilePath)
  if (stat.isDirectory()) {
    const dirs = fs.readdirSync(SvgFilePath)
    return dirs.forEach((value) => {
      getSvgPathList(path.join(SvgFilePath, value))
    })
  }
  if (stat.isFile()) {
    return svgPathList.push(SvgFilePath)
  }
}

const processSvgFilesToJson = () => {
  fs.readdir(SvgFilePath, (err) => {
    if (err) return console.error(err)

    getSvgPathList(SvgFilePath)
    checkOutputFile(JsonFilePath, true)

    const jsonString = processJsonContent()
    writeJsonContent(JsonFilePath, jsonString)
  })
}

processSvgFilesToJson()
