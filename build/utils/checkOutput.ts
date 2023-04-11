import fs from 'fs'

// 校验路径
export const checkOutputDir = (filePath: string) => {
  try {
    !fs.existsSync(filePath) && fs.mkdirSync(filePath)
  } catch (e) {
    console.log(e)
    return false
  }
}
// 校验文件
export const checkOutputFile = (filePath: string, clear?: boolean) => {
  try {
    fs.accessSync(filePath, fs.constants.F_OK)
    console.log(`${filePath} exists.`)
    if (clear) {
      fs.writeFileSync(filePath, '')
      console.log(`${filePath} content cleared.`)
    }
  } catch (err) {
    fs.writeFileSync(filePath, '')
    console.log(`${filePath} created.`)
  }
}
