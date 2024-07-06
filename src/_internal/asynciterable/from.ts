import { UnknownArgs, Fun, UnknownReturns } from '../../type'
import * as ix from 'ix/asynciterable'


type From = <A extends UnknownArgs, R extends UnknownReturns>
  (fun: Fun<A, ix.AsyncIterableInput<R>>) => (...args: A) => ix.AsyncIterableX<R>
const from: From = (fun) => (...args) =>
  ix.from(fun(...args))


export {
  from
}
