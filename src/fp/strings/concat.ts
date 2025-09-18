import { CurriedFunction2 } from 'lodash'
import l from 'lodash/fp'

const { concat: concatProto } = String.prototype

const concat: CurriedFunction2<string, string, any> = l.curry((content: string, str: string) =>
  l.bind(concatProto, str)(content)
)


export {
  concat
}
