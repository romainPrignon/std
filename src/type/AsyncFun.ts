import type { Asyncify } from 'type-fest'
import type { UnknownArgs } from './Args.js'
import type { Fun } from './Fun.js'
import type { UnknownReturns } from './Returns.js'

type AsyncFun<A extends UnknownArgs, R extends UnknownReturns> = Asyncify<Fun<A, R>>

export type {
  AsyncFun
}
