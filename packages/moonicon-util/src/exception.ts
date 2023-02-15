export const exception = (type: 'error' | 'warn', content: string): void => {
  console[type](content)
}
