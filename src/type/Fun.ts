import type { UnknownArgs } from './Args.js'
import type { UnknownReturns } from './Returns.js'

type Fun<A extends UnknownArgs, R extends UnknownReturns> = (...args: A) => R

export type {
  Fun
}
