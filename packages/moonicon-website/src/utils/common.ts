// 获取图片的url
export const getImageUrl = (name: string): string => {
  return new URL(`../assets/images/${name}.svg`, import.meta.url).href
}
