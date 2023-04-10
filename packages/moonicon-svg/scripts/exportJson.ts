import fs from 'fs'
import path from 'path'
import jsonData from '../resources/index.json' assert { type: 'json' }

const svgFilePath = path.resolve(
  process.env.npm_lifecycle_event === 'exportJson'
    ? 'packages/moonicon-svg/files/'
    : './files/'
)
// 文件名称转大写驼峰
const toUpperCaseCamelCase = (str: string): string => {
  return str
    .replace(/[-\s]+/g, ' ') // 把连续的空格或短横线替换成一个空格
    .split(' ') // 以空格为分隔符将字符串分割成单词数组
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1)) // 将每个单词的首字母大写
    .join('') // 将单词数组合并成一个字符串
}

type IconInfo = {
  name: string
  classification: string
  tag: string[]
  description: string
}

const checkOutputDir = () => {
  const jsonTemp = svgPathList.map((value) => {
    return {
      name: toUpperCaseCamelCase(path.basename(value, '.svg')),
      classification: path.basename(path.dirname(path.dirname(value))),
      tag: [],
      description: ''
    }
  })
  // 判断jsonData是否为空,是直接创建json文件，否则合并jsonData和jsonTemp
  if (Object.keys(jsonData).length === 0) {
    const content = JSON.stringify(jsonTemp, null, '\t')
    fs.writeFile(
      'packages/moonicon-svg/resources/index.json',
      content,
      function (err) {
        if (err) {
          return console.log(err)
        }
        console.log('json文件创建成功')
      }
    )
  } else {
    const iconMap: Record<string, boolean> = {}
    const icons: IconInfo[] = [...jsonData, ...jsonTemp].reduce(
      (iconArr: IconInfo[], icon: IconInfo) => {
        if (!iconMap[icon.name]) {
          iconMap[icon.name] = true
          iconArr.push(icon)
        }
        return iconArr
      },
      []
    )
    const content = JSON.stringify(icons, null, '\t')
    fs.writeFile(
      'packages/moonicon-svg/resources/index.json',
      content,
      function (err) {
        if (err) {
          return console.log(err)
        }
        console.log('json文件覆盖成功')
      }
    )
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
  fs.readdir(svgFilePath, (err) => {
    if (err) return console.error(err)

    getSvgPathList(svgFilePath)
    checkOutputDir()
  })
}

const exportJson = () => {
  readSvgFiles()
}

exportJson()
