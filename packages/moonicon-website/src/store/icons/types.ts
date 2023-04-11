type Icon = {
  name: string
  classification: string
  tags: string[]
  description: string
}

type Customize = {
  size: number
  strokeWidth: number
  stroke: string
  fill: string
}

type CustomizeKeys = keyof Customize

type SearchText = string

type SearchNameType = 'name'

type SearchClassType = 'classification'

type SearchType = SearchNameType | SearchClassType

type IconsStore = {
  onlySelected: boolean
  searchText: SearchText // 筛选值
  searchType: SearchType
  classification: string[]
  icons: Icon[]
  selectedIconsMap: Record<string, boolean>
  customize: Customize
}

export {
  Icon,
  Customize,
  CustomizeKeys,
  IconsStore,
  SearchText,
  SearchType,
  SearchClassType,
  SearchNameType
}
