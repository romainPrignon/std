import { Asyncify } from 'type-fest'
import { UnknownArgs } from './Args'
import { Fun } from './Fun'
import { UnknownReturns } from './Returns'

type AsyncFun<A extends UnknownArgs, R extends UnknownReturns> = Asyncify<Fun<A, R>>

export type {
  AsyncFun
}
