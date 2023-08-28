import vueNextTemplate from '../component-templates/vue-next'
import path from 'path'
import fs from 'fs'
import { green, red } from 'kolorist'
import {
  DynamicFillPropertiesRegs,
  DynamicStrokePropertiesRegs,
  DynamicDoublePropertiesRegs,
  SvgTags,
  type DynamicPropertyType,
  PropertyToPropMap
} from '../config'
import { checkOutputDir } from './checkOutput'

const dynamicPropertiesRegs = {
  fill: DynamicFillPropertiesRegs,
  line: DynamicStrokePropertiesRegs,
  double: DynamicDoublePropertiesRegs
}

const Vue3FilePath = path.resolve('packages/moonicon-vue3/components/')
const Vue3IndexFilePath = path.resolve('packages/moonicon-vue3/index.ts')

export const clearIndexFile = () => {
  fs.writeFileSync(Vue3IndexFilePath, '')
}
export const appendIndexFile = (filename: string) => {
  fs.appendFileSync(
    Vue3IndexFilePath,
    `export { default as ${filename} } from './components/${filename}';\n`
  )
}

export const propToV3DynamicProp = (
  str: string,
  type: DynamicPropertyType
): string => {
  for (const { name, reg } of dynamicPropertiesRegs[type]) {
    str = str.replace(reg, `${name}={props.${PropertyToPropMap[name]}}`)
  }
  return str
}

export const svgPathToV3Components = (
  filename: string,
  shapeTagMap: Record<string, any>,
  type: DynamicPropertyType
) => {
  let shapeString = ''
  for (const key of SvgTags) {
    if (shapeTagMap[key]) {
      const len = shapeTagMap[key].length
      for (let idx = 0; idx < len; idx++) {
        shapeString += propToV3DynamicProp(shapeTagMap[key][idx], type)
      }
    }
  }
  if (shapeString) {
    checkOutputDir(Vue3FilePath)
    appendIndexFile(filename)
    writeV3Components(filename, vueNextTemplate(filename, shapeString, type))
  }
}
export const writeV3Components = (filename: string, template: string) => {
  const fileOutputPath = path.resolve(Vue3FilePath, `${filename}.tsx`)
  try {
    fs.writeFileSync(fileOutputPath, template)
    console.log(green(`Vue 3 Component processed: ${filename}`))
  } catch (e) {
    console.log(red('Read File Error'), filename + ' transform error: ' + e)
  }
}
