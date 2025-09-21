import type { UnknownArgs, Fun, UnknownReturns } from '../../type/index.js'
import * as ix from 'ix/asynciterable'


type From = <A extends UnknownArgs, R extends UnknownReturns>
  (fun: Fun<A, ix.AsyncIterableX<R>>) => (...args: A) => ix.AsyncIterableX<R>
const from: From = (fun) => (...args) =>
  ix.from(fun(...args))


export {
  from
}
