import { Maybe } from '../../type'

import { head } from '.'


const tail = <R>(arr: Array<R>): Maybe<R> =>
  head(arr.slice(-1))


export {
  tail
}
