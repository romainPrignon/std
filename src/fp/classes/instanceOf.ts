import { Class } from 'type-fest'

import l, { CurriedFunction2 } from 'lodash'


/**
 * wrapper around instanceof keyword
 *
 * @example
 * const instanceOfA = instanceOf(A)
 * if (instanceOfA(new A())) // true
 */
const instanceOf: CurriedFunction2<Class, unknown, boolean> = l.curry((Class: Class, value: unknown): boolean =>
  value instanceof Class
)

export {
  instanceOf
}
