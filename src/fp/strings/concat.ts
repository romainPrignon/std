import { CurriedFunction2 } from 'lodash'
import l from 'lodash/fp.js'

const concat: CurriedFunction2<string, string, string> = l.curry((suffix: string, str: string) =>
  str.concat(suffix)
)


export {
  concat
}
