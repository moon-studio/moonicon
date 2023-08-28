import fs from 'fs'
import path from 'path'

const CSVFilePath = path.resolve('packages/moonicon-svg/resources/icons.csv')
const JsonFilePath = path.resolve('packages/moonicon-svg/resources/index.json')

const arrayKeys = ['tags']

const readFileString = (filePath: string) => {
  try {
    return fs.readFileSync(filePath).toString()
  } catch (e) {
    return ''
  }
}

const getJsonKeys = (headerString: string) => {
  const keyIndex: Record<number, string> = {}

  headerString.split(',').forEach((cur, currentIndex) => {
    keyIndex[currentIndex] = cur
  })

  return keyIndex
}

const writeJsonContent = () => {
  try {
    const jsonString = readFileString(CSVFilePath)
    if (!jsonString || !jsonString.length) {
      return
    }
    const csvArray = jsonString.split('\n')
    const keyIndex = getJsonKeys(csvArray[0])

    const result: Record<string, any>[] = []
    for (let i = 1; i < csvArray.length; i++) {
      const csvItem = csvArray[i]
      if (csvItem && csvItem.length) {
        const obj: Record<string, unknown> = {}
        csvItem.split(',').forEach((cur, index) => {
          if (arrayKeys.includes(keyIndex[index])) {
            obj[keyIndex[index]] = cur.split('，').filter((i) => i.length)
          } else {
            obj[keyIndex[index]] = cur
          }
        })
        result.push(obj)
      }
    }

    fs.writeFileSync(JsonFilePath, JSON.stringify(result, null, 2))
  } catch (e) {
    console.log(e)
  }
}

writeJsonContent()
