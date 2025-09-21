import type { UnknownArgs, Fun } from '../../type/index.js'
import * as ix from 'ix/asynciterable'

type AnyContainer<T> =
  | T[]
  | Iterable<T>
  | AsyncIterable<T>
  | Promise<T[]>
  | Promise<Iterable<T>>
  | Promise<AsyncIterable<T>>

type ExtractContainerType<T> = T extends AnyContainer<infer U> ? U : never


type From = <A extends UnknownArgs, R extends AnyContainer<any>>
  (fun: Fun<A, R>) => (...args: A) => ix.AsyncIterableX<ExtractContainerType<R>>
const from: From = (fun) => (...args) =>
  ix.from(fun(...args))


export {
  from
}
