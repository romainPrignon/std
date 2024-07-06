import { UnknownArgs } from './Args'
import { UnknownReturns } from './Returns'

type Fun<A extends UnknownArgs, R extends UnknownReturns> = (...args: A) => R

export {
  Fun
}
