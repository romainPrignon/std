import type { Maybe } from '../../type/index.js'

import { head } from './head.js'


const tail = <R>(arr: Array<R>): Maybe<R> =>
  head(arr.slice(-1))


export {
  tail
}
