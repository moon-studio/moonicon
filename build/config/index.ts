const JsonFields = [
  'name',
  'classification',
  'type',
  'tags',
  'description'
] as const

const SvgTags = [
  'path',
  'circle',
  'line',
  'rect',
  'polygon',
  'polyline',
  'ellipse'
] as const

export type JsonField = (typeof JsonFields)[number]

export type IconInfo = {
  [key in JsonField]?: key extends 'tags' ? string[] : string
}

export type SvgTag = (typeof SvgTags)[number]

export type DynamicProperty = 'fill' | 'stroke' | 'stroke-width'
export type DynamicPropertyType = 'fill' | 'line' | 'double'
export type DynamicPropertyReg = {
  name: DynamicProperty
  reg: RegExp
}

export const PropertyToPropMap: Record<DynamicProperty, string> = {
  fill: 'fill',
  stroke: 'stroke',
  'stroke-width': 'strokeWidth'
}

const DynamicFillPropertiesRegs: DynamicPropertyReg[] = [
  { name: 'fill', reg: /fill="[\s\S]+?"/g }
]
const DynamicStrokePropertiesRegs: DynamicPropertyReg[] = [
  { name: 'stroke', reg: /stroke="[\s\S]+?"/g },
  { name: 'stroke-width', reg: /stroke-width="[\s\S]+?"/g }
]
const DynamicDoublePropertiesRegs: DynamicPropertyReg[] = [
  { name: 'fill', reg: /fill="[\s\S]+?"/g },
  { name: 'stroke', reg: /stroke="[\s\S]+?"/g },
  { name: 'stroke-width', reg: /stroke-width="[\s\S]+?"/g }
]

export {
  DynamicFillPropertiesRegs,
  DynamicStrokePropertiesRegs,
  DynamicDoublePropertiesRegs,
  SvgTags,
  JsonFields
}
