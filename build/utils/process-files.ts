const fs = require('fs')

export function clearFile(filePath: string) {
  fs.writeFileSync(filePath, '')
  console.log(`${filePath} content cleared.`)
}
