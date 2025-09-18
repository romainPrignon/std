import type { Class } from 'type-fest'
import type { UnknownArgs, Fun } from '../../type'

/**
 * return callable function from a Class
 * @example
 * const a = callable(class A {})
 * a() // A
 */
const callable = <C, A extends UnknownArgs>(Class: Class<C, A>): Fun<A, C> => {
  const factoryFunction = (...args: A): C => new Class(...args)


  factoryFunction.prototype = Class.prototype

  return factoryFunction
}


export {
  callable
}
