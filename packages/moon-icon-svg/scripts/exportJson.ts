import fs from 'fs'
import path from 'path'
import jsonData from '../resources/index.json' assert { type: 'json' }

const svgFilePath = path.resolve(
  process.env.npm_lifecycle_event === 'exportJson'
    ? 'packages/moon-icon-svg/files/'
    : './files/'
)

const checkOutputDir = () => {
  const jsonTemp = svgPathList.map((value) => {
    return {
      name: path.basename(value, '.svg'),
      classification: path.basename(path.dirname(path.dirname(value))),
      tag: [],
      description: ''
    }
  })
  // 判断jsonData是否为空,是直接创建json文件，否则合并jsonData和jsonTemp
  if (Object.keys(jsonData).length === 0) {
    const content = JSON.stringify(jsonTemp, null, '\t')
    fs.writeFile(
      'packages/moon-icon-svg/resources/index.json',
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
    const icons: typeof jsonData = [...jsonData, ...jsonTemp].reduce(
      (iconArr: typeof jsonData, icon) => {
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
      'packages/moon-icon-svg/resources/index.json',
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
  fs.readdir(svgFilePath, (err, files) => {
    if (err) return console.error(err)

    getSvgPathList(svgFilePath)
    checkOutputDir()
  })
}

const exportJson = () => {
  readSvgFiles()
}

exportJson()
