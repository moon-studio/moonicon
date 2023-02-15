import { positiveNumberRegex, cssSizeUnitRegex } from './regex'
import { exception } from './exception'

export const formatSize = (val: string | number): string | undefined => {
  if (typeof val === 'number') {
    if (positiveNumberRegex.test(String(val))) return val + 'px'

    exception('error', 'Please enter a positive number!')
  } else if (typeof val === 'string') {
    if (positiveNumberRegex.test(val)) return val + 'px'

    if (cssSizeUnitRegex.test(val)) return val

    exception('error', 'Please enter correct CSS units!')
  }
}
