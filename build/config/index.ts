const JsonFields = ['name', 'classification', 'tags', 'description'] as const

export type JsonField = (typeof JsonFields)[number]

export type IconInfo = {
  [key in JsonField]?: key extends 'tags' ? string[] : string
}

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

export { DynamicPropertiesRegs, SvgTags, JsonFields }
