import type { UnknownArgs } from './Args'
import type { UnknownReturns } from './Returns'

type Fun<A extends UnknownArgs, R extends UnknownReturns> = (...args: A) => R

export type {
  Fun
}
