import { Class } from 'type-fest'
import { UnknownArgs, Fun } from '../../type'

/**
 * return callable function from a Class
 * @example
 * const a = callable(class A {})
 * a() // A
 */
const callable = <C extends unknown, A extends UnknownArgs>(Class: Class<C, A>): Fun<A, C> => {
  const factoryFunction = (...args: A): C => new Class(...args)

  // eslint-disable-next-line
  factoryFunction.prototype = Class.prototype

  return factoryFunction
}


export {
  callable
}
