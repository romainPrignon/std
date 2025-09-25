import type { Class } from 'type-fest'

import l, { type CurriedFunction2 } from 'lodash'


/**
 * wrapper around instanceof keyword
 *
 * @example
 * const instanceOfA = instanceOf(A)
 * if (instanceOfA(new A())) // true
 */
const instanceOf: CurriedFunction2<Class<any>, unknown, boolean> = l.curry((Class: Class<any>, value: unknown): boolean =>
  value instanceof Class
)

export {
  instanceOf
}
