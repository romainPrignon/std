import type { Asyncify } from 'type-fest'
import type { UnknownArgs } from './Args'
import type { Fun } from './Fun'
import type { UnknownReturns } from './Returns'

type AsyncFun<A extends UnknownArgs, R extends UnknownReturns> = Asyncify<Fun<A, R>>

export type {
  AsyncFun
}
