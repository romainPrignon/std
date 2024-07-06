import * as ix from 'ix/iterable'
import { Fun, UnknownArgs, UnknownReturns } from '../../type'

type IterableInput<T> = Iterable<T> | Iterator<T>

type From = <A extends UnknownArgs, R extends UnknownReturns>
  (fun: Fun<A, IterableInput<R>>) => (...args: A) => ix.IterableX<R>
const from: From = (fun) => (...args) =>
  ix.from(fun(...args))


export {
  from
}
