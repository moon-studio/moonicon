// 文件名称转大写驼峰
export const toUpperCaseCamelCase = (str: string): string => {
  return str
    .replace(/[-\s]+/g, ' ') // 把连续的空格或短横线替换成一个空格
    .split(' ') // 以空格为分隔符将字符串分割成单词数组
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1)) // 将每个单词的首字母大写
    .join('') // 将单词数组合并成一个字符串
}
